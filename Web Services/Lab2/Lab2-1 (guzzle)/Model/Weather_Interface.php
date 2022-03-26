<?php
interface Weather_Interface {
    public function get_cities();
    public function get_weather($cityName);
}