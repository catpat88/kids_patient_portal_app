<?php
// Set headers
header("Access-Control-Allow-Origin: http://localhost:5173"); // Change this
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true"); // Important for sessions

// Include database connections
require '../db_connect.php'; // Assumes db_connect.php is one level up

// Read JSON data from React
$data = json_decode(file_get_contents("php://input"));

// Validate data
if (
    !isset($data->username) || !isset($data->password) ||
    empty(trim($data->username)) || empty(trim($data->password))
) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please fill in all fields."]);
    exit;
}

$username = trim($data->username);
$password = trim($data->password);

// Find the user
try {
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$username]);

    $user = $stmt->fetch(); // Fetch the user row

    // Verify user and password
    // password_verify() securely checks the submitted password against the hash
    if ($user && password_verify($password, $user['password'])) {
        
        // Start session - this is what logs the user in
        // We already called session_start() in db_connect.php
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];

        // Send success response
        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "message" => "Login successful.",
            "user" => [
                "id" => $user['id'],
                "username" => $user['username']
            ]
        ]);

    } else {
        // Invalid credentials
        http_response_code(401); // Unauthorized
        echo json_encode(["status" => "error", "message" => "Invalid username or password."]);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error."]);
}
?>