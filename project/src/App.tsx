import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { GameCard } from './components/GameCard';
import type { Game } from './types';

// Sample data - in a real app, this would come from your backend
const sampleGames: Game[] = [
  {
    id: '1',
    title: 'Cyberpunk 2077',
    coverUrl: 'https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?auto=format&fit=crop&w=800',
    launchCommand: 'cyberpunk.exe',
    category: 'action',
    favorite: true,
  },
  {
    id: '2',
    title: 'Red Dead Redemption 2',
    coverUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800',
    launchCommand: 'rdr2.exe',
    category: 'action',
    favorite: false,
  },
  {
    id: '3',
    title: 'The Witcher 3',
    coverUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800',
    launchCommand: 'witcher3.exe',
    category: 'action',
    favorite: true,
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [games, setGames] = useState(sampleGames);

  const handleLaunchGame = (game: Game) => {
    // In a real app, this would trigger the game launch via your backend
    console.log(`Launching ${game.title} with command: ${game.launchCommand}`);
  };

  const handleToggleFavorite = (game: Game) => {
    setGames(games.map(g => 
      g.id === game.id ? { ...g, favorite: !g.favorite } : g
    ));
  };

  const filteredGames = games.filter(game => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'favorites') return game.favorite;
    return game.category === selectedCategory;
  });

  return (
    <div className="flex h-screen bg-[url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=1920')] bg-cover bg-center bg-no-repeat">
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <main className="flex-1 overflow-auto p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGames.map(game => (
            <GameCard
              key={game.id}
              game={game}
              onLaunch={handleLaunchGame}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;