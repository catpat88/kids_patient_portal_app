// App.jsx
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MainLayout from "./components/MainLayout.jsx";
import Login from "./pages/Login.jsx";

import ProfileHero from "./components/ProfileHero";
import MyVisit from "./components/MyVisit";
import HospitalMap from "./components/HospitalMap";
import Videos from "./components/Videos";
import Games from "./components/Games";
import Departments from "./components/Departments";
import Quiz from "./components/Quiz";

function Home({ patient, patientInfo }) {
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
    </Routes>
  );
}
