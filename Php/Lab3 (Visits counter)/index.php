<?php
session_start();
require_once "vendor/autoload.php";

// Adding a visit to the counter if this user is visiting for the first time.
if (!isset($_SESSION['visited'])) {
    $_SESSION['visited'] = true;
    Counter::addVisit();
}

// Displaying the counter.
$count = Counter::getCount();
echo "<h1>Current visits count: $count</h1>";