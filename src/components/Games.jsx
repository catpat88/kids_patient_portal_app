import React from 'react';
import { Gamepad2, Ghost, Puzzle, Play } from 'lucide-react';
// import { FontAwesomeIcon } from 'fortawesome/react-fontawesome';
// import { faGamepad } from '@fortawesome/free-solid-svg-icons';

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
      icon: <snake className="w-8 h-8 text-yellow-700" />,
      color: "bg-yellow-200", // approximating 'sunnyYellow'
      link: "https://playsnake.org/"
    },
    { 
      id: 3, 
      title: "Space Invaders", 
      description: "Defend Earth from waves of alien invaders.",
      icon: <snake className="w-8 h-8 text-orange-700" />,
      color: "bg-orange-200", // approximating 'peach'
      link: "https://freeinvaders.org/"
    }
  ];

  return (
    <section id="games" className="scroll-mt-24 py-10 -mt-6 xl:scroll-mt-3">
      <div className="rounded-3xl bg-card p-6 md:p-8">
        
        {/* HEADER */}
        <div className="flex flex-row gap-2 py-3 items-center">
          <Gamepad2 className="w-6 h-6 text-ink" />
          <h2 className="text-lg font-semibold text-ink">Games</h2>
        </div>
        <h3 className="text-sm py-3 text-ink">Choose a game to play:</h3>

        {/* SINGLE ROW LAYOUT - Updated to grid-cols-3 for even spacing */}
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
                  <span className="block text-sm font-bold text-ink uppercase tracking-wide mb-1">
                    {game.title}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink group-hover:text-gray-900">
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