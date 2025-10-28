export default function HospitalMap() {
  return (
    <section id="map" className="scroll-mt-24 py-10">
      <div className="rounded-3xl bg-gray-50 p-6 md:p-8 border">
        <h2 className="text-center text-sm tracking-widest text-ink/70">My Hospital Map</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr,2fr]">
          <div className="space-y-3">
            <button className="w-full h-10 rounded-xl border bg-white">Children’s Ward</button>
            <button className="w-full h-10 rounded-xl border bg-white">MRI</button>
            <button className="w-full h-10 rounded-xl border bg-white">Canteen</button>
            <button className="w-full h-10 rounded-xl border bg-white">X-Ray</button>
            <button className="w-full h-10 rounded-xl border bg-white">Playroom</button>
          </div>
          <div className="rounded-2xl border min-h-72 grid place-items-center bg-white">
            {/* Replace with actual map / image */}
            <img src="/map-placeholder.png" alt="Hospital map" className="max-h-72 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
