import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { User, Hospital, Map, Video, Gamepad2, Stethoscope, Star } from "lucide-react";

const links = [
  { label: "My Profile",    href: "#profile",     Icon: User,     bgColor: "bg-hippoBlue"   },
  { label: "My Visit",      href: "#visit",       Icon: Hospital, bgColor: "bg-sunnyYellow" },
  { label: "Hospital Map",  href: "#map",         Icon: Map,      bgColor: "bg-lilac"       },
  { label: "Videos",        href: "#videos",      Icon: Video,    bgColor: "bg-peach"       },
  { label: "Games",         href: "#games",       Icon: Gamepad2, bgColor: "bg-mintGreen"   },
  { label: "Departments",   href: "#departments", Icon: Stethoscope, bgColor: "bg-coralPink"   },
  { label: "Quiz",          href: "#quiz",        Icon: Star,     bgColor: "bg-hippoBlue"   },
];

export default function NavBar() {


  return (
    <header id="top" className="sticky top-0 z-20 bg-white">
      <nav className="mx-auto max-w-6xl px-4 h-34 flex items-center gap-2">
        <div className="flex flex-col justify-center">
          <img src="/images/healthy-hippo-logo.png" alt="Healthy Hippo Hub logo" className="h-24 object-contain" />
          <Link
            to="/login"
            className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-card text-ink font-semibold px-3 h-8 hover:-translate-y-0.5 transition"
          >
            <span className="text-sm">Back to log in</span>
          </Link>
        </div>

        <div className="ml-auto hidden md:flex gap-6">
          {links.map(({ label, href, Icon, bgColor }) => (
            <a
              key={label}
              href={href}
              className={`group shrink-0 flex flex-col items-center justify-center gap-1 w-25 h-25 rounded-full ${bgColor} shadow-soft hover:-translate-y-0.5 transition focus:outline-none focus:ring-2 focus:ring-ink/20 text-ink`}
              title={label}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-semibold">{label}</span>
            </a>
          ))}
        </div>

        <div className="md:hidden overflow-x-auto no-scrollbar ml-auto flex gap-3">
          {links.map(({ label, href, Icon, bgColor }) => (
            <a
              key={label}
              href={href}
              className={`min-w-[5.5rem] h-20 flex flex-col items-center justify-center rounded-full ${bgColor} shadow-soft px-3 gap-1 focus:outline-none focus:ring-2 focus:ring-ink/20 text-ink`}
              title={label}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-semibold">{label}</span>
            </a>
          ))}
          <Link to="/login" className="min-w-[5.5rem] h-20 flex flex-col items-center justify-center rounded-full bg-card shadow-soft px-3 gap-1 text-ink font-semibold">
            <span className="text-xs">Log in</span>
          </Link>
        </div>
      </nav>
      <div className="h-px w-full bg-gray-300" />
    </header>
  );
}
