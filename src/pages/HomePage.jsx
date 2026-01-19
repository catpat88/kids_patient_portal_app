import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // npm install axios

export default function HomePage(){
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
          <div>
            
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <h1>
              Welcome to The Healthy Hippo Hub App
            </h1>
          <Link
            to="/public-map"
            className="inline-block rounded-full bg-hippoBlue text-ink font-semibold px-5 py-2 shadow-soft hover:brightness-[.97] active:translate-y-[1px] transition text-center"
          >
            View Hospital Map
          </Link>

          <Link
            to="/login"
            className="inline-block rounded-full bg-hippoBlue text-ink font-semibold px-5 py-2 shadow-soft hover:brightness-[.97] active:translate-y-[1px] transition text-center"
          >
            Continue To Login
          </Link>
        </div>
        </div>
      </main>
    </div>
  );
}
