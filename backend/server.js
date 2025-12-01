// server.js

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config(); // loads variables from .env
const app = express();
app.use(cors()); // Allow browser apps from other ports to use our API
app.use(express.json()); // For reading JSON in POST requests

// Create a connection pool (safe and fast)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // ✅ add this line
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/", (req, res) => {
  pool.query("SELECT * FROM patients", (err, results) => {
    if (err) {
      console.error("Database error:", err);

      return res.status(500).json({ error: "Database error" });
    }

    res.json(results); // send the list of patients as JSON
  });
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("Connected to MySQL!");
    connection.release();
  }
});

// LOGIN route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM patients WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length > 0) {
      res.json({
        status: "success",
        message: "Login successful",
        user: rows[0],
      });
    } else {
      res.status(401).json({ status: "error", message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ status: "error", message: "Database error" });
  }
});

// Start the server

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
