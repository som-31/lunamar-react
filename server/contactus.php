<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
// Port will be removed once deployed on the cloud


try{
    $connection = new mysqli("localhost", "root", "", "test1");
    // Check connection
if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }
    // $conn = mysqli_connect("localhost", "root", "", "test1", 4306);
    // var_dump($connection);
    // die('in here')
    $stmt = $connection->prepare("INSERT INTO contactus (name, email, phone, query) VALUES (?, ?, ?, ?)");
    
    $stmt->bind_param("ssss", $_POST['name'], $_POST['email'], $_POST['phone'], $_POST['query']);
    $stmt->execute();
    var_dump($stmt);

    // $query = "insert into contactus (name, email, phone, query)
    // values(
    // '" . $_POST['name'] . "',
    // '" . $_POST['email'] . "',
    // '" . $_POST['phone'] . "',
    // '" . $_POST['query'] . "',
    // )";
    // var_dump($query);
    // $result = mysqli_query($conn, $query);
    // var_dump($result);
    // if ($result) {
    //     echo json_encode(["sent" => 1, ]);
    // } else {
    //     echo json_encode(["sent" => 0, ]);
    // }
} catch(Exception $e){
  echo $e->getMessage();
}
?>
