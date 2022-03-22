<?php

session_start();

require_once("vendor/autoload.php");

$employees = new Employees;

// Next and previous needed data
$emp_index = isset($_SESSION['emp_index']) ? $_SESSION['emp_index'] : 0;
$emps_number = $employees->get_emps_number();

// Next and previous implementation
if (isset($_POST['next'])) {
    $emp_index = $emp_index >= $emps_number - 1 ? $emps_number - 1 : $emp_index + 1;
}

if (isset($_POST['previous'])) {
    $emp_index = $emp_index <= 0 ? 0 : $emp_index - 1;
}

// Operations needed data
$name = isset($_POST['name']) ? $_POST['name'] : "";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "";
$address = isset($_POST['address']) ? $_POST['address'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";
$search_name = isset($_POST['search_name']) ? $_POST['search_name'] : "";
$app_message = "";

// Operations implementation
if (isset($_POST['insert'])) {
    $employees->insert_emp($name, $phone, $address, $email);
    $emps_number++;
    $emp_index = $emps_number - 1;
    $app_message = "Employee was successfully added.";
}
if (isset($_POST['update'])) {
    $employees->update_emp($emp_index, $name, $phone, $address, $email);
    $app_message = "Employee Info. was successfully updated.";
}
if (isset($_POST['delete'])) {
    $employees->delete_emp($emp_index);
    $emps_number--;
    $emp_index = $emp_index <= 0 ? 0 : $emp_index - 1;
    $app_message = "Employee was successfully deleted.";
}
if (isset($_POST['search'])) {
    $search_result = $employees->search_by_name($search_name);
    if ($search_result == -1) {
        $app_message = "This name doesn't match any Employee.";
    } else {
        $emp_index = $search_result;
        $app_message = "Employee was found!";
    }
}

// Updating session variables
$_SESSION['emp_index'] = $emp_index;

// getting current employee data
$employee = $employees->get_employee($emp_index);

require_once("views/index.html");
