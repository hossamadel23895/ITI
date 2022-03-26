<?php

session_start();

require_once "vendor/autoload.php";

$db = new Database();

$api = new ApiHelper();

$method = $api->get_method();
$table_name = $api->get_table_name();
$item_id = $api->get_item_id();

if ($method == "get") {
    if ($table_name == "items") {
        try {
            $item = $db->Table($table_name)->where('id', $item_id)->first();
        } catch (\Illuminate\Database\QueryException $ex) {
            die(ApiHelper::output(array("Error" => "Internal server error!"), 500));
        }
        if ($item != null) {
            ApiHelper::output(array("Resource found" => $item));
        } else {
            ApiHelper::output(array("Error" => "Item doesn't exist!"), 404);
        }
    } else {
        ApiHelper::output(array("Error" => "Resource doesn't exist!"), 404);
    }
} else {
    ApiHelper::output(array("Error" => "Method not allowed!"), 405);
};
