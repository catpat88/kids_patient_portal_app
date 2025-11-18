
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import NavBar from "./components/NavBar";
import ProfileHero from "./components/ProfileHero";
import MyVisit from "./components/MyVisit";
import HospitalMap from "./components/HospitalMap";
import Videos from "./components/Videos";
import Games from "./components/Games";
import Departments from "./components/Departments";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";


function Home() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-6xl px-4">
        <ProfileHero />
        <MyVisit />
        <HospitalMap />
        <Videos />
        <Games />
        <Departments />
        <Quiz />
      </main>

      <Footer />

      {/* Back-to-top bubble */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-hippoBlue text-ink shadow-soft text-2xl"
        aria-label="Back to top"
      >
        ↑
      </a>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
