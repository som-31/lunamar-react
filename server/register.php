<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

try{
    $connection = new mysqli("localhost", "root", "", "lunamar", 4306);
    // Check connection
if ($connection -> connect_errno) {
    echo "Failed to connect to MySQL: " . $connection->connect_error;
    exit();
  }
    $stmt = $connection->prepare("INSERT INTO user (first_name, last_name, email, phone, date_of_birth, gender, password) 
    VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $_POST['firstname'], 
    $_POST['lastname'], $_POST['email'], $_POST['phone'], $_POST['dob'], $_POST['gender'], $_POST['password']);
    $result = $stmt->execute();
    print_r($result->fetch_result);
    
    // if($result){
    //     $stmt = $connection->prepare("INSERT INTO user (first_name, last_name, email, phone, date_of_birth, gender, password) 
    //     VALUES (?, ?, ?, ?, ?, ?, ?)");
    //     $stmt->bind_param("sssssss", $_POST['firstname'], 
    //     $_POST['lastname'], $_POST['email'], $_POST['phone'], $_POST['dob'], $_POST['gender'], $_POST['password']);
    //     $result = $stmt->execute();
    // }
    $connection->close();
    echo $result;
} catch(Exception $e){
  echo $e->getMessage();
}
?>
