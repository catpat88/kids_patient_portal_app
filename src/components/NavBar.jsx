import { Link } from "react-router-dom";

const links = [
  { label: "My Profile", href: "#profile", emoji: "👤", bgColor: "bg-blue-100" },
  { label: "My Visit", href: "#visit", emoji: "🏥", bgColor: "bg-yellow-100" },
  { label: "Hospital Map", href: "#map", emoji: "🗺️", bgColor: "bg-purple-100" },
  { label: "Videos", href: "#videos", emoji: "🎬", bgColor: "bg-red-100" },
  { label: "Games", href: "#games", emoji: "🎮", bgColor: "bg-green-100" },
  { label: "Departments", href: "#departments", emoji: "🏷️", bgColor: "bg-pink-100" },
  { label: "Quiz", href: "#quiz", emoji: "⭐", bgColor: "bg-blue-100" },
];

export default function NavBar() {
  return (
    <header id="top" className="sticky top-0 z-20 bg-white/85 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 h-20 flex items-center gap-3">
        {/* Left: stacked login button + logo */}
        <div className="flex flex-col justify-center">
          <img
            src="/images/healthy-hippo-logo.png"
            alt="Healthy Hippo Hub logo"
            className="max-h-18 object-contain"
          />
        </div>

        {/* Right: desktop nav pills */}
        <div className="ml-auto hidden md:flex gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`group flex items-center gap-2 rounded-full ${l.bgColor} shadow-soft px-4 h-10 border hover:-translate-y-0.5 transition`}
            >
              <span className="text-xl">{l.emoji}</span>
              <span className="text-sm">{l.label}</span>
            </a>
          ))}

          {/* Login pill on the right as well (optional) */}
          <Link
            to="./login"
            className="group flex items-center gap-2 rounded-full bg-hippoBlue text-ink font-semibold shadow-soft px-4 h-10 hover:-translate-y-0.5 transition"
          >
            <span className="text-sm">Log in</span>
          </Link>
        </div>

        {/* Mobile scroll row */}
        <div className="md:hidden overflow-x-auto no-scrollbar ml-auto flex gap-2">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="min-w-fit rounded-full bg-white border px-3 h-9 flex items-center gap-2">
              <span>{l.emoji}</span><span className="text-sm">{l.label}</span>
            </a>
          ))}
          <Link to="/login" className="min-w-fit rounded-full bg-hippoBlue text-ink px-3 h-9 flex items-center gap-2">
            <span className="text-sm">Log in</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
