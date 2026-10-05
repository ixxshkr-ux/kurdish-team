/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCodex } from './components/HeroCodex';
import { InfinityGauntlet } from './components/InfinityGauntlet';
import { MultiverseArena } from './components/MultiverseArena';
import { ComicCoverStudio } from './components/ComicCoverStudio';
import { TimelineExplorer } from './components/TimelineExplorer';
import { StanLeeModal } from './components/StanLeeModal';
import { ComicSfxBubbleContainer, triggerComicSfx } from './components/ComicSfxBubble';
import { MARVEL_CHARACTERS, INFINITY_STONES, ARENA_LOCATIONS } from './data/characters';
import { MARVEL_TIMELINE } from './data/timeline';
import { Character } from './types/marvel';
import { setSoundEnabled as configureSound, playSound } from './utils/soundEffects';
import { Shield, Sparkles, Volume2, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'roster' | 'gauntlet' | 'arena' | 'studio' | 'timeline'>('roster');
  const [soundEnabled, setSoundEnabledState] = useState<boolean>(true);
  const [halftoneEnabled, setHalftoneEnabled] = useState<boolean>(true);
  const [lang, setLang] = useState<'en' | 'ku'>('ku'); // Default to Kurdish as requested by user
  const [dustedIds, setDustedIds] = useState<string[]>([]);
  const [isStanLeeOpen, setIsStanLeeOpen] = useState<boolean>(false);
  const [preselectedArenaHero, setPreselectedArenaHero] = useState<Character | null>(null);

  const handleSoundToggle = (enabled: boolean) => {
    setSoundEnabledState(enabled);
    configureSound(enabled);
  };

  // The Thanos Snap: Randomly turns 50% of the active roster into dust!
  const handleTriggerSnap = () => {
    const shuffled = [...MARVEL_CHARACTERS].sort(() => 0.5 - Math.random());
    const halfCount = Math.ceil(MARVEL_CHARACTERS.length / 2);
    const toDust = shuffled.slice(0, halfCount).map((c) => c.id);
    setDustedIds(toDust);
  };

  // The Iron Man Nano-Gauntlet Reversal
  const handleRestoreUniverse = () => {
    setDustedIds([]);
  };

  const handleOpenArenaWithHero = (hero: Character) => {
    setPreselectedArenaHero(hero);
    setActiveTab('arena');
    playSound('whoosh');
  };

  return (
    <div className={`min-h-screen bg-[#090a0f] text-[#f1f2f6] relative selection:bg-[#ec1d24] selection:text-white ${halftoneEnabled ? 'bg-halftone-dots' : ''}`}>
      {/* Floating Comic Action Sound Bubble Container */}
      <ComicSfxBubbleContainer />

      {/* Stan Lee Memorial Modal */}
      <StanLeeModal
        isOpen={isStanLeeOpen}
        onClose={() => setIsStanLeeOpen(false)}
        lang={lang}
      />

      {/* Main Marvel Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        soundEnabled={soundEnabled}
        setSoundEnabled={handleSoundToggle}
        halftoneEnabled={halftoneEnabled}
        setHalftoneEnabled={setHalftoneEnabled}
        lang={lang}
        setLang={setLang}
        onOpenStanLee={() => setIsStanLeeOpen(true)}
        isUniverseSnapped={dustedIds.length > 0}
      />

      {/* Main Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10">
        {activeTab === 'roster' && (
          <HeroCodex
            characters={MARVEL_CHARACTERS}
            lang={lang}
            dustedIds={dustedIds}
            onOpenArenaWithHero={handleOpenArenaWithHero}
          />
        )}

        {activeTab === 'gauntlet' && (
          <InfinityGauntlet
            stones={INFINITY_STONES}
            lang={lang}
            dustedIds={dustedIds}
            onTriggerSnap={handleTriggerSnap}
            onRestoreUniverse={handleRestoreUniverse}
          />
        )}

        {activeTab === 'arena' && (
          <MultiverseArena
            characters={MARVEL_CHARACTERS}
            arenas={ARENA_LOCATIONS}
            lang={lang}
            preselectedHero={preselectedArenaHero}
          />
        )}

        {activeTab === 'studio' && (
          <ComicCoverStudio
            characters={MARVEL_CHARACTERS}
            lang={lang}
          />
        )}

        {activeTab === 'timeline' && (
          <TimelineExplorer
            events={MARVEL_TIMELINE}
            lang={lang}
          />
        )}
      </main>

      {/* Bottom Comic Soundboard Quick Strip */}
      <aside className="border-t-4 border-black bg-[#0d0f16] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Volume2 size={16} className="text-[#ec1d24]" />
            <span className="font-comic text-sm tracking-wider uppercase text-yellow-400">
              {lang === 'ku' ? 'تەختەی دەنگە تایبەتەکان:' : 'MARVEL SFX SOUNDBOARD:'}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: 'REPULSOR', sfx: 'repulsor' as const, word: 'BLAST!', color: '#60a5fa' },
              { label: 'SHIELD CLANG', sfx: 'shield' as const, word: 'CLANG!', color: '#f87171' },
              { label: 'THUNDER', sfx: 'thunder' as const, word: 'KRAKOOM!', color: '#38bdf8' },
              { label: 'SPIDER THWIP', sfx: 'thwip' as const, word: 'THWIP!', color: '#ef4444' },
              { label: 'CHAOS MAGIC', sfx: 'magic' as const, word: 'ZAP!', color: '#c084fc' },
              { label: 'TITAN PUNCH', sfx: 'punch' as const, word: 'BAM!', color: '#facc15' },
              { label: 'THE SNAP', sfx: 'snap' as const, word: 'SNAP!', color: '#ffffff' },
            ].map((btn, i) => (
              <button
                key={i}
                onClick={() => {
                  playSound(btn.sfx);
                  triggerComicSfx(btn.word, undefined, undefined, btn.color);
                }}
                className="px-2.5 py-1 bg-black border border-zinc-700 hover:border-[#ec1d24] text-xs font-bold text-zinc-300 hover:text-white transition-colors uppercase active:scale-95 cursor-pointer"
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Marvel Authentic Footer */}
      <footer className="border-t border-zinc-800 bg-[#06070a] text-zinc-400 py-8 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#ec1d24] px-3 py-1 font-marvel text-2xl text-white tracking-tighter border border-white">
              MARVEL
            </div>
            <div>
              <div className="font-comic text-yellow-400 text-sm tracking-wide">
                UNIVERSE CODEX & MULTIVERSE ARENA
              </div>
              <p className="text-[11px] text-zinc-500">
                {lang === 'ku'
                  ? 'پێشکەشە بە هەموو هەوادارانی کۆمیک و جیهانی مارڤڵ لە کوردستان و جیهان.'
                  : 'Dedicated to comic book lovers and True Believers across the Multiverse.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                playSound('thunder');
                setIsStanLeeOpen(true);
              }}
              className="flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 font-comic text-sm uppercase transition-colors"
            >
              <Heart size={14} className="text-red-500 fill-red-500" />
              <span>STAN LEE: EXCELSIOR!</span>
            </button>
            <span className="text-zinc-600">·</span>
            <span className="text-[11px] text-zinc-500">
              © {new Date().getFullYear()} MARVEL CHARACTERS INC.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
