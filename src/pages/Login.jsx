import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // npm install axios

export default function Login({ setIsloggedIn }) {
  const navigate = useNavigate();
  const [patientID, setPatientID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/login", {
        username: patientID,
        password,
        // add age - get from stored DOB
      });

      if (res.data.status === "success") {
        setIsloggedIn(true); // update parent state
                // add conditional statement for DOB here
                // if age > navigate to teen else kids
        navigate("/"); // redirect to home
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
      {/* Header / logo */}
      <header className="py-6">
        <img
          src="/images/healthy-hippo-logo.png"
          alt="Healthy Hippo Hub"
          className="mx-auto h-20 md:h-25"
        />
        <div className="h-px w-full bg-gray-300"></div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 w-full">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
          {/* Mascot */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="grid place-items-center overflow-hidden w-80 h-80 md:w-90 md:h-90">
              <img
                src="/images/heroIMG.png"
                alt="Hippo doctor mascot"
                className="w-80 h-80 md:w-90 md:h-90 object-contain"
              />
            </div>
          </div>

          {/* Form card */}
          <form onSubmit={handleSubmit} className="order-1 md:order-2">
            <h1 className="text-center md:text-left text-2xl md:text-3xl font-bold">
              Please sign in! <span className="align-middle">✨</span>
            </h1>

            <div className="mt-6 max-w-sm mx-auto md:mx-0 space-y-4">
              <input
                type="text"
                placeholder="Patient ID"
                className="w-full rounded-xl bg-graySoft border border-grayLine px-4 py-3 outline-none focus:ring-2 focus:ring-hippoBlue"
                value={patientID}
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
                    to="/HomePage"
                    className="inline-block rounded-full bg-hippoBlue text-ink font-semibold px-5 py-2 shadow-soft hover:brightness-[.97] active:translate-y-[1px] transition text-center"
                  >
                   Back To Home Page
                  </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
