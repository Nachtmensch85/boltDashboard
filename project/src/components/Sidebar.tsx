import React from 'react';
import { Home, GamepadIcon, Clock, Star, Settings } from 'lucide-react';
import type { Category } from '../types';

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories: Category[] = [
  { id: 'all', name: 'All Games', icon: 'Home' },
  { id: 'action', name: 'Action', icon: 'GamepadIcon' },
  { id: 'recent', name: 'Recently Played', icon: 'Clock' },
  { id: 'favorites', name: 'Favorites', icon: 'Star' },
];

export function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  const iconMap = {
    Home,
    GamepadIcon,
    Clock,
    Star,
    Settings,
  };

  return (
    <div className="flex h-full w-64 flex-col bg-gray-900 p-4">
      <div className="flex items-center gap-3 px-2 py-4">
        <GamepadIcon className="h-8 w-8 text-green-500" />
        <h1 className="text-xl font-bold text-white">Game Hub</h1>
      </div>
      
      <nav className="mt-8 flex flex-col gap-2">
        {categories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-500 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </nav>
      
      <button className="mt-auto flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white">
        <Settings className="h-5 w-5" />
        <span>Settings</span>
      </button>
    </div>
  );
}