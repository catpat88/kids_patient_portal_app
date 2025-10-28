const cards = [
  { t: "Where am I going?", c: "Children’s Ward map and directions.", tone: "bg-sky-50" },
  { t: "What can I bring?", c: "Comfy clothes, favorite toy, book.", tone: "bg-mint-50" },
  { t: "Who I will see", c: "Doctors and nurses who help me.", tone: "bg-peach-50" },
  { t: "Today’s steps", c: "Check-in, waiting room, nurse, doctor.", tone: "bg-grape-50" },
];

export default function MyVisit() {
  return (
    <section id="visit" className="scroll-mt-24 py-10">
      <div className="rounded-3xl bg-gray-50 p-6 md:p-8 border">
        <h2 className="text-lg font-semibold">My Visit</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {cards.map((x) => (
            <article key={x.t} className={`rounded-2xl ${x.tone} border p-5 shadow-soft`}>
              <h3 className="text-xl font-semibold">{x.t}</h3>
              <p className="mt-2 text-ink/70">{x.c}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
