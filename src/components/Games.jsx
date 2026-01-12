import React from 'react';
import { Gamepad2, Puzzle, Play } from 'lucide-react';

// Custom Snake Icon Component to match Lucide style
const SnakeIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2 13.5h2a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 1 2.5-2.5h2a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 0 2.5 2.5h2" />
    <circle cx="19" cy="13.5" r="2" />
    <path d="M21 13.5h1" />
  </svg>
);

export default function GamesList() {
  // 1. DATA
  const games = [
    { 
      id: 1, 
      title: "Tic Tac Toe", 
      description: "Classic strategy game for two players.",
      icon: <Puzzle className="w-8 h-8 text-ink" />,
      color: "bg-mintGreen", 
      link: "https://playtictactoe.org/"
    },
    { 
      id: 2, 
      title: "Snake Eater", 
      description: "Navigate the grid and grow without hitting walls.",
      // Updated to use the custom SnakeIcon
      icon: <SnakeIcon className="w-8 h-8 text-ink" />,
      color: "bg-sunnyYellow", 
      link: "https://playsnake.org/"
    },
    { 
      id: 3, 
      title: "Space Invaders", 
      description: "Defend Earth from waves of alien invaders.",
      icon: <Gamepad2 className="w-8 h-8 text-ink" />,
      color: "bg-peach", 
      link: "https://freeinvaders.org/"
    }
  ];

  return (
    <section id="games" className="scroll-mt-36 mb-5 rounded-3xl py-5 bg-card flex justify-center">
      <div className="w-full max-w-5xl rounded-3xl order-card h-fit ">
        
        {/* HEADER */}
        <div className="flex flex-row gap-2 py-3 items-center">
          <Gamepad2 className="w-6 h-6 text-gray-800" />
          <h2 className="text-lg font-semibold text-gray-800">Games</h2>
        </div>
        <h3 className="text-sm py-3 text-ink">Choose a game to play:</h3>

        {/* SINGLE ROW LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {games.map((game) => (
             <a 
               href={game.link}
               target="_blank"
               rel="noopener noreferrer"
               key={game.id}
               className={`
                 aspect-square rounded-3xl shadow-sm hover:-translate-y-1 transition-all duration-300
                 flex flex-col items-center justify-center gap-3 p-4 group
                 ${game.color}
                 opacity-90 hover:opacity-100 hover:shadow-md
               `}
             >
               {/* Icon Container */}
               <div className="bg-white/40 p-4 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  {game.icon}
               </div>
               
               {/* Text Content */}
               <div className="text-center">
                  <span className="block text-sm font-bold text-gray-800 uppercase tracking-wide mb-1">
                    {game.title}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 group-hover:text-gray-900">
                    Play Now <Play className="w-3 h-3 fill-current" />
                  </span>
               </div>
             </a>
           ))}
        </div>
      </div>
    </section>
  );
}