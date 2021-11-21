<?php
/**
 * To allow cross origin access
 */
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

try{
    /**
     * Make connection to database
     */
    $connection = new mysqli("localhost", "root", "", "test");

    // Check connection
    if ($connection -> connect_errno) {
        echo "Failed to connect to MySQL: " . $connection -> connect_error;
        exit();
    }
    $stmt = $connection->prepare("SELECT * FROM services");
    $stmt->execute();
    $result = $stmt->get_result();
  
    $i =0;
    $someArray = [];
    /**
     * add the data to variable
     */
    while ($row = $result->fetch_assoc()) {
        $someArray[$i] = $row;
        $i++;
    }
    $connection->close();

    /**
     * return the data
     */
    echo json_encode($someArray);

} catch(Exception $e){
  echo $e->getMessage();
}
