<?php
$item = $_POST['item'];

echo "<br>";
echo "<table border='1'>";

echo "<tr>";
echo "<td> Name </td>";
echo "<td> Price </td>";
echo "<td> Country </td>";

echo "<td> Details </td>";
echo "</tr>";


echo "<tr>";
$current_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$current_url = explode("?", $current_url);
$details = $current_url[0] . "?glass=" . $result->id;
echo "<td>" . $result->product_name . "</td>";
echo "<td>" . $result->list_price . "</td>";
echo "<td>" . $result->CouNtry . "</td>";
echo "<td><a href='" . $details . "'>more</a></td>";
echo "</tr>";

echo "</table>";
