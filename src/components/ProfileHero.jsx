export default function ProfileHero() {
  return (
    <section
      id="profile"
      className="scroll-mt-24 py-12 px-6 lg:px-16 bg-page"
      style={{ marginTop: 30 }}
    >
      {/* 2-column grid on medium screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20 max-w-6xl mx-auto">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-end">
          <div className=" w-70 h-70 md:w-100 md:h-100">
            <img
              src="/images/heroIMG.png"
              alt="Hippo mascot"
              className="w-60 h-60 md:w-90 md:h-90 object-contain"
            />
          </div>
        </div>

        {/* Right: Text + info */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hi Ella! <span className="align-middle">⭐</span>
          </h1>
          <p className="mt-1 text-ink/70">You are 5 years old</p>

          <div className="mt-6 grid gap-3 max-w-md mx-auto md:mx-0">
            <div className="rounded-xl bg-hippoBlue px-4 py-3 shadow-soft">
              🛏️ Your doctor is Dr. Smith
            </div>
            <div className="rounded-xl bg-hippoBlue px-4 py-3 shadow-soft">
              📅 Your next appointment: 13 Nov, 10:30
            </div>
            <div className="rounded-xl bg-hippoBlue px-4 py-3 shadow-soft">
              💊 Your medication: Paracetamol 4x a day for 5 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
