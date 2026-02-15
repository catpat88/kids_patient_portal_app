// src/components/NavBar.jsx
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  User,
  Hospital,
  Map,
  Video,
  Gamepad2,
  Stethoscope,
  Star,
  LogOut,
} from "lucide-react";

// --- Static Data and Utility Functions (Moved outside component) ---

const TARGET_MIN = 768;
const TARGET_MAX = 819;

// Static list of links, defined once.
const links = [
  { label: "My Profile", to: "#profile", Icon: User, bgColor: "bg-hippoBlue" },
  {
    label: "My Visit",
    to: "#visit",
    Icon: Hospital,
    bgColor: "bg-sunnyYellow",
  },
  { label: "Hospital Map", to: "#map", Icon: Map, bgColor: "bg-lilac" },
  { label: "Videos", to: "#videos", Icon: Video, bgColor: "bg-peach" },
  { label: "Games", to: "#games", Icon: Gamepad2, bgColor: "bg-mintGreen" },
  {
    label: "Departments",
    to: "#departments",
    Icon: Stethoscope,
    bgColor: "bg-coralPink",
  },
  { label: "Quiz", to: "#quiz", Icon: Star, bgColor: "bg-hippoBlue" },
];

/**
 * Custom scroll function used by HashLink to jump instantly to the target element.
 * It temporarily forces scroll-behavior to 'auto' to ensure the jump is not smooth.
 */
const scrollInstantly = (el) => {
  if (!el) return;

  const html = document.documentElement;
  // Store the previous scroll-behavior style
  const prevScrollBehavior = html.style.scrollBehavior;

  // Force instant jump
  html.style.scrollBehavior = "auto";
  el.scrollIntoView({ block: "start" });

  // Restore the original style immediately
  html.style.scrollBehavior = prevScrollBehavior || "";
};

// --- NavBar Component Definition ---

export default function NavBar({ onLogout }) {
  const navigate = useNavigate();
  const [isTargetTablet, setIsTargetTablet] = useState(false);

  // Effect to check window size and update state
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTargetTablet(width >= TARGET_MIN && width <= TARGET_MAX);
    };

    // Run once on mount and every time window resizes
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function runs on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures it runs only on mount/unmount

  return (
    <header id="top" className="sticky top-0 z-20 bg-white">
      <nav className="mx-auto max-w-6xl px-4 h-34 flex items-center gap-2">
        {/* Logo and Log Out Button */}
        <div className="flex flex-col justify-center">
          <img
            src="/images/healthy-hippo-logo.png"
            alt="Healthy Hippo Hub logo"
            className="h-20 lg:h-24 object-contain"
          />
          <button
            onClick={() => {
              onLogout();
              navigate("/");
            }}
            className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-card text-ink font-semibold px-3 h-6 lg:h-8 hover:-translate-y-0.5 transition"
          >
            <LogOut className="w-3 h-3" />
            <span className="text-sm">Log out</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="ml-auto hidden md:flex gap-2 lg:gap-6 tablet-link-container">
          {links.map(({ label, to, Icon, bgColor }) => {
            let displayLabel = label;

            // Conditional label shortening for the specific tablet size range
            if (isTargetTablet && label === "Hospital Map")
              displayLabel = "Map";

            return (
              <Link
                key={label}
                to={to}
                // Apply the custom instant scroll function
                scroll={scrollInstantly}
                className={`group shrink-0 flex flex-col items-center justify-center gap-1 w-21 h-21 lg:w-25 lg:h-25 tablet-link
                  rounded-full ${bgColor} shadow-soft hover:-translate-y-0.5 transition focus:ring-2 focus:ring-ink/20 text-ink`}
                title={label}
              >
                <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="text-sm font-semibold tablet-nav-text">
                  {displayLabel}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
      {/* Separator Line */}
      <div className="h-px w-full bg-gray-300" />
    </header>
  );
}
