<?php

class UtilityTest extends PHPUnit\Framework\TestCase{

    private $utility;

	public function setup() : void {
        $this->utility = new Utility();
    }

    public function test_user_name_is_valid_length(){
        $this->assertTrue($this->utility->validate_userName("Hossam") === 1);
        $this->assertTrue($this->utility->validate_userName("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH") === 0);
    }

    public function test_email_syntax_is_valid(){
        $this->assertTrue($this->utility->validate_email_syntax("@gmail.com") === 0);
        $this->assertTrue($this->utility->validate_email_syntax("hossamgmail.com") === 0);
        $this->assertTrue($this->utility->validate_email_syntax("hossam@gmail") === 0);
        $this->assertTrue($this->utility->validate_email_syntax("hossam@gmail.com") === 1);
    }

    public function test_password_syntax_is_valid(){
        $this->assertTrue($this->utility->validate_password_syntax("12345678") === 0);
        $this->assertTrue($this->utility->validate_password_syntax("hossam123") === 0);
        $this->assertTrue($this->utility->validate_password_syntax("Hossam123") === 1);
    }

    public function test_passwords_fields_are_matching(){
        $this->assertTrue($this->utility->validate_password_matching(1111, 1112) === 0);
        $this->assertTrue($this->utility->validate_password_matching(1111, 1111) === 1);
    }

    public function test_random_key_length_is_valid(){
        $this->assertTrue(strlen($this->utility->randomkey(10)) === 10);
    }
}
