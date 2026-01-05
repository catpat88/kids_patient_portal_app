<?php
// Start a session
// This is needed to keep the user logged in across pages.
session_start();

// Database connection settings
$host = '127.0.0.1';     // or 'localhost'
$db_name = 'hospital_portal';     // Your database name
$username = 'ainsley'; // 'portal_user';      // Your MySQL username
$password = '6dKKfZxMfgmNK83Q'; // 'test_password_123';          // Your MySQL password
$charset = 'utf8mb4';

// Data Source Name (DSN)
$dsn = "mysql:host=$host;dbname=$db_name;charset=$charset";

// Set options for how PDO behaves
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
     // Create the PDO connection object
     $pdo = new PDO($dsn, $username, $password, $options);
} catch (\PDOException $e) {
     // Handle connection error
     throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>