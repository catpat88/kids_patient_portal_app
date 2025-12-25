import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { User, Hospital, Map, Video, Gamepad2, Stethoscope, Star } from "lucide-react";

// Define the boundaries for smaller tablet (fixing layout issues)
const TARGET_MIN = 768; 
const TARGET_MAX = 819;

export default function NavBar() {
  // 1. STATE & EFFECT
  const [isTargetTablet, setIsTargetTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Check if the current width falls exactly within the 768px - 819px range
      setIsTargetTablet(width >= TARGET_MIN && width <= TARGET_MAX);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 2. DATA (Links array should also be here, or defined outside the component 
  // if it never changes, but keeping it here for now is fine).
  const links = [
    { label: "My Profile", href: "#profile", Icon: User, bgColor: "bg-hippoBlue"},
    { label: "My Visit", href: "#visit", Icon: Hospital, bgColor: "bg-sunnyYellow"},
    { label: "Hospital Map", href: "#map", Icon: Map, bgColor: "bg-lilac" },
    { label: "Videos", href: "#videos", Icon: Video, bgColor: "bg-peach"},
    { label: "Games", href: "#games", Icon: Gamepad2, bgColor: "bg-mintGreen"},
    { label: "Departments", href: "#departments", Icon: Stethoscope, bgColor: "bg-coralPink"},
    { label: "Quiz", href: "#quiz", Icon: Star, bgColor: "bg-hippoBlue"},
  ];

  return (
    <header id="top" className="sticky xl:static top-0 z-20 bg-white">
      <nav className="mx-auto max-w-6xl px-4 h-34 flex items-center gap-2">
        <div className="flex flex-col justify-center">
          <img src="/images/healthy-hippo-logo.png" alt="Healthy Hippo Hub logo" className="h-20 lg:h-24 object-contain" />
          <Link
            to="/login"
            className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-card text-ink font-semibold px-3 h-6 lg:h-8 hover:-translate-y-0.5 transition"
          >
            <span className="text-sm">Back to log in</span>
          </Link>
        </div>

        <div className="ml-auto hidden md:flex gap-2 lg:gap-6 tablet-link-container">
          {links.map(({ label, href, Icon, bgColor }) => {
            
            // 3. CONDITIONAL LABEL LOGIC: Calculate the label to display
            let displayLabel = label;
            if (isTargetTablet && label === "Hospital Map") {
              displayLabel = "Map"; // Change only this link for the target screen size
            }
            
            return (
              <a
                key={label}
                href={href}
                className={`group shrink-0 flex flex-col items-center justify-center gap-1 w-21 h-21 lg:w-25 lg:h-25 tablet-link
                rounded-full ${bgColor} shadow-soft hover:-translate-y-0.5 transition focus:outline-none focus:ring-2 focus:ring-ink/20 text-ink`}
                title={label}
              >
                <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="text-sm font-semibold tablet-nav-text">{displayLabel}</span>
                {/* 4. USE THE CALCULATED LABEL IN THE SPAN */}
              </a>
            );
          })}
        </div>


      </nav>
      <div className="h-px w-full bg-gray-300" />
    </header>
  );
}