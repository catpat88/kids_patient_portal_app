const depts = [
  { name: "Surgery", blurb: "How surgery works & who helps you." },
  { name: "MRI/Scan", blurb: "What a scan is like and what to expect." },
  { name: "Clinics", blurb: "Meet doctors in clinic visits." },
  { name: "Wards", blurb: "Where you’ll sleep and play." },
  { name: "X-Ray", blurb: "Pictures of bones to help doctors." },
  { name: "Play Areas", blurb: "Play team, toys, art & games." },
];

export default function Departments() {
  return (
    <section id="departments" className="scroll-mt-24 py-10">
      <h2 className="text-lg font-semibold">Departments</h2>
      <p className="mt-2 text-ink/70 max-w-2xl">
        Our hospital is made up of many departments. Find out about them here!
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {depts.map((d) => (
          <article key={d.name} className="rounded-2xl border p-5 bg-white hover:shadow-soft">
            <h3 className="text-xl font-semibold">{d.name}</h3>
            <p className="mt-2 text-ink/70">{d.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
