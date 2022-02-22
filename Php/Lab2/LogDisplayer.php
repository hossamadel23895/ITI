<?php
$usersData = file("log.txt");
$identifiers = array("Visit Date", "IP Adress", "Name", "Email");

foreach ($usersData as $key => $value) {
    echo "<h3><center> user $key </center></h3></br>";
    $splitedArray = explode(",", $value);
    array_pop($splitedArray);
    foreach ($splitedArray as $index => $val) {
        echo "<center> " . $identifiers[$index] . ": " . $val . " </br> </center>";
    }
    echo "</br> <hr /> </br>";
}