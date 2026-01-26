<<<<<<< HEAD
// App.jsx
import { Routes, Route, useNavigate } from "react-router-dom";
=======
import { Routes, Route, Navigate } from "react-router-dom";
>>>>>>> e6b517036fd633063553430afbfc01785deb1060
import { useState, useEffect } from "react";

import MainLayout from "./components/MainLayout.jsx"; //Main base for console components to land
import HomePage from "./pages/HomePage.jsx"; // welcome page
import Login from "./pages/Login.jsx"; //login page

//console components
import ProfileHero from "./components/ProfileHero";
import MyVisit from "./components/MyVisit";
import HospitalMap from "./components/HospitalMap";
import Videos from "./components/Videos";
import Games from "./components/Games";
import Departments from "./components/Departments";
import Quiz from "./components/Quiz";

<<<<<<< HEAD
function Home({ patient, patientInfo }) {
=======

// ... (your imports are all correct)

// Define the "Console" view here
function Home() {
>>>>>>> e6b517036fd633063553430afbfc01785deb1060
  return (
    <>
      <ProfileHero patient={patient} patientInfo={patientInfo} />
      <MyVisit />
      <HospitalMap />
      <Videos />
      <Games patient={patient} />
      <Departments />
      <Quiz />
    </>
  );
}

export default function App() {
<<<<<<< HEAD
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [patient, setPatient] = useState(null);
  const [patientInfo, setPatientInfo] = useState(null);

  // Load patient from localStorage on refresh
  useEffect(() => {
    const stored = localStorage.getItem("patient");
    if (stored) {
      const parsed = JSON.parse(stored);
      setPatient(parsed);
      setIsloggedIn(true);
    }
  }, []);

  // Fetch patient_info when patient is available
  useEffect(() => {
    if (!patient) return;

    fetch(`http://localhost:4000/api/patient-info/${patient.patient_id}`)
      .then((res) => res.json())
      .then((data) => setPatientInfo(data))
      .catch((err) => console.error("Failed to fetch patient info:", err));
  }, [patient]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<Home patient={patient} patientInfo={patientInfo} />}
        />
      </Route>

      <Route
        path="/login"
        element={
          <Login setIsloggedIn={setIsloggedIn} setPatient={setPatient} />
        }
      />
=======
  const [isLoggedIn, setIsloggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Routes>
      {/* 1. PUBLIC ROUTES (No Nav/Footer) */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login setIsloggedIn={setIsloggedIn} />} />
      
      {/* The Public "Full Screen" Map */}
      <Route path="/public-map" element={<HospitalMap />} />

      {/* 2. PROTECTED ROUTES (With Nav/Footer) */}
      <Route element={<MainLayout />}>
        <Route 
          path="/portal" 
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />} 
        />
        {/* This version of the map WILL have the NavBar/Footer */}
        <Route path="/map" element={<HospitalMap />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
>>>>>>> e6b517036fd633063553430afbfc01785deb1060
    </Routes>
  );
}