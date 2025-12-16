// App.jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./components/MainLayout.jsx";
import Login from "./pages/Login.jsx";

import ProfileHero from "./components/ProfileHero";
import MyVisit from "./components/MyVisit";
import HospitalMap from "./components/HospitalMap";
import Videos from "./components/Videos";
import Games from "./components/Games";
import Departments from "./components/Departments";
import Quiz from "./components/Quiz";

function Home() {
  return (
    <>
      <ProfileHero />
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
  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <Routes>
      {/* Everything inside MainLayout has NavBar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Login page WITHOUT navbar/footer */}
      <Route path="/login" element={<Login setIsloggedIn={setIsloggedIn} />} />
    </Routes>
  );
}
