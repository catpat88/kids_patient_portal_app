export default function Games() {
  return (
    <section id="games" className=" bg-card scroll-mt-36 px-6 py-10 mb-10 xl:scroll-mt-3 rounded-3xl">
      <h2 className="text-lg font-semibold">Games</h2>
      <div className=" px-4 mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <a key={i} href="#" className="rounded-2xl aspect-[4/3] bg-white grid place-items-center hover:shadow-soft">
            Game {i + 1}
          </a>
        ))}
      </div>
    </section>
  );
}
