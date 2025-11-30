import React, { useState } from "react";
import { Map, Video, Stethoscope, Gamepad2, Star, Syringe, BriefcaseMedical } from "lucide-react";

// 1. Define the video data outside the component
const videoData = [
  {
    id: "hospital-tour",
    title: "Hospital Tour",
    icon: Map,
    color: "bg-mintGreen",
    videoId: "ZFUG6KjirL8", 
  },
  {
    id: "care-team",
    title: "Your Care Team",
    icon: Stethoscope,
    color: "bg-sunnyYellow",
    videoId: "bwx2Z69S0YA",
  },
  {
    id: "surgery-prep",
    title: "Surgery Prep",
    icon: Syringe, 
    color: "bg-peach",
    videoId: "N7uUDb2dpBU", 
  },
  {
    id: "doctors-do",
    title: "What Doctors Do?",
    icon: BriefcaseMedical, 
    color: "bg-lilac",
    videoId: "XrajGeQmpYo",
  },
];


export default function Videos() {
    // 2. Use useState to track the currently selected video
    // Initialize with the videoId of the first item, or null/'' for no video initially
    const [currentVideoId, setCurrentVideoId] = useState(videoData[0].videoId);
    const [currentVideoTitle, setCurrentVideoTitle] = useState(videoData[0].title);


    // 3. Handler function to update the state when a button is clicked
    const handleButtonClick = (videoId, title) => {
        setCurrentVideoId(videoId);
        setCurrentVideoTitle(title);
    };

    // 4. Function to generate the YouTube embed URL
    const getEmbedUrl = (videoId) => {
        // The 'autoplay=1' parameter starts the video automatically when the state changes
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    };

    return (
        // container, heading & icon
        <section id="videos" className="C">
            <div className="rounded-3xl bg-card p-6 md:p-8">
                <div className="flex flex-row gap-2 py-3">
                    <Video className="w-6 h-6 text-ink" />
                    <h2 className="text-lg font-semibold">Videos</h2>
                </div>
                <h3 className="text-sm py-3">
                    Choose a video to view:
                </h3>

                <div className="flex flex-col gap-6 lg:flex-row">
                    {/* Left Side: Button/Controls Container */}
                    <div className="w-full lg:w-1/3 grid grid-cols-2 gap-3">
                        {/* Loop over the videoData to create the buttons */}
                        {videoData.map((video) => {
                            const Icon = video.icon; // Get the component/icon from the data
                            const isSelected = currentVideoId === video.videoId;

                            return (
                                <button
                                    key={video.id}
                                    // 5. Attach the click handler
                                    onClick={() => handleButtonClick(video.videoId, video.title)}
                                    className={`
                                        h-30 w-30 m-4 rounded-full shadow-soft transition flex 
                                        flex-col items-center justify-center justify-self-center 
                                        ${video.color} 
                                        ${isSelected ? 'ring-4 ring-ink/50 scale-105' : 'hover:-translate-y-0.5'}
                                    `}
                                >
                                    <Icon className="w-8 h-8" />
                                    <span className="text-sm">{video.title}</span>
                                </button>
                            );
                        })}
                    </div>
                    
                    {/* 6. Video Player display */}
                    <div className="rounded-2xl w-full lg:w-2/3 aspect-video bg-black/5 grid place-items-center overflow-hidden">
                        {currentVideoId ? (
                            <iframe
                                // Use the generated embed URL as the source
                                src={getEmbedUrl(currentVideoId)}
                                title={currentVideoTitle}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        ) : (
                            // Fallback if no video is selected (optional)
                            <span className="text-ink">Select a video to begin</span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}