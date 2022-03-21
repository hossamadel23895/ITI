<?php

require("vendor/autoload.php");

ini_set('memory_limit', '-1');

$weather = new Weather();
$egyptian_cities = $weather->get_cities();

if (isset($_POST["city"])) {
    $weather_object = $weather->get_weather_object($_POST["city"]);

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

<style>
    .weather_row {
        display: flex;
        align-content: center;
        align-items: center;
    }
</style>

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
    <h3> <?php echo(isset($_POST["city"])? "$city_name Weather Status": ""); ?>  </h3>

    <div class="weather_report">
        <div class="weather_row">
            <label> Time :</label>
            <p> <?php echo(isset($_POST["city"])? $time: ""); ?> </p>
        </div>
    </div>
    <div class="weather_report">
        <div class="weather_row">
            <label> Main weather :</label>
            <p> <?php echo(isset($_POST["city"])? $day: ""); ?> </p>
        </div>
    </div>
    <div class="weather_report">
        <div class="weather_row">
            <label> Main weather :</label>
            <p> <?php echo(isset($_POST["city"])? $main_weather: ""); ?> </p>
            <img src=" <?php echo(isset($_POST["city"])? $icon_link: ""); ?> ">
        </div>
    </div>
    <div class="weather_report">
        <div class="weather_row">
            <label> Minimum temprature :</label>
            <p> <?php echo(isset($_POST["city"])? "$min_temp °C": ""); ?> </p>
        </div>
    </div>
    <div class="weather_report">
        <div class="weather_row">
            <label> Maximum temprature :</label>
            <p> <?php echo(isset($_POST["city"])? "$max_temp °C": ""); ?> </p>
        </div>
    </div>
    <div class="weather_report">
        <div class="weather_row">
            <label> Humidity :</label>
            <p> <?php echo(isset($_POST["city"])? "$humidity %": ""); ?> </p>
        </div>
    </div>
    <div class="weather_report">
        <div class="weather_row">
            <label> Wind :</label>
            <p> <?php echo(isset($_POST["city"])? "$wind km/h": ""); ?> </p>
        </div>
    </div>
</body>

</html>