// db-test.js (ES module version)
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASS || "",
      database: process.env.DB_NAME || "patient_portal",
    });

    console.log("✅ Connected to MySQL!");

    const [rows] = await connection.query("SELECT * FROM patients");
    console.log("Patients table:", rows);

    await connection.end();
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  }
}

testConnection();
