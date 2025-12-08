// src/components/NavBar.jsx
import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect } from "react";
import { User, Hospital, Map, Video, Gamepad2, Stethoscope, Star } from "lucide-react";

const TARGET_MIN = 768; 
const TARGET_MAX = 819;

// Custom scroll function to jump instantly
const scrollInstantly = (el) => {
  if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
};

export default function NavBar() {
  const [isTargetTablet, setIsTargetTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTargetTablet(width >= TARGET_MIN && width <= TARGET_MAX);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { label: "My Profile", to: "/#profile", Icon: User, bgColor: "bg-hippoBlue" },
    { label: "My Visit", to: "/#visit", Icon: Hospital, bgColor: "bg-sunnyYellow" },
    { label: "Hospital Map", to: "/#map", Icon: Map, bgColor: "bg-lilac" },
    { label: "Videos", to: "/#videos", Icon: Video, bgColor: "bg-peach" },
    { label: "Games", to: "/#games", Icon: Gamepad2, bgColor: "bg-mintGreen" },
    { label: "Departments", to: "/#departments", Icon: Stethoscope, bgColor: "bg-coralPink" },
    { label: "Quiz", to: "/#quiz", Icon: Star, bgColor: "bg-hippoBlue" },
  ];

  const scrollInstantly = (el) => {
  if (!el) return;
  // temporarily override smooth scroll
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto"; // force instant jump
  el.scrollIntoView({ block: "start" });
  html.style.scrollBehavior = prev; // reset back to original
};


  return (
    <header id="top" className="sticky top-0 z-20 bg-white">
      <nav className="mx-auto max-w-6xl px-4 h-34 flex items-center gap-2">
        <div className="flex flex-col justify-center">
          <img 
            src="/images/healthy-hippo-logo.png" 
            alt="Healthy Hippo Hub logo" 
            className="h-20 lg:h-24 object-contain" 
          />
          <Link
            to="/login"
            className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-card text-ink font-semibold px-3 h-6 lg:h-8 hover:-translate-y-0.5 transition"
          >
            <span className="text-sm">Back to log in</span>
          </Link>
        </div>

        <div className="ml-auto hidden md:flex gap-2 lg:gap-6 tablet-link-container">
          {links.map(({ label, to, Icon, bgColor }) => {
            let displayLabel = label;
            if (isTargetTablet && label === "Hospital Map") displayLabel = "Map";

            return (
              <Link
                key={label}
                to={to}
                scroll={scrollInstantly} // ensures instant jump
                className={`group shrink-0 flex flex-col items-center justify-center gap-1 w-21 h-21 lg:w-25 lg:h-25 tablet-link
                  rounded-full ${bgColor} shadow-soft hover:-translate-y-0.5 transition focus:outline-none focus:ring-2 focus:ring-ink/20 text-ink`}
                title={label}
              >
                <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="text-sm font-semibold tablet-nav-text">{displayLabel}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="h-px w-full bg-gray-300" />
    </header>
  );
}
