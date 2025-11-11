<?php
// Set headers
header("Access-Control-Allow-Origin: http://localhost:5173"); // Your colleague's React URL
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET"); // This can be a GET request
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true"); // Crucial for reading the session cookie

// Include database connection
// This starts the session
require '../db_connect.php';

// Check if the user is logged in
if (isset($_SESSION['user_id']) && isset($_SESSION['username'])) {
    // User is logged in
    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "loggedIn" => true,
        "user" => [
            "id" => $_SESSION['user_id'],
            "username" => $_SESSION['username']
        ]
    ]);
} else {
    // User is NOT logged in
    http_response_code(401); // Unauthorized
    echo json_encode([
        "status" => "error",
        "loggedIn" => false,
        "message" => "No user is logged in."
    ]);
}
?>