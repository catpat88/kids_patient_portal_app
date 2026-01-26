import { Routes, Route, Navigate } from "react-router-dom";
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


// ... (your imports are all correct)

// Define the "Console" view here
function Home() {
  return (
    <>
      <ProfileHero patient={patient} patientInfo={patientInfo} />
      <MyVisit />
      <HospitalMap />
      <Videos />
      <Games />
      <Departments />
      <Quiz />
    </>
  );
}

export default function App() {
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
    </Routes>
  );
}