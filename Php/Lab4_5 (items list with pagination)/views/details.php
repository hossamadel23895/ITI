<?php 
use Illuminate\Database\Capsule\Manager as Capsule;

$id = $_GET["glass"];

if (Capsule::table('items')->where('id',$id)->exists())
{
       $glass=Capsule::table('items')->where('id',$id)->first();
}else{
    die("Glass is not exist");
}
?>
<html>
  <h4> Name: <?php  echo $glass->product_name; ?> </h4>
  <h4> Country: <?php  echo $glass->CouNtry; ?> </h4>
  <h2>  <img src="Resources/images/<?php echo $glass->Photo; ?>" /></h2>


</html>