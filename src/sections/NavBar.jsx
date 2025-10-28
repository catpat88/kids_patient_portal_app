const links = [
  { label: "My Profile", href: "#profile", emoji: "👤" },
  { label: "My Visit", href: "#visit", emoji: "🏥" },
  { label: "Videos", href: "#videos", emoji: "🎬" },
  { label: "Games", href: "#games", emoji: "🎮" },
  { label: "Departments", href: "#departments", emoji: "🏷️" },
  { label: "Quiz", href: "#quiz", emoji: "⭐" },
];

export default function NavBar() {
  return (
    <header id="top" className="sticky top-0 z-20 bg-white/85 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center gap-3">
        <div className="font-semibold">Healthy Hippo Hub</div>
        <div className="ml-auto hidden md:flex gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group flex items-center gap-2 rounded-full bg-white shadow-soft px-4 h-10 border hover:-translate-y-0.5 transition"
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
