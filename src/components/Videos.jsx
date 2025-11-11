export default function Videos() {
  return (
    <section id="videos" className="scroll-mt-24 py-10">
      <div className="rounded-3xl bg-gray-50 p-6 md:p-8 border">
        <h2 className="text-lg font-semibold">Videos</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-[260px,1fr]">
          <div className="grid gap-3">
            {["Hospital Tour", "Meet the Nurses", "X-Ray for Kids", "Fun Activities"].map((v) => (
              <button key={v} className="text-left rounded-xl border bg-white py-2 px-3 hover:bg-sky-50">
                {v}
              </button>
            ))}
          </div>
          <div className="rounded-2xl border aspect-video bg-black/5 grid place-items-center">
            <span className="text-ink/60">Video Player</span>
          </div>
        </div>
      </div>
    </section>
  );
}
