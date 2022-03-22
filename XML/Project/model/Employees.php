<?php

class Employees {

    public $xmlfile;

    public function __construct() {
        $this->xmlfile = simplexml_load_file("Resources/Employees.xml");
    }

    public function get_employee($index) {
        $employee = [];
        foreach ($this->xmlfile->Employee[$index] as $key => $value) {
            $employee[$key] = $value->__toString();
        };
        return $employee;
    }

    public function get_emps_number() {
        return count($this->xmlfile->Employee);
    }

    public function insert_emp($name, $phone, $address, $email) {
        $new_emp = $this->xmlfile->addChild("Employee");
        $new_emp->addChild("name", $name);
        $new_emp->addChild("phone", $phone);
        $new_emp->addChild("address", $address);
        $new_emp->addChild("email", $email);
        $this->xmlfile->asXML("Resources/Employees.xml");
    }

    public function update_emp($index, $name, $phone, $address, $email) {
        $this->xmlfile->Employee[$index]->name = $name;
        $this->xmlfile->Employee[$index]->phone = $phone;
        $this->xmlfile->Employee[$index]->address = $address;
        $this->xmlfile->Employee[$index]->email = $email;
        $this->xmlfile->asXML("Resources/Employees.xml");
    }

    public function delete_emp($index) {
        unset($this->xmlfile->Employee[$index]);
        $this->xmlfile->asXML("Resources/Employees.xml");
    }

    public function search_by_name($search_name) {
        $index = 0;
        foreach ($this->xmlfile->Employee as $employee) {
            if ($employee->name == $search_name) {
                return $index;
            } else {
                $index++;
            }
        };
        return -1;
    }
}
