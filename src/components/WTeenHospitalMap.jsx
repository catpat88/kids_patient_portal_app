import { Map } from "lucide-react";

export default function HospitalMap() {
  return (
    <section id="map" className="scroll-mt-27 py-10 ">
      {/* Header with icon */}
      <div className="rounded-3xl bg-card p-6 md:p-8">
        <div className="flex flex-row gap-2 py-3">
        <Map className="w-6 h-6 text-ink"/>
        <h2 className="text-lg font-semibold text-ink">My Hospital Map</h2>
        </div>
        <div className="">
          <div className="rounded-2xl min-h-72 bg-card grid place-items-center">
            {/*map / image */}
            <img src="./images/map.png" alt="Hospital map" className="max-h-72 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
