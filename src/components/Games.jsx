export default function Games() {
  return (
    <section id="games" className="scroll-mt-24 py-10">
      <h2 className="text-lg font-semibold">Games</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <a key={i} href="#" className="rounded-2xl border aspect-[4/3] bg-white grid place-items-center hover:shadow-soft">
            Game {i + 1}
          </a>
        ))}
      </div>
    </section>
  );
}
