import { Map } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HospitalMap() {
  const location = useLocation();
  const [activeRoom, setActiveRoom] = useState(null);
  const [device, setDevice] = useState("desktop"); // mobile, tablet, desktop

  // Handle Responsive Breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setDevice("mobile");
      else if (width >= 768 && width <= 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isPublic = location.pathname === "/public-map";

  const rooms = [
    { 
      name: "Children's Ward", 
      d: { top: "74%", left: "36%", w: "29%", h: "22%", dir: "up" },
      m: { top: "48%", left: "34%", w: "46%", h: "35%", dir: "down" }, 
      tooltip: "🩺 Patient rooms. Visiting: 10am–8pm." 
    },
    { 
      name: "Playroom", 
      d: { top: "28%", left: "32%", w: "21%", h: "22%", dir: "down" },
      m: { top: "79%", left: "34%", w: "46%", h: "26%", dir: "up" },
      tooltip: "🎮 Games & toys for kids 3–12. Open 9am–5pm." 
    },
    { 
      name: "MRI Room", 
      d: { top: "74%", left: "62%", w: "21%", h: "22%", dir: "up" },
      m: { top: "43%", left: "75%", w: "25%", h: "25%", dir: "down" },
      tooltip: "📷 MRI scans (~30 min). Keep metal away." 
    },
    { 
      name: "X-ray Room", 
      d: { top: "28%", left: "54%", w: "21%", h: "22%", dir: "down" },
      m: { top: "70%", left: "75%", w: "25%", h: "30%", dir: "up" },
      tooltip: "🩻 Quick X-rays. Wear protective aprons." 
    },
    { 
      name: "Reception", 
      d: { top: "67%", left: "84%", w: "23%", h: "38%", dir: "up" },
      m: { top: "88%", left: "66%", w: "43%", h: "8%", dir: "up" },
      tooltip: "ℹ️ Info & check-in desk. Open 24/7." 
    },
    { 
      // Canteen only exists on Desktop/Tablet coordinates
      name: "Canteen", 
      d: { top: "28%", left: "80%", w: "30%", h: "22%", dir: "down" },
      m: null, // Removed from mobile as requested
      tooltip: "🍽️ Healthy meals & snacks. Open 8am–6pm." 
    },
  ];

  return (
    <section id="map" className={`scroll-mt-27 py-10 ${isPublic ? "px-6" : ""}`}>
      <div className="rounded-3xl bg-card p-4 md:p-8">
        <div className="flex flex-row gap-2 py-3">
          <Map className="w-6 h-6 text-ink" />
          <h2 className="text-lg font-semibold text-ink">My Hospital Map</h2>
        </div>

        <div className="relative rounded-2xl bg-card overflow-visible">
          <picture>
            <source media="(max-width: 767px)" srcSet="./images/mapMobile.png" />
            <img src="./images/map.png" alt="Hospital map" className="w-full h-auto block rounded-xl" />
          </picture>

          {rooms.map((room) => {
            // Logic to handle removed Canteen on mobile
            const pos = device === "mobile" ? room.m : room.d;
            if (!pos) return null;

            return (
              <div
                key={room.name}
                className="absolute flex items-center justify-center z-20"
                style={{
                  top: pos.top, left: pos.left, width: pos.w, height: pos.h,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button
                  onMouseEnter={() => device === "desktop" && setActiveRoom(room.name)}
                  onMouseLeave={() => device === "desktop" && setActiveRoom(null)}
                  onClick={() => setActiveRoom(activeRoom === room.name ? null : room.name)}
                  className="w-full h-full cursor-pointer outline-none bg-transparent"
                >
                  {activeRoom === room.name && (
                    <div className={`absolute left-1/2 -translate-x-1/2 bg-white text-ink text-xs md:text-sm px-4 py-3 rounded-2xl shadow-2xl z-50 min-w-[180px] border-2 border-brightyellow
                      ${pos.dir === "up" ? "bottom-[120%]" : "top-[120%]"} 
                    `}>
                      <p className="font-bold mb-1">{room.name}</p>
                      <p className="whitespace-normal leading-relaxed">{room.tooltip}</p>
                      <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-brightyellow rotate-45
                        ${pos.dir === "up" ? "-bottom-2 border-b-2 border-r-2" : "-top-2 border-t-2 border-l-2"}
                      `}></div>
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}