<html>
<form method="post">
    <input type="text" name="item" placeholder="item..." class="button" />
    <input type="submit" name="confirm" class="button" value="search" />
</form>

</html>
<?php


echo "<table border='1'>";
$record_index = 0;
foreach ($all_requrds as $item) {
    if ($record_index === 0) {
        echo "<tr>";
        echo "<td> Name </td>";
        echo "<td> Price </td>";
        echo "<td> Country </td>";
        // echo "<td> Photo </td>";
        echo "<td> Details </td>";

        echo "</tr>";
    }
    echo "<tr>";
    //$image=explode(".",$item->Photo);
    //$image=$image[0]."tz".".png";
    $current_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $current_url = explode("?", $current_url);
    $details = $current_url[0] . "?glass=" . $item->id;
    echo "<td>" . $item->product_name . "</td>";
    echo "<td>" . $item->list_price . "</td>";
    echo "<td>" . $item->CouNtry . "</td>";
    //echo "<td><img src='Resources/images/".$image."'></td>";
    echo "<td><a href='" . $details . "'>more</a></td>";

    echo "</tr>";

    $record_index++;
}
echo "</table>";
?>
<div>
    <a href="<?php echo $previous_link;  ?>">
        << Prev </a> | <a href="<?php echo $next_link;  ?>"> Next >> </a>
</div>