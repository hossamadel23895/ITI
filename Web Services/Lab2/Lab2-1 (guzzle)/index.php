<?php

require_once("vendor/autoload.php");

ini_set('memory_limit', '-1');

$weather = new Weather_Guzzle();
$egyptian_cities = $weather->get_cities();

if (isset($_POST["city"])) {
    $weather_object = $weather->get_weather($_POST["city"]);

    // html elements data.
    $city_name = $_POST["city"];
    $time = date('l H:i a');
    $day = date('jS F, Y');
    $main_weather = $weather_object->weather[0]->main;
    $icon_code = $weather_object->weather[0]->icon;
    $icon_link = "http://openweathermap.org/img/w/$icon_code.png";
    $min_temp = $weather_object->main->temp_min;
    $max_temp = $weather_object->main->temp_max;
    $humidity = $weather_object->main->humidity;
    $wind = $weather_object->wind->speed;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather api test</title>
</head>

<body>
    <form action="index.php" method="post">
        <select name="city" id="drop_down_menu">
            <?php
            foreach ($egyptian_cities as $city) {
                echo "<option value='$city'>$city</option>";
            };
            ?>
        </select>
        <button>Get Weather</button>
    </form>
    <h4> <?php echo (isset($_POST["city"]) ? "$city_name Weather Status" : ""); ?> </h4>
    <p> <?php echo (isset($_POST["city"]) ? $time : ""); ?> </p>
    <p> <?php echo (isset($_POST["city"]) ? $day : ""); ?> </p>
    <p> <?php echo (isset($_POST["city"]) ? $main_weather : ""); ?> </p>
    <img src=" <?php echo (isset($_POST["city"]) ? $icon_link : ""); ?> ">
    <p> <?php echo (isset($_POST["city"]) ? "$min_temp °C" : ""); ?> </p>
    <p> <?php echo (isset($_POST["city"]) ? "$max_temp °C" : ""); ?> </p>
    <p> <?php echo (isset($_POST["city"]) ? "$humidity %" : ""); ?> </p>
    <p> <?php echo (isset($_POST["city"]) ? "$wind km/h" : ""); ?> </p>
</body>

</html>