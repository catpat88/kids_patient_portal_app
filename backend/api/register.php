<?php
// Allow requests from your React app's domain (or * for all)
header("Access-Control-Allow-Origin: *"); 

// Set the content type to JSON
header("Content-Type: application/json; charset=UTF-8");

// Allow the POST method
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// (Assumes db_connect.php is one level up)
require '../db_connect.php';

// Read JSON data from React
// Get the posted data (React sends JSON, not form-data)
$data = json_decode(file_get_contents("php://input"));

// Validate
if (
    !isset($data->username) ||
    !isset($data->password) ||
    empty(trim($data->username)) ||
    empty(trim($data->password))
) {
    // Send error response
    http_response_code(400); // Bad Request
    echo json_encode(["status" => "error", "message" => "Incomplete data."]);
    exit;
}

// Hash password
$username = trim($data->username);
$password_hash = password_hash(trim($data->password), PASSWORD_DEFAULT);

// Prepare and execute SQL
$sql = "INSERT INTO users (username, password) VALUES (?, ?)";

try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$username, $password_hash]);

    // Send success response
    http_response_code(201); // Created
    echo json_encode(["status" => "success", "message" => "User created."]);

} catch (PDOException $e) {
    // Handle errors (like duplicate username)
    if ($e->errorInfo[1] == 1062) {
        http_response_code(409); // Conflict
        echo json_encode(["status" => "error", "message" => "Username already taken."]);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }
}
?>