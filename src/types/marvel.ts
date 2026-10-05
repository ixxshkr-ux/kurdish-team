export interface PowerGrid {
  intelligence: number; // 1 - 7
  strength: number;     // 1 - 7
  speed: number;        // 1 - 7
  durability: number;   // 1 - 7
  energyProjection: number; // 1 - 7
  fightingSkills: number;   // 1 - 7
}

export interface HeroSuit {
  id: string;
  name: string;
  kurdishName: string;
  imageUrl: string;
  description: string;
  kurdishDescription: string;
  year?: string;
}

export interface Character {
  id: string;
  name: string;
  kurdishName: string;
  realName: string;
  kurdishRealName: string;
  alias: string;
  role: 'hero' | 'villain' | 'antihero';
  affiliation: 'Avengers' | 'X-Men' | 'Cosmic' | 'Multiverse' | 'Villains' | 'Guardians';
  accentColor: string;
  comicDebut: string;
  yearDebut: number;
  creators: string;
  bio: string;
  kurdishBio: string;
  quote: string;
  kurdishQuote: string;
  portraitUrl: string;
  actionUrl: string;
  powerGrid: PowerGrid;
  powers: string[];
  kurdishPowers: string[];
  signatureMoves: string[];
  kurdishSignatureMoves: string[];
  gear: string[];
  kurdishGear: string[];
  suits: HeroSuit[];
  soundType: 'repulsor' | 'shield' | 'thunder' | 'thwip' | 'magic' | 'punch' | 'cosmic';
  dustSnapped?: boolean;
}

export interface InfinityStone {
  id: 'space' | 'reality' | 'power' | 'soul' | 'mind' | 'time';
  name: string;
  kurdishName: string;
  colorHex: string;
  glowHex: string;
  relic: string;
  kurdishRelic: string;
  ability: string;
  kurdishAbility: string;
  lore: string;
  kurdishLore: string;
  soundKey: 'cosmic' | 'glitch' | 'punch' | 'magic' | 'repulsor' | 'thunder';
}

export interface ArenaLocation {
  id: string;
  name: string;
  kurdishName: string;
  environment: string;
  kurdishEnvironment: string;
  effect: string;
  kurdishEffect: string;
  bgGradient: string;
  icon: string;
}

export interface BattleRound {
  round: number;
  attacker: Character;
  defender: Character;
  moveName: string;
  kurdishMoveName: string;
  damage: number;
  isCrit: boolean;
  soundSfx: 'punch' | 'thunder' | 'repulsor' | 'shield' | 'thwip' | 'magic' | 'cosmic';
  comicWord: string;
  dialogue: string;
  kurdishDialogue: string;
  defenderHealthRemaining: number;
}

export interface TimelineEvent {
  id: string;
  title: string;
  kurdishTitle: string;
  year: string;
  era: 'comics-golden' | 'comics-silver' | 'comics-modern' | 'mcu-infinity' | 'mcu-multiverse';
  summary: string;
  kurdishSummary: string;
  keyHeroes: string[];
  icon: string;
}
