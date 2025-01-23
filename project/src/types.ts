export interface Game {
  id: string;
  title: string;
  coverUrl: string;
  launchCommand: string;
  category: string;
  lastPlayed?: Date;
  favorite: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}