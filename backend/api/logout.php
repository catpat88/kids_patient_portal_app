<?php
// Set headers
header("Access-Control-Allow-Origin: http://localhost:5173"); // Your colleague's React URL
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST"); // Can be POST or GET
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true"); // Crucial for sessions

// Include database connection
// This is vital because it's what calls session_start()
require '../db_connect.php';

// Unset all session variables
$_SESSION = array();

// Destroy the session
// This will clear the session data from the server
session_destroy();

// Send a success response
http_response_code(200);
echo json_encode([
    "status" => "success",
    "message" => "Logged out successfully."
]);

?>