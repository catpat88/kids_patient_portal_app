import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login({ setIsloggedIn, setPatient }) {
  const navigate = useNavigate();

  // Renamed for consistency with backend: patient_id
  const [patient_id, setPatientID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send patient_id instead of username
      const res = await axios.post("http://localhost:4000/api/login", {
        patient_id,
        password,
      });

      if (res.data.status === "success") {
        localStorage.setItem("patient", JSON.stringify(res.data.user));
        setPatient(res.data.user);
        setIsloggedIn(true);
        navigate("/");
      }
    } catch (err) {
      console.error("Login request failed:", err);

      if (err?.response?.status === 401) {
        setError("Invalid credentials. Please try again.");
      } else if (
        err.code === "ECONNREFUSED" ||
        err.message?.includes("Network Error")
      ) {
        setError("Cannot reach authentication server. Is the backend running?");
      } else {
        setError("Server error. Please try later.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col">
      <header className="py-6">
        <img
          src="/images/healthy-hippo-logo.png"
          alt="Healthy Hippo Hub"
          className="mx-auto h-20 md:h-25"
        />
        <div className="h-px w-full bg-gray-300"></div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 w-full">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="grid place-items-center overflow-hidden w-80 h-80 md:w-90 md:h-90">
              <img
                src="/images/heroIMG.png"
                alt="Hippo doctor mascot"
                className="w-80 h-80 md:w-90 md:h-90 object-contain"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="order-1 md:order-2">
            <h1 className="text-center md:text-left text-2xl md:text-3xl font-bold">
              Please sign in! <span className="align-middle">✨</span>
            </h1>

            <div className="mt-6 max-w-sm mx-auto md:mx-0 space-y-4">
              <input
                type="text"
                placeholder="Patient ID"
                className="w-full rounded-xl bg-graySoft border border-grayLine px-4 py-3 outline-none focus:ring-2 focus:ring-hippoBlue"
                value={patient_id}
                onChange={(e) => setPatientID(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl bg-graySoft border border-grayLine px-4 py-3 outline-none focus:ring-2 focus:ring-hippoBlue"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex items-center gap-3">
                <button
                  type="submit"
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

              <p className="text-xs text-inkLight/80">
                This is a preview of the login UI. Authentication hasn’t been
                connected yet.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
