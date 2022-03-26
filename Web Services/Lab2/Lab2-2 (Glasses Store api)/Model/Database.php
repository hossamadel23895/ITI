<?php

use Illuminate\Database\Capsule\Manager as Capsule;

class Database {

    function __construct() {
        $capsule = new Capsule();
        $capsule->addConnection([
            "driver" => Driver,
            "host" => Host,
            "database" => Database,
            "username" => Username,
            "password" => Password
        ]);
        $capsule->setAsGlobal();
        $capsule->bootEloquent();
    }

    public function Table($table) {
        return Capsule::table($table);
    }
}