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
// SELECT * FROM user WHERE email = ? AND password = ?
    $stmt = $connection->prepare("SELECT * FROM user WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $_POST['email'], $_POST['password']);
    $stmt->execute();
    $result = $stmt->get_result();
    $records = $result->fetch_assoc();
    $connection->close();
    if(!$records){
        echo 'No user found';
    }else {
        echo json_encode($records);
    }
} catch(Exception $e){
  echo $e->getMessage();
}
?>
