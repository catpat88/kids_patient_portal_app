import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MainLayout from "./components/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";

import ProfileHero from "./components/ProfileHero";
import MyVisit from "./components/MyVisit";
import HospitalMap from "./components/HospitalMap";
import Videos from "./components/Videos";
import Games from "./components/Games";
import Departments from "./components/Departments";
import Quiz from "./components/Quiz";

function Portal({ patient, patientInfo }) {
  return (
    // Passing required patient data into components
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
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [patient, setPatient] = useState(null);
  const [patientInfo, setPatientInfo] = useState(null);

  // Load patient info from localStorage on refresh, this was passed in from login component. This keeps the user logged in even if they refresh the page, until they click logout which clears localStorage
  useEffect(() => {
    const stored = localStorage.getItem("patient");
    if (stored) {
      const parsed = JSON.parse(stored);
      setPatient(parsed);
      setIsloggedIn(true);
    }
  }, []);

  // Fetch patient_info when patient is available.
  useEffect(() => {
    if (!patient) return;

    fetch(`http://localhost:4000/api/patient-info/${patient.patient_id}`)
      .then((res) => res.json())
      .then((data) => setPatientInfo(data))
      .catch((err) => console.error("Failed to fetch patient info:", err));
  }, [patient]);

  // Clear patient data and login state on logout
  const handleLogout = () => {
    localStorage.removeItem("patient");
    setPatient(null);
    setPatientInfo(null);
    setIsloggedIn(false);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/public-map" element={<HospitalMap />} />

      <Route element={<MainLayout onLogout={handleLogout} />}>
        <Route
          path="/portal"
          element={<Portal patient={patient} patientInfo={patientInfo} />}
        />
      </Route>

      <Route
        path="/login"
        element={
          <Login setIsloggedIn={setIsloggedIn} setPatient={setPatient} />
        }
      />
    </Routes>
  );
}
