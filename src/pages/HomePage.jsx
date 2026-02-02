import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // npm install axios

export default function HomePage() {
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

      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Mascot */}
          <img
            src="/images/heroIMG.png"
            alt="Hippo doctor mascot"
            className="w-80 h-80 md:w-96 md:h-96 object-contain"
          />

          {/* Right side */}

          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <h1 className="text-2xl font-semibold pb-12">
              Welcome to The Healthy Hippo Hub App
            </h1>

            <Link
              to="/public-map"
              className="w-56 text-center rounded-full bg-hippoBlue text-ink font-semibold px-6 py-2 shadow-soft hover:brightness-[.97] transition"
            >
              View Hospital Map
            </Link>

            <Link
              to="/login"
              className="w-56 text-center rounded-full bg-hippoBlue text-ink font-semibold px-6 py-2 shadow-soft hover:brightness-[.97] transition"
            >
              Continue To Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
