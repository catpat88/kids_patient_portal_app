import { Hospital } from "lucide-react";

const cards = [
  {
    t: "Where am I going?",
    c: "This is the children’s wing of the hospital. You are safe here, and nurses and doctors will help you feel better.",
    borderColor: "border-sunnyYellow",
    img: "/images/hospital.png",
  },
  {
    t: "What can I do while I wait?",
    c: "You can play with toys, draw pictures, or watch a short cartoon until it’s your turn.",
    borderColor: "border-mintGreen",
    img: "/images/childtoybox.png",
  },
  {
    t: "Who I will see?",
    c: "Today you might meet a nurse, doctor, or play worker. They will tell you what will happen.",
    borderColor: "border-coralPink",
    img: "/images/hospitalstaff.png",
  },
  {
    t: "Taking Medicine",
    c: "Medicine helps your body get better. Some medicine is a drink, some is a tablet, and sometimes it is given through a tiny straw in your arm.",
    borderColor: "border-lilac",
    img: "/images/medication.png",
  },
];

export default function MyVisit() {
  return (
    <section id="visit" className="scroll-mt-27 py-10">
      <div className="rounded-3xl bg-card p-6 md:p-8">
        {/* Header with icon */}
        <div className="flex items-center gap-2 mb-6">
          <Hospital className="w-6 h-6 text-ink" />
          <h2 className="text-lg font-semibold text-ink">My Visit</h2>
        </div>

        {/* Card grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((x) => (
            <article
              key={x.t}
              className={`my-visit-card flex flex-col items-center gap-4 rounded-2xl bg-page border-8 ${x.borderColor} p-5 shadow-soft md:flex-row`}
            >
              {/* Image */}
              <img
                src={x.img}
                alt={x.t}
                // Mobile: full width, auto height, constrained by max-w-40 center
                // Tablet/Desktop (sm+): set back to w-40 h-40
                className="w-full max-w-40 h-auto object-contain mx-auto p-2 md:w-40 md:h-40"
              />

              {/* Text */}
              <div className="w-full">
                <h3 className="text-xl font-semibold text-ink">{x.t}</h3>
                <p className="mt-2 text-ink/70">{x.c}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
