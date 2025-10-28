export default function Quiz() {
  return (
    <section id="quiz" className="scroll-mt-24 py-10">
      <div className="rounded-3xl bg-gray-50 p-6 md:p-8 border">
        <h2 className="text-lg font-semibold">Quiz</h2>

        <div className="mt-4 grid gap-6 md:grid-cols-[260px,1fr]">
          <div className="space-y-3">
            <div className="text-sm text-ink/70">Quiz Question 1:</div>
            <div className="font-medium">Who is the first doctor who listens to your heartbeat?</div>

            <div className="mt-3 grid gap-2">
              {["The Nurse", "The Surgeon", "The Paediatrician", "The Chef"].map((a) => (
                <label key={a} className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
                  <input type="radio" name="q1" /> {a}
                </label>
              ))}
            </div>

            <button className="mt-3 h-10 rounded-xl bg-sky-600 text-white px-4">Submit</button>
          </div>

          <div className="rounded-2xl border min-h-64 grid place-items-center bg-white">
            {/* Replace with illustration/video/image */}
            <span className="text-ink/60">Quiz Illustration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
