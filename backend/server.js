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

// Login using patient_id and password
app.post("/api/login", async (req, res) => {
  // Renamed for clarity: the frontend must send { patient_id, password }
  const { patient_id, password } = req.body;

  try {
    // Query the patients table using patient_id instead of username
    const [rows] = await pool
      .promise()
      .query("SELECT * FROM patients WHERE patient_id = ? AND password = ?", [
        patient_id,
        password,
      ]);

    if (rows.length > 0) {
      res.json({
        status: "success",
        message: "Login successful",
        user: rows[0], // Contains patient_id, first_name, dob, etc.
      });
    } else {
      res.status(401).json({ status: "error", message: "Invalid credentials" });
    }

    console.log("LOGIN REQUEST BODY:", req.body);
  } catch (err) {
    res.status(500).json({ status: "error", message: "Database error" });
  }
});

// Fetch patient_info by patient_id
app.get("/api/patient-info/:id", async (req, res) => {
  const patientId = req.params.id;

  try {
    const [rows] = await pool
      .promise()
      .query("SELECT * FROM patient_info WHERE patient_id_fk = ?", [patientId]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No patient info found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
