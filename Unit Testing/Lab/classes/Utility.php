<?php

class Utility {

    public static function validate_userName($name) {
        return (strlen(trim($name)) < 255) ? 1 : 0;
    }

    public static function validate_email_syntax($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL) ? 1 : 0;
    }

    public static function validate_password_syntax($password) {
        return (trim(preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/", $password))) ? 1 : 0;
    }

    public static function validate_password_matching($first_pass, $second_pass) {
        return ($first_pass == $second_pass) ? 1 : 0;
    }

    public static function randomkey($length) {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return substr(str_shuffle($chars), 0, $length);
    }
}