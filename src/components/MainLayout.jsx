// src/components/MainLayout.jsx (Simplified 'Back to Top' logic)
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

// Simple function to scroll the window to the top
function simpleJumpToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    // The 'smooth' behavior is typically what users expect
    behavior: "smooth" 
  });
}

export default function MainLayout() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-6xl px-4">
        <Outlet />
      </main>

      <Footer />

      {/* Back-to-top button: now uses the simple function */}
      <button
        type="button"
        onClick={simpleJumpToTop}
        className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-hippoBlue text-ink shadow-soft text-2xl"
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}