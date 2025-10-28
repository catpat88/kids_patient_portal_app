import NavBar from "./sections/NavBar";
import ProfileHero from "./sections/ProfileHero";
import MyVisit from "./sections/MyVisit";
import HospitalMap from "./sections/HospitalMap";
import Videos from "./sections/Videos";
import Games from "./sections/Games";
import Departments from "./sections/Departments";
import Quiz from "./sections/Quiz";
import Footer from "./sections/Footer";

export default function App() {
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
        className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white shadow-soft"
        aria-label="Back to top"
      >
        ↑
      </a>
    </>
  );
}
