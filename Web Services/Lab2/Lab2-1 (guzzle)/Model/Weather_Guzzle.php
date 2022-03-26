<?php

class Weather_Guzzle implements Weather_Interface {

    private static $api_key = "0b877aa3d0962d2f1fa697f8086f0401";

    public function get_cities() {
        $egyptian_cities_names = [];

        $cities_file_handler = fopen("resources/city.list.json", "r") or die("Unable to open file!");
        $cities_file_string = fread($cities_file_handler, filesize("resources/city.list.json"));
        $cities_file_array = json_decode($cities_file_string, true);

        foreach ($cities_file_array as $city_object) {
            foreach ($city_object as $key => $value) {
                if ($key == "country" && $value == "EG") {
                    array_push($egyptian_cities_names, $city_object["name"]);
                }
            }
        }

        fclose($cities_file_handler);

        return $egyptian_cities_names;
    }

    public function get_weather($cityName) {
        $apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" . $cityName . "&APPID=" . SELF::$api_key;
        $client = new GuzzleHttp\Client();
        $response = $client->get($apiUrl);
        return json_decode($response->getBody());
    }
}
