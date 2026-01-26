import { Map } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function HospitalMap() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current URL is the public one (without the Nav)
  const isPublic = location.pathname === "/public-map";

  return (
    <section id="map" className={`scroll-mt-27 py-10 ${isPublic ? "px-6" : ""}`}>
      {/* 1. The "Back to Welcome" button - only shows on the public route */}
      {isPublic && (
        <button
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2 rounded-full bg-hippoBlue text-ink font-semibold px-6 py-3 shadow-soft hover:brightness-[.97] active:translate-y-[1px] transition"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Welcome
        </button>
      )}

      {/* 2. Your Original Map UI */}
      <div className="rounded-3xl bg-card p-6 md:p-8">
        <div className="flex flex-row gap-2 py-3">
          <Map className="w-6 h-6 text-ink" />
          <h2 className="text-lg font-semibold text-ink">My Hospital Map</h2>
        </div>
        
        <div className="rounded-2xl min-h-72 bg-card grid place-items-center">
          {/* Map / Image */}
          <img 
            src="./images/map.png" 
            alt="Hospital map" 
            className="max-h-120 w-full object-contain rounded-xl" 
          />
        </div>
      </div>
    </section>
  );
}