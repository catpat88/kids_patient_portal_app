// server.js (ES module version)

import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
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
    res.json(results);
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

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await pool
      .promise()
      .query("SELECT * FROM patients WHERE patient_id = ? AND password = ?", [
        username,
        password,
      ]);

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

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
