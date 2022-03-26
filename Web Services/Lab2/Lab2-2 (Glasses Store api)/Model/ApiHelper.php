<?php

class ApiHelper {
    private $table_name;
    private $item_id;
    private $uri;

    // Getters
    public function get_table_name() {
        return $this->table_name;
    }

    public function get_item_id() {
        return $this->item_id;
    }

    // Constructor
    public function __construct() {
        $this->method = $this->get_method();
        $this->read_resource();

        if ($this->table_name === "" || $this->item_id === -1) {
            $this->output(array("Error" => "Resource does not exist"), 404);
        }
    }

    // Methods
    public function get_method() {
        $allowed = array("get", "post", "put", "delete");

        if (in_array(strtolower($_SERVER["REQUEST_METHOD"]), $allowed)) {
            return strtolower($_SERVER["REQUEST_METHOD"]);
        } else {
            return strtolower("not_allowed");
        }
    }

    private function read_resource() {
        $allowed = array("items");
        $this->uri = $_SERVER["REQUEST_URI"];
        $pieces = explode("/", $this->uri);
        $this->table_name = isset($pieces[4]) && in_array($pieces[3], $allowed) ? $pieces[3] : "";
        $this->item_id = isset($pieces[4]) && is_numeric($pieces[4]) ? $pieces[4] : -1;
    }


    public static function output($response, $response_code = 200) {
        http_response_code($response_code);
        header("Content-Type: application/json");
        echo json_encode($response);
        exit();
    }
}
