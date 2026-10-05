import React from 'react';
import { Volume2, VolumeX, Sparkles, Grid, Swords, Layers, Clock, Palette } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

interface NavbarProps {
  activeTab: 'roster' | 'gauntlet' | 'arena' | 'studio' | 'timeline';
  setActiveTab: (tab: 'roster' | 'gauntlet' | 'arena' | 'studio' | 'timeline') => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  halftoneEnabled: boolean;
  setHalftoneEnabled: (val: boolean) => void;
  lang: 'en' | 'ku';
  setLang: (lang: 'en' | 'ku') => void;
  onOpenStanLee: () => void;
  isUniverseSnapped: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  soundEnabled,
  setSoundEnabled,
  halftoneEnabled,
  setHalftoneEnabled,
  lang,
  setLang,
  onOpenStanLee,
  isUniverseSnapped,
}) => {
  const navItems = [
    {
      id: 'roster' as const,
      label: lang === 'ku' ? 'پاڵەوانەکان' : 'ROSTER',
      icon: Grid,
      desc: lang === 'ku' ? 'کۆدێکسی کەسایەتییەکان' : 'Hero & Villain Codex'
    },
    {
      id: 'gauntlet' as const,
      label: lang === 'ku' ? 'دەستکێشی ئەبەدیەت' : 'INFINITY GAUNTLET',
      icon: Sparkles,
      desc: lang === 'ku' ? 'بەردەکان و تەقاندنی پەنجە' : '6 Stones & The Snap'
    },
    {
      id: 'arena' as const,
      label: lang === 'ku' ? 'گۆڕەپانی شەڕ' : 'BATTLE ARENA',
      icon: Swords,
      desc: lang === 'ku' ? 'شەڕی پاڵەوانەکان' : 'Multiverse Clash'
    },
    {
      id: 'studio' as const,
      label: lang === 'ku' ? 'دیزاینی کۆمیک' : 'COMIC STUDIO',
      icon: Layers,
      desc: lang === 'ku' ? 'دروستکردنی بەرگی گۆڤار' : 'Issue Cover Maker'
    },
    {
      id: 'timeline' as const,
      label: lang === 'ku' ? 'هێڵی کات' : 'TIMELINE',
      icon: Clock,
      desc: lang === 'ku' ? 'مێژووی کۆمیک و فیلمەکان' : 'MCU & Comic Eras'
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0a0b0e]/95 backdrop-blur-md border-b-4 border-black comic-shadow">
      {/* Top Banner Ribbon */}
      <div className="bg-[#111319] border-b border-zinc-800 text-[11px] px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span className="font-semibold uppercase tracking-wider text-zinc-300">
            {lang === 'ku' ? 'سیستەمی گەردوونی مارڤڵ' : 'MARVEL MULTIVERSE DATABASE'}
          </span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="hidden sm:inline text-zinc-400">
            {isUniverseSnapped 
              ? (lang === 'ku' ? 'ئاگاداری: نیوەی پاڵەوانەکان سڕاونەتەوە!' : 'ALERT: 50% OF POPULATION DUSTED!') 
              : (lang === 'ku' ? 'تەواوی پاڵەوانەکان ئامادەن' : 'ALL REALITIES IN TACT')}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Stan Lee Memorial link */}
          <button
            onClick={() => {
              playSound('click');
              onOpenStanLee();
            }}
            className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-comic text-xs uppercase tracking-wide transition-colors"
          >
            <span>EXCELSIOR!</span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-black border border-zinc-700 p-0.5 text-xs">
            <button
              onClick={() => {
                playSound('click');
                setLang('en');
              }}
              className={`px-2 py-0.5 font-bold transition-colors ${
                lang === 'en' ? 'bg-[#ec1d24] text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => {
                playSound('click');
                setLang('ku');
              }}
              className={`px-2 py-0.5 font-bold transition-colors ${
                lang === 'ku' ? 'bg-[#ec1d24] text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              کوردی
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Marvel Logo */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div 
            onClick={() => {
              playSound('thunder');
              setActiveTab('roster');
            }}
            className="cursor-pointer group flex items-center gap-2"
          >
            {/* Iconic Marvel Red Box */}
            <div className="relative bg-[#ec1d24] px-4 py-1.5 border-2 border-black comic-shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-marvel text-3xl sm:text-4xl text-white tracking-tighter leading-none block">
                MARVEL
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-comic text-sm tracking-wider text-yellow-400 leading-tight">
                {lang === 'ku' ? 'فرەگەردی ڕاستەقینە' : 'UNIVERSE CODEX'}
              </span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest leading-none">
                CHRONICLES & ARENA
              </span>
            </div>
          </div>

          {/* Quick Controls on Mobile */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={() => {
                playSound('click');
                setHalftoneEnabled(!halftoneEnabled);
              }}
              className={`p-2 border border-zinc-700 ${halftoneEnabled ? 'bg-zinc-800 text-yellow-400' : 'bg-black text-zinc-400'}`}
              title="Toggle Comic Halftone Pattern"
              aria-label="Toggle Comic Halftone Pattern"
            >
              <Palette size={16} />
            </button>
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (!soundEnabled) playSound('click');
              }}
              className={`p-2 border border-zinc-700 ${soundEnabled ? 'bg-[#ec1d24] text-white' : 'bg-black text-zinc-500'}`}
              title={soundEnabled ? 'Mute SFX' : 'Enable SFX'}
              aria-label={soundEnabled ? 'Mute SFX' : 'Enable SFX'}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto w-full md:w-auto py-1 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playSound('whoosh');
                  setActiveTab(item.id);
                }}
                className={`relative px-3 sm:px-4 py-2 flex items-center gap-2 border-2 transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#ec1d24] border-black text-white comic-shadow-sm -translate-y-0.5 font-bold'
                    : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-yellow-300' : 'text-zinc-400'} />
                <span className="font-marvel text-base tracking-wide uppercase">
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-yellow-400" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-2">
          {/* Halftone Toggle */}
          <button
            onClick={() => {
              playSound('click');
              setHalftoneEnabled(!halftoneEnabled);
            }}
            className={`px-3 py-1.5 border-2 border-black flex items-center gap-1.5 text-xs font-semibold uppercase transition-all ${
              halftoneEnabled
                ? 'bg-yellow-400 text-black comic-shadow-sm'
                : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-zinc-200'
            }`}
            title="Vintage Halftone Comic Texture"
          >
            <Palette size={14} />
            <span>{lang === 'ku' ? 'فیلتەری کۆمیک' : 'HALFTONE'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if (!soundEnabled) playSound('click');
            }}
            className={`px-3 py-1.5 border-2 border-black flex items-center gap-1.5 text-xs font-semibold uppercase transition-all ${
              soundEnabled
                ? 'bg-[#ec1d24] text-white comic-shadow-sm'
                : 'bg-zinc-900 border-zinc-700 text-zinc-500'
            }`}
            title={soundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
          >
            {soundEnabled ? (
              <>
                <Volume2 size={14} className="text-yellow-300 animate-pulse" />
                <span>{lang === 'ku' ? 'دەنگ: چالاک' : 'SFX: ON'}</span>
              </>
            ) : (
              <>
                <VolumeX size={14} />
                <span>{lang === 'ku' ? 'دەنگ: بێدەنگ' : 'SFX: OFF'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
