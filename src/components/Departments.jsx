import React from 'react';
import { Stethoscope } from "lucide-react";

// Image components
const ImageSurgery = () => (
  <img 
        src="/images/departments-surgery.png "
        alt="cartoon image of a group of healhcare professionals" 
        className="w-full h-auto object-cover max-w-sm md:max-w-md"
    />
);
const ImageMRIScan = () => (
  <img 
        src="/images/departments-mri.png"
        alt="cartoon image of a child in an MRI machine" 
        className="w-full h-auto object-cover max-w-sm md:max-w-md"
    />
);
const ImageClinics = () => (
  <img 
        src="/images/departments-clinics.png"
        alt="cartoon image of a doctor listening to a child's heartbeat with a stethoscope" 
        className="w-full h-auto object-cover max-w-sm md:max-w-md"
    />
);
const ImageWards = () => (
  <img 
        src="/images/departments-wards.png"
        alt="cartoon image of a child sitting on a hospital bed" 
        className="w-full h-auto object-cover max-w-sm md:max-w-md"
    />
);
const ImageXRay = () => (
  <img 
        src="/images/departments-x-ray.png"
        alt="cartoon image of an x-ray of someone's torso" 
        className="w-full h-auto object-cover max-w-sm md:max-w-md"
    />
);
const ImagePlayAreas = () => (
  <img 
        src="/images/departments-play-areas.png"
        alt="cartoon image of a children's play area" 
        className="w-full h-auto object-cover max-w-sm md:max-w-md"
    />
);
const ImageDepartmentDoctor = () => (
    <img 
        src="/images/department-doctor.png"
        alt="Friendly Hippo Doctor with a speech bubble" 
        className="w-full h-auto object-cover max-w-sm md:max-w-md"
    />
);

// --- DEPARTMENT DATA ---
// Updated to include full blurbs, colours, and image components
const depts = [
  { 
    name: "Surgery", 
    blurb: "Surgery is when doctors help fix something inside your body. You are given a special sleep, and when you wake up, the doctors and your family are there.",
    color: "bg-page",
    borderColor: "border-coralPink",
    image: ImageSurgery,
    title: "Surgery"
  },
  { 
    name: "MRI Scan", 
    blurb: "Just like an X-Ray, an MRI gives us a 3D picture of your body. This lets us look at your bones and muscles as a map to help us work out how to help you.",
    color:"bg-page",
    borderColor: "border-hippoBlue",
    image: ImageMRIScan,
    title: "MRI Scan"
  },
  { 
    name: "Clinics", 
    blurb: "In our hospital, we have many clinics. Here you will meet your doctor regularly to make sure you are in tip top shape.",
    color: "bg-page",
    borderColor: "border-lilac",
    image: ImageClinics,
    title: "Clinics"
  },
  { 
    name: "Wards", 
    blurb: "A ward is a big, open bedroom that you share with other people when you stay in hospital. Like a big sleepover!",
    color: "bg-page",
    borderColor: "border-mintGreen",
    image: ImageWards,
    title: "Wards"
  },
  { 
    name: "Getting an X-Ray", 
    blurb: "An X-ray is a special camera that takes a picture of your bones. You have to sit still while the picture is taken. It doesn't hurt.",
    borderColor: "border-peach",
    color: "bg-page",
    image: ImageXRay,
    title: "Getting an X-Ray"
  },
  { 
    name: "Play Areas", 
    blurb: "We have a cool play room right in our hospital! Simply turn left from our front door, into a magical land.",
    color: "bg-page",
    borderColor: "border-sunnyYellow",
    image: ImagePlayAreas,
    title: "Play Areas"
  },
];

// Hippo speech bubble header
const HippoHeader = () => (
    <div className="flex justify-end w-full"> 
        <div className="max-w-xs sm:max-w-sm md:max-w-md"> 
            <ImageDepartmentDoctor />
        </div>
    </div>
);


export default function Departments() {
  
  return (
    <section id="departments" className="py-8 px-6 lg:px-16 rounded-3xl bg-card">
      
      {/* --- Section Heading --- */}
      <div className="flex items-center mb-6">
        <Stethoscope className="w-6 h-6 text-ink mr-2"/>
        <h2 className="text-lg py-5 font-bold text-ink">Departments</h2>
      </div>

      {/* --- Hippo Header/Dialogue --- */}
      <HippoHeader />

      {/* --- Departments Grid --- */}
      {/* Grid is set to 2 columns on medium screens and up to match the side-by-side design */}

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 bg-card">
        {depts.map((d) => {
          const ImageComponent = d.image; 
          
          return (
            <article 
              key={d.name} 
              className={`
                rounded-3xl shadow-soft transition 
                ${d.color} 
                hover:shadow-lg 
                border-7 
                ${d.borderColor} 
                relative 
                overflow-hidden
                p-4
                flex flex-col sm:flex-row
              `}
              style={{minHeight: '280px'}} 
            >
              
              {/* 1. Star Ornament */}
              <div className="absolute top-2 right-2 transform rotate-45 text-2xl" 
                  style={{zIndex: 10, color: '#FFD700'}}> 
                ⭐
              </div>

              {/* 2. Image Section (Approx 40% width) */}
              <div className="w-full sm:w-2/5 mb-4 sm:mb-0 sm:mr-4 flex justify-center items-center">
                  <div className="w-full h-auto max-w-[200px] aspect-square rounded-2xl overflow-hidden">
                    <ImageComponent className="object-contain mx-auto" />
                  </div>
              </div>

              {/* 3. Text Content (Approx 60% width) */}
              {/* ⭐ CHANGE 3: Use 'self-center' to align the text block vertically in the middle ⭐ */}
              <div className="w-full sm:w-3/5 self-center">
                <h3 className="text-xl font-bold mb-2 text-ink">{d.title}</h3>
                <p className="text-ink/80 text-sm leading-relaxed">{d.blurb}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}