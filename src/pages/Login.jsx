import { Link, useNavigate } from "react-router-dom";
import tailwindConfig from "../../tailwind.config";



export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col">
      {/* Header / logo */}
      <header className="py-6">
        <img
          src="public/images/healthy-hippo-logo.png"
          alt="Healthy Hippo Hub"
          className="mx-auto h-20 md:h-25"
        />
      <div className="h-px w-full bg-gray-300"></div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 w-full">
        {/* Layout: form + mascot image */}
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
          {/* Mascot */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className=" grid place-items-center overflow-hidden w-80 h-80 md:w-90 md:h-90">
              <img
                src="public/images/heroIMG.png"  
                alt="Hippo doctor mascot"
                className="w-80 h-80 md:w-90 md:h-90 object-contain"
              />
            </div>
          </div>

          {/* Form card (pure UI) */}
          <div className="order-1 md:order-2">
            <h1 className="text-center md:text-left text-2xl md:text-3xl font-bold">
              Please sign in! <span className="align-middle">✨</span>
            </h1>

            <div className="mt-6 max-w-sm mx-auto md:mx-0 space-y-4">
              <label className="block">
                <span className="sr-only">Patient ID</span>
                <input
                  type="text"
                  placeholder="Patient ID"
                  className="w-full rounded-xl bg-graySoft border border-grayLine px-4 py-3 outline-none focus:ring-2 focus:ring-hippoBlue"
                />
              </label>

              <label className="block">
                <span className="sr-only">Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl bg-graySoft border border-grayLine px-4 py-3 outline-none focus:ring-2 focus:ring-hippoBlue"
                />
              </label>

              {/* Buttons: Continue (navigates home), or a Link version */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="rounded-full bg-hippoBlue text-ink font-semibold px-5 py-2 shadow-soft hover:brightness-[.97] active:translate-y-[1px] transition"
                >
                  Continue to portal
                </button>

                <Link
                  to="/"
                  className="text-sm underline underline-offset-4 text-inkLight"
                >
                  Skip for now
                </Link>
              </div>

              {/* Helper text only (no backend) */}
              <p className="text-xs text-inkLight/80">
                This is a preview of the login UI. Authentication hasn’t been connected yet.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
