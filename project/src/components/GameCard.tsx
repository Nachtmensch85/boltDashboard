import React from 'react';
import { Star, StarOff, Play } from 'lucide-react';
import type { Game } from '../types';

interface GameCardProps {
  game: Game;
  onLaunch: (game: Game) => void;
  onToggleFavorite: (game: Game) => void;
}

export function GameCard({ game, onLaunch, onToggleFavorite }: GameCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg transition-all hover:scale-105 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      <img
        src={game.coverUrl}
        alt={game.title}
        className="h-48 w-full object-cover"
      />
      
      <div className="absolute bottom-0 w-full p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{game.title}</h3>
          <button
            onClick={() => onToggleFavorite(game)}
            className="text-yellow-400 hover:text-yellow-300"
          >
            {game.favorite ? (
              <Star className="h-5 w-5 fill-current" />
            ) : (
              <StarOff className="h-5 w-5" />
            )}
          </button>
        </div>
        
        <button
          onClick={() => onLaunch(game)}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded bg-green-500 px-4 py-2 font-medium text-white transition-colors hover:bg-green-600"
        >
          <Play className="h-4 w-4" /> Launch Game
        </button>
      </div>
    </div>
  );
}