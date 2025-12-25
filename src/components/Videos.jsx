import { Map, Video, Stethoscope, Gamepad2, Star } from "lucide-react";


export default function Videos() {
  return (
    // container, heading & icon//
    <section id="videos" className="scroll-mt-28 xl:scroll-mt-0 py-10">
      <div className="rounded-3xl bg-card p-6 md:p-8">
        <div className="flex flex-row gap-2 py-3">
          <Video className="w-6 h-6 text-ink" />
          <h2 className="text-lg font-semibold">Videos</h2>
        </div>
        <h3 className="text-sm py-3">Choose a video to view:</h3>

        <div className="flex flex-col gap-6 lg:flex-row">
        {/* // 2. Right Side: Button/Controls Container */}
        <div className="w-full lg:w-1/3 grid grid-cols-2 gap-3">
            {/* Button 1 */}
            <button className="h-30 w-30 m-4 rounded-full bg-mintGreen shadow-soft  hover:-translate-y-0.5 transition flex flex-col items-center justify-center justify-self-center">
            <Map className="w-8 h-8" />
            <span className="text-sm">Hospital Tour</span>
            </button>
            {/* Button 2 */}
            <button className="h-30 w-30 m-4 rounded-full bg-sunnyYellow shadow-soft  hover:-translate-y-0.5 transition flex flex-col items-center justify-center justify-self-center">
            <Stethoscope className="w-8 h-8" />
            <span className="text-sm">Hospital Workers</span>
            </button>
            {/* Button 3 */}
            <button className="h-30 w-30 m-4 rounded-full bg-peach shadow-soft  hover:-translate-y-0.5 transition flex flex-col justify-self-center justify-center items-center">
            <Gamepad2 className="w-8 h-8" />
            <span className="text-sm">Play Time</span>
            </button>
            {/* Button 4 */}
            <button className="h-30 w-30 m-4 rounded-full bg-lilac shadow-soft hover:-translate-y-0.5 flex flex-col justify-self-center items-center justify-center">
            <Star className="w-8 h-8" />
            <span className="text-sm">Fun Activities</span>
            </button>
        </div>
          {/* Video Player display */}
          <div className="rounded-2xl w-full lg:w-2/3 aspect-video bg-black/5 grid place-items-center">
            <span className="text-ink">Video Player</span>
          </div>
        </div>
      </div>
    </section>
  );
}
