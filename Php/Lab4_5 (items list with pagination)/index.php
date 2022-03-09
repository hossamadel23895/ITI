<?php
session_start();
require_once "vendor/autoload.php";

use Illuminate\Database\Capsule\Manager as DBCM;

$dbcm = new DBCM();
$dbcm->addConnection([
    "driver" => _driver_,
    "host" => _host_,
    "database" => _database_,
    "username" => _username_,
    "password" => _password_,
]);
$dbcm->setAsGlobal();
$dbcm->bootEloquent();
$index = (isset($_GET["index"]) && is_numeric($_GET["index"]) && $_GET["index"] > 0) ? (int) $_GET["index"] : 0;
$counter = DBCM::table("items")->skip($index)->take(_Pager_size_)->count();
$next_index = (($index + _Pager_size_) < $counter) ? $index + _Pager_size_ : abs($counter - _Pager_size_);
$next_link = "http://localhost/Lab4_5/index.php?index=$next_index";
$previous_index = (($index - _Pager_size_) >= 0) ? $index - _Pager_size_ : 0;
$previous_link = "http://localhost/Lab4_5/index.php?index=$previous_index";

if (isset($_GET["glass"]) && is_numeric($_GET["glass"]) && $_GET["glass"] >= 0) {
    require_once "views/details.php";
} else {
    require_once "views/table.php";
}
if (isset($_POST['item'])) {
    $result = DBCM::table("items")->where("product_name", $_POST['item'])->first();
    if (DBCM::table('items')->where('product_name', $_POST['item'])->exists()) {
        require_once "views/result.php";
    } else {
        require_once "views/table.php";
    }
}
