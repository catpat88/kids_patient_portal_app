const links = [
  { label: "My Profile", href: "#profile", emoji: "👤", bgColor: "bg-blue-100" },
  { label: "My Visit", href: "#visit", emoji: "🏥", bgColor: "bg-yellow-100"  }, 
  { label: "Hospital Map", href: "#map", emoji: "🗺️", bgColor: "bg-purple-100"  },
  { label: "Videos", href: "#videos", emoji: "🎬", bgColor: "bg-red-100" },
  { label: "Games", href: "#games", emoji: "🎮", bgColor: "bg-green-100"  },
  { label: "Departments", href: "#departments", emoji: "🏷️", bgColor: "bg-pink-100"  },
  { label: "Quiz", href: "#quiz", emoji: "⭐", bgColor: "bg-blue-100"  },
];

export default function NavBar() {
  return (
    <header id="top" className="sticky top-0 z-20 bg-white/85 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 h-20 flex items-center gap-3">
        <div className>
          <img src="./images/healthy-hippo-logo.png" alt="healthy hippo hub logo" className="max-h-20 object-contain" />
        </div>
        <div className="ml-auto hidden md:flex gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              // ensures the navbar links are following the set colours
              className={`group flex items-center gap-2 rounded-full ${l.bgColor} shadow-soft px-4 h-10 border hover:-translate-y-0.5 transition`}
            >
              <span className="text-xl">{l.emoji}</span>
              <span className="text-sm">{l.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile scrollable pill row */}
        <div className="md:hidden overflow-x-auto no-scrollbar ml-auto flex gap-2">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="min-w-fit rounded-full bg-white border px-3 h-9 flex items-center gap-2">
              <span>{l.emoji}</span><span className="text-sm">{l.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
