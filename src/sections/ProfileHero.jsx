export default function ProfileHero() {
  return (
    <section id="profile" className="scroll-mt-24 py-12 px-6 lg:px-16 bg-page">
      {/* 2-column grid on medium screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20 max-w-6xl mx-auto">
        
        {/* Left: Image */}
        <div className="flex justify-center md:justify-end">
          <div className=" w-48 h-48 md:w-64 md:h-64">
            <img
              src="/images/heroIMG.png"
              alt="Hippo mascot"
              className="w-60 h-60 md:w-72 md:h-72 object-contain"
            />
          </div>
        </div>

        {/* Right: Text + info */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hi, I’m Ella! <span className="align-middle">⭐</span>
          </h1>
          <p className="mt-1 text-ink/70">I’m 5 years old</p>

          <div className="mt-6 grid gap-3 max-w-md mx-auto md:mx-0">
            <div className="rounded-xl bg-sky-50 px-4 py-3 shadow-soft">
              🛏️ My doctor is Dr. Smith
            </div>
            <div className="rounded-xl bg-mint-50 px-4 py-3 shadow-soft">
              💉 My next appointment: 13 Nov, 10:30
            </div>
            <div className="rounded-xl bg-peach-50 px-4 py-3 shadow-soft">
              📋 My preparation: Packed my toy & snacks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
