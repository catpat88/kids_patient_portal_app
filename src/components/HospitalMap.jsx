import { Map } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HospitalMap() {
  const location = useLocation();
  const [activeRoom, setActiveRoom] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // SET TO TRUE to find your invisible boxes on your phone screen!
  const showHitboxes = false; 

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const isPublic = location.pathname === "/public-map";

  const rooms = [
    { 
      name: "Play Room", 
      d: { top: "28%", left: "32%", w: "21%", h: "22%", dir: "down" },
      m: { top: "15%", left: "50%", w: "80%", h: "12%", dir: "down" }, 
      tooltip: "🎮 Games & toys for kids 3–12. Open 9am–5pm." 
    },
    { 
      name: "X-Ray Room", 
      d: { top: "28%", left: "54%", w: "21%", h: "22%", dir: "down" },
      m: { top: "30%", left: "50%", w: "80%", h: "12%", dir: "down" },
      tooltip: "🩻 Quick X-rays. Wear protective aprons." 
    },
    { 
      name: "Canteen", 
      d: { top: "28%", left: "80%", w: "30%", h: "22%", dir: "down" },
      m: { top: "45%", left: "50%", w: "80%", h: "12%", dir: "down" },
      tooltip: "🍽️ Healthy meals & snacks. Open 8am–6pm." 
    },
    { 
      name: "Children's Ward", 
      d: { top: "74%", left: "36%", w: "29%", h: "22%", dir: "up" },
      m: { top: "60%", left: "50%", w: "80%", h: "12%", dir: "up" },
      tooltip: "🩺 Patient rooms. Visiting: 10am–8pm." 
    },
    { 
      name: "MRI Room", 
      d: { top: "74%", left: "62%", w: "21%", h: "22%", dir: "up" },
      m: { top: "75%", left: "50%", w: "80%", h: "12%", dir: "up" },
      tooltip: "📷 MRI scans (~30 min). Keep metal away." 
    },
    { 
      name: "Hospital Reception", 
      d: { top: "67%", left: "84%", w: "23%", h: "38%", dir: "up" },
      m: { top: "90%", left: "50%", w: "80%", h: "12%", dir: "up" },
      tooltip: "ℹ️ Info & check-in desk. Open 24/7." 
    },
  ];

  return (
    <section id="map" className={`scroll-mt-27 py-10 ${isPublic ? "px-6" : ""}`}>
      <div className="rounded-3xl bg-card p-4 md:p-8">
        <div className="flex flex-row gap-2 py-3">
          <Map className="w-6 h-6 text-ink" />
          <h2 className="text-lg font-semibold text-ink">My Hospital Map</h2>
        </div>

        {/* relative position is MANDATORY for absolute children to work */}
        <div className="relative rounded-2xl bg-card overflow-visible min-h-[300px]">
          <picture>
            <source media="(max-width: 767px)" srcSet="./images/mapMobile.png" />
            <img
              src="./images/map.png"
              alt="Hospital map"
              className="w-full h-auto block rounded-xl relative z-0"
            />
          </picture>

          {rooms.map((room) => {
            const pos = isMobile ? room.m : room.d;

            return (
              <div
                key={room.name}
                className="absolute flex items-center justify-center z-20"
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: pos.w,
                  height: pos.h,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button
                  // On mobile, tap toggles. On desktop, hover works.
                  onMouseEnter={() => !isMobile && setActiveRoom(room.name)}
                  onMouseLeave={() => !isMobile && setActiveRoom(null)}
                  onClick={() => setActiveRoom(activeRoom === room.name ? null : room.name)}
                  className={`w-full h-full cursor-pointer outline-none rounded-lg transition-all
                    ${showHitboxes ? "bg-red-500/40 border-2 border-red-600 shadow-lg" : "bg-transparent"}`}
                >
                  {activeRoom === room.name && (
                    <div className={`absolute left-1/2 -translate-x-1/2 bg-white text-ink text-xs md:text-sm px-4 py-3 rounded-2xl shadow-2xl z-50 min-w-[200px] border-2 border-brightyellow animate-in fade-in zoom-in duration-200
                      ${pos.dir === "up" ? "bottom-[125%]" : "top-[125%]"} 
                    `}>
                      <div className="flex justify-between items-start mb-1">
                         <p className="font-bold">{room.name}</p>
                         {/* Close button for mobile users */}
                         {isMobile && <span className="text-[10px] bg-gray-100 px-1 rounded">tap to close</span>}
                      </div>
                      <p className="whitespace-normal leading-relaxed">{room.tooltip}</p>
                      {/*  */}
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