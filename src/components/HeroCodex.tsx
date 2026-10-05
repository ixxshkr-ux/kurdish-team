import React, { useState } from 'react';
import { Search, Volume2, Shield, Zap, X, Sparkles, UserCheck, Flame, BookOpen, Skull } from 'lucide-react';
import { Character } from '../types/marvel';
import { playSound } from '../utils/soundEffects';
import { triggerComicSfx } from './ComicSfxBubble';

interface HeroCodexProps {
  characters: Character[];
  lang: 'en' | 'ku';
  dustedIds: string[];
  onOpenArenaWithHero?: (hero: Character) => void;
}

export const HeroCodex: React.FC<HeroCodexProps> = ({
  characters,
  lang,
  dustedIds,
  onOpenArenaWithHero
}) => {
  const [search, setSearch] = useState('');
  const [filterAffiliation, setFilterAffiliation] = useState<string>('all');
  const [selectedHero, setSelectedHero] = useState<Character | null>(null);
  const [activeSuitIndex, setActiveSuitIndex] = useState<number>(0);

  const affiliations = [
    { id: 'all', label: lang === 'ku' ? 'هەموو پاڵەوانەکان' : 'All Characters' },
    { id: 'Avengers', label: 'Avengers' },
    { id: 'X-Men', label: 'X-Men' },
    { id: 'Multiverse', label: lang === 'ku' ? 'فرەگەردوون' : 'Multiverse' },
    { id: 'Villains', label: lang === 'ku' ? 'بەدکارەکان' : 'Villains' },
  ];

  const filtered = characters.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.realName.toLowerCase().includes(search.toLowerCase()) ||
      c.kurdishName.toLowerCase().includes(search.toLowerCase());

    const matchesAffiliation =
      filterAffiliation === 'all' || c.affiliation === filterAffiliation;

    return matchesSearch && matchesAffiliation;
  });

  const getPowerTotal = (grid: Character['powerGrid']) => {
    return (
      grid.intelligence +
      grid.strength +
      grid.speed +
      grid.durability +
      grid.energyProjection +
      grid.fightingSkills
    );
  };

  const handleHeroClick = (hero: Character) => {
    playSound(hero.soundType);
    triggerComicSfx(
      hero.soundType === 'repulsor' ? 'BLAST!' :
      hero.soundType === 'shield' ? 'CLANG!' :
      hero.soundType === 'thunder' ? 'KRAKOOM!' :
      hero.soundType === 'thwip' ? 'THWIP!' :
      hero.soundType === 'magic' ? 'ZAP!' : 'SMASH!'
    );
    setSelectedHero(hero);
    setActiveSuitIndex(0);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Showcase Title Section */}
      <div className="relative border-4 border-black bg-gradient-to-r from-red-950/60 via-zinc-900 to-black p-6 md:p-8 comic-shadow">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="bg-[#ec1d24] text-white font-comic text-xs uppercase px-2.5 py-0.5 border border-black">
                {lang === 'ku' ? 'کۆکراوەی سەرەکی' : 'OFFICIAL ARCHIVE'}
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                {lang === 'ku' ? 'ناسنامە، هێز و تواناکان' : 'Classified Hero & Villain Dossiers'}
              </span>
            </div>
            <h1 className="font-marvel text-4xl sm:text-5xl md:text-6xl text-white tracking-wide leading-none">
              {lang === 'ku' ? 'کۆدێکسی پاڵەوانەکانی مارڤڵ' : 'MARVEL MULTIVERSE CODEX'}
            </h1>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {lang === 'ku'
                ? 'ناسنامە، هێزی فەرمی، چەک، زرێ و ڕووداوە مێژووییەکانی پاڵەوان و بەدکارە هەرە مەزنەکانی جیهانی مارڤڵ لە یەک شوێندا بە قەبارەی تەواو و دەنگە تایبەتەکانیانەوە.'
                : 'Explore legendary Avengers, mutants, sorcerers, and titans. Inspect classified power grids, alternate suit variants, signature battle moves, and iconic sound effects.'}
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-4 bg-black/80 border-2 border-zinc-800 p-4 shrink-0">
            <div className="text-center">
              <div className="font-comic text-3xl text-yellow-400 leading-none">
                {characters.length - dustedIds.length}
              </div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider">
                {lang === 'ku' ? 'چالاکەکان' : 'Active Heroes'}
              </div>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div className="text-center">
              <div className="font-comic text-3xl text-red-500 leading-none">
                {dustedIds.length}
              </div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider">
                {lang === 'ku' ? 'سڕاوەکان (پەنجە)' : 'Dusted (Snap)'}
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t-2 border-zinc-800">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={lang === 'ku' ? 'گەڕان بە ناوی پاڵەوان...' : 'Search by hero or civilian name...'}
              className="w-full bg-black/90 border-2 border-zinc-700 pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ec1d24] font-medium"
            />
          </div>

          {/* Affiliation Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {affiliations.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playSound('click');
                  setFilterAffiliation(item.id);
                }}
                className={`px-3.5 py-1.5 border-2 text-xs font-bold uppercase transition-all whitespace-nowrap ${
                  filterAffiliation === item.id
                    ? 'bg-[#ec1d24] border-black text-white comic-shadow-sm'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((hero) => {
          const isDusted = dustedIds.includes(hero.id);
          const totalPower = getPowerTotal(hero.powerGrid);

          return (
            <div
              key={hero.id}
              onClick={() => handleHeroClick(hero)}
              className={`group relative bg-[#12141c] border-4 border-black comic-shadow cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:comic-shadow-red overflow-hidden flex flex-col ${
                isDusted ? 'opacity-40 grayscale pointer-events-auto' : ''
              }`}
            >
              {/* Comic Book Top Strip */}
              <div className="bg-black text-[11px] px-3 py-1 flex items-center justify-between border-b-2 border-black">
                <span className="font-comic text-yellow-400 tracking-wider">
                  MARVEL #{hero.yearDebut}
                </span>
                <span className="text-zinc-400 uppercase font-semibold">
                  {hero.affiliation}
                </span>
              </div>

              {/* Portrait Image Container */}
              <div className="relative h-64 w-full bg-zinc-900 overflow-hidden">
                <img
                  src={hero.portraitUrl}
                  alt={hero.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Halftone Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-90" />

                {/* Dusted Overlay Effect */}
                {isDusted && (
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 text-center">
                    <Skull size={42} className="text-red-500 mb-2 animate-pulse" />
                    <span className="font-comic text-2xl text-red-500 tracking-wider">
                      {lang === 'ku' ? 'تەپوتۆز کرا' : 'DECIMATED'}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {lang === 'ku' ? 'لەلایەن سانۆسەوە سڕایەوە' : 'Turned to cosmic ash by the Snap'}
                    </span>
                  </div>
                )}

                {/* Sound Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playSound(hero.soundType);
                    triggerComicSfx(hero.soundType === 'repulsor' ? 'BLAST!' : 'SMASH!');
                  }}
                  className="absolute top-3 right-3 p-2 bg-black/80 border border-zinc-700 text-yellow-400 hover:bg-[#ec1d24] hover:text-white transition-colors"
                  title="Play Character Sound"
                  aria-label="Play Character Sound"
                >
                  <Volume2 size={16} />
                </button>

                {/* Role Pill */}
                <div className="absolute top-3 left-3 bg-[#ec1d24] text-white font-comic text-xs uppercase px-2 py-0.5 border border-black shadow-sm">
                  {hero.role}
                </div>

                {/* Power Rating Tag */}
                <div className="absolute bottom-2 right-3 bg-black/90 border border-zinc-700 px-2 py-1 text-right">
                  <div className="text-[10px] uppercase text-zinc-400 tracking-wider">Power Index</div>
                  <div className="font-comic text-lg text-yellow-400 leading-none">
                    {totalPower}<span className="text-xs text-zinc-500">/42</span>
                  </div>
                </div>
              </div>

              {/* Character Details Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                    {lang === 'ku' ? hero.kurdishRealName : hero.realName}
                  </div>
                  <h3 className="font-marvel text-2xl md:text-3xl text-white tracking-wide group-hover:text-yellow-400 transition-colors">
                    {lang === 'ku' ? hero.kurdishName : hero.name}
                  </h3>
                </div>

                {/* Comic Quote Snippet */}
                <blockquote className="text-xs italic text-zinc-400 border-l-2 border-[#ec1d24] pl-2.5 py-0.5 line-clamp-2">
                  "{lang === 'ku' ? hero.kurdishQuote : hero.quote}"
                </blockquote>

                {/* Power Grid Micro Visualizer */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-800">
                  <div className="flex justify-between text-[11px] text-zinc-400">
                    <span>{lang === 'ku' ? 'هێز' : 'STR'}</span>
                    <span>{lang === 'ku' ? 'خێرایی' : 'SPD'}</span>
                    <span>{lang === 'ku' ? 'وزە' : 'NRG'}</span>
                    <span>{lang === 'ku' ? 'شەڕ' : 'CMB'}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 h-1.5 bg-black/60 p-0.5 border border-zinc-800">
                    <div
                      className="bg-red-500 h-full"
                      style={{ width: `${(hero.powerGrid.strength / 7) * 100}%` }}
                    />
                    <div
                      className="bg-yellow-400 h-full"
                      style={{ width: `${(hero.powerGrid.speed / 7) * 100}%` }}
                    />
                    <div
                      className="bg-sky-400 h-full"
                      style={{ width: `${(hero.powerGrid.energyProjection / 7) * 100}%` }}
                    />
                    <div
                      className="bg-purple-400 h-full"
                      style={{ width: `${(hero.powerGrid.fightingSkills / 7) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-zinc-300 group-hover:text-white">
                  <span className="uppercase tracking-wider">
                    {lang === 'ku' ? 'بینینی زانیاری تەواو' : 'VIEW DOSSIER'}
                  </span>
                  <span className="text-[#ec1d24] font-comic text-base tracking-widest">
                    →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hero Dossier Modal */}
      {selectedHero && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div
            className="relative w-full max-w-4xl bg-[#0e1017] border-4 border-black comic-shadow text-white my-auto overflow-hidden animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Comic Header Bar */}
            <div className="bg-[#ec1d24] px-6 py-3 border-b-4 border-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="bg-black text-yellow-300 font-comic text-sm px-2 py-0.5 border border-black">
                  CLASSIFIED
                </span>
                <span className="font-marvel text-2xl md:text-3xl text-white tracking-wide">
                  {lang === 'ku' ? selectedHero.kurdishName : selectedHero.name}
                </span>
              </div>
              <button
                onClick={() => {
                  playSound('click');
                  setSelectedHero(null);
                }}
                className="p-1 hover:bg-black/40 transition-colors text-white"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto space-y-8 bg-halftone">
              {/* Top Split: Image + Lore & Debut */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Left: Portrait & Suit Variants */}
                <div className="md:col-span-5 space-y-4">
                  <div className="relative border-4 border-black comic-shadow-red overflow-hidden bg-black h-80 sm:h-96">
                    <img
                      src={
                        selectedHero.suits[activeSuitIndex]?.imageUrl ||
                        selectedHero.portraitUrl
                      }
                      alt={selectedHero.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                      <div className="font-comic text-xl text-yellow-300">
                        {lang === 'ku'
                          ? selectedHero.suits[activeSuitIndex]?.kurdishName || selectedHero.name
                          : selectedHero.suits[activeSuitIndex]?.name || selectedHero.name}
                      </div>
                      <p className="text-xs text-zinc-300 line-clamp-2">
                        {lang === 'ku'
                          ? selectedHero.suits[activeSuitIndex]?.kurdishDescription
                          : selectedHero.suits[activeSuitIndex]?.description}
                      </p>
                    </div>
                  </div>

                  {/* Suit Switcher Tabs if multiple suits exist */}
                  {selectedHero.suits.length > 1 && (
                    <div className="space-y-2">
                      <div className="text-[11px] uppercase tracking-wider font-bold text-zinc-400">
                        {lang === 'ku' ? 'گۆڕینی زرێ و جلوبەرگ:' : 'Armor & Variant Selection:'}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedHero.suits.map((suit, idx) => (
                          <button
                            key={suit.id}
                            onClick={() => {
                              playSound('repulsor');
                              setActiveSuitIndex(idx);
                            }}
                            className={`p-2 border-2 text-xs text-left transition-all ${
                              activeSuitIndex === idx
                                ? 'bg-[#ec1d24] border-black text-white font-bold comic-shadow-sm'
                                : 'bg-black/70 border-zinc-700 text-zinc-400 hover:text-white'
                            }`}
                          >
                            <div className="font-marvel text-sm leading-tight">
                              {lang === 'ku' ? suit.kurdishName : suit.name}
                            </div>
                            <div className="text-[10px] text-zinc-300 opacity-80">
                              {suit.year}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Play Sound Button */}
                  <button
                    onClick={() => {
                      playSound(selectedHero.soundType);
                      triggerComicSfx(
                        selectedHero.soundType === 'repulsor' ? 'BLAST!' :
                        selectedHero.soundType === 'shield' ? 'CLANG!' :
                        selectedHero.soundType === 'thunder' ? 'KRAKOOM!' :
                        selectedHero.soundType === 'thwip' ? 'THWIP!' :
                        selectedHero.soundType === 'magic' ? 'ZAP!' : 'SMASH!'
                      );
                    }}
                    className="w-full py-2.5 bg-black border-2 border-zinc-700 hover:border-[#ec1d24] text-yellow-400 hover:text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold transition-all"
                  >
                    <Volume2 size={16} />
                    <span>{lang === 'ku' ? 'لێدانی دەنگی تایبەت' : 'Trigger Hero Sound Blast'}</span>
                  </button>
                </div>

                {/* Right: Bio, Official Marvel Power Grid, Gear */}
                <div className="md:col-span-7 space-y-6">
                  {/* Identity & Comic Metadata */}
                  <div className="space-y-2 border-b-2 border-zinc-800 pb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-[#ec1d24] text-white font-comic text-xs uppercase px-2 py-0.5 border border-black">
                        {selectedHero.role}
                      </span>
                      <span className="bg-zinc-800 text-zinc-300 text-xs px-2 py-0.5 border border-zinc-700 font-semibold">
                        {selectedHero.affiliation}
                      </span>
                      <span className="text-xs text-zinc-400">
                        Debut: <strong className="text-white">{selectedHero.comicDebut} ({selectedHero.yearDebut})</strong>
                      </span>
                    </div>

                    <h2 className="font-marvel text-3xl sm:text-4xl text-white">
                      {lang === 'ku' ? selectedHero.kurdishRealName : selectedHero.realName}
                    </h2>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {lang === 'ku' ? selectedHero.kurdishBio : selectedHero.bio}
                    </p>
                  </div>

                  {/* Iconic Quote */}
                  <div className="bg-black/60 border-l-4 border-yellow-400 p-3">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block mb-1">
                      {lang === 'ku' ? 'وتەی ناسراو' : 'SIGNATURE QUOTE'}
                    </span>
                    <blockquote className="font-comic text-xl text-yellow-300 tracking-wide">
                      "{lang === 'ku' ? selectedHero.kurdishQuote : selectedHero.quote}"
                    </blockquote>
                  </div>

                  {/* Official Marvel 6-Point Power Grid */}
                  <div className="space-y-3 bg-black/80 border-2 border-zinc-800 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap size={16} className="text-yellow-400" />
                        <span className="font-marvel text-lg uppercase tracking-wider text-white">
                          {lang === 'ku' ? 'هێڵکاری فەرمی هێز (Marvel Power Grid)' : 'OFFICIAL MARVEL POWER GRID'}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-400 font-mono">SCALE 1–7</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-2">
                      {[
                        { label: lang === 'ku' ? 'زیرەکی (Intelligence)' : 'Intelligence', val: selectedHero.powerGrid.intelligence, color: 'bg-blue-500' },
                        { label: lang === 'ku' ? 'هێزی ماسولکە (Strength)' : 'Strength', val: selectedHero.powerGrid.strength, color: 'bg-red-500' },
                        { label: lang === 'ku' ? 'خێرایی (Speed)' : 'Speed', val: selectedHero.powerGrid.speed, color: 'bg-yellow-400' },
                        { label: lang === 'ku' ? 'خۆڕاگری (Durability)' : 'Durability', val: selectedHero.powerGrid.durability, color: 'bg-emerald-500' },
                        { label: lang === 'ku' ? 'دەرپەڕاندنی وزە (Energy)' : 'Energy Projection', val: selectedHero.powerGrid.energyProjection, color: 'bg-purple-500' },
                        { label: lang === 'ku' ? 'لێهاتوویی شەڕ (Fighting)' : 'Fighting Skills', val: selectedHero.powerGrid.fightingSkills, color: 'bg-orange-500' },
                      ].map((stat, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-zinc-300 font-medium">{stat.label}</span>
                            <span className="font-mono font-bold text-white">{stat.val}/7</span>
                          </div>
                          <div className="h-2 bg-zinc-800 border border-zinc-700 overflow-hidden flex">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                              <div
                                key={num}
                                className={`flex-1 border-r border-black/40 ${
                                  num <= stat.val ? stat.color : 'bg-transparent'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Powers & Signature Moves */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-zinc-800 bg-black/40 p-3 space-y-2">
                      <div className="text-xs uppercase tracking-wider font-bold text-yellow-400 flex items-center gap-1.5">
                        <Sparkles size={14} />
                        <span>{lang === 'ku' ? 'تواناکان' : 'Powers & Abilities'}</span>
                      </div>
                      <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                        {(lang === 'ku' ? selectedHero.kurdishPowers : selectedHero.powers).map((p, i) => (
                          <li key={i} className="leading-snug">{p}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="border border-zinc-800 bg-black/40 p-3 space-y-2">
                      <div className="text-xs uppercase tracking-wider font-bold text-red-400 flex items-center gap-1.5">
                        <Flame size={14} />
                        <span>{lang === 'ku' ? 'جووڵەی کوشندە' : 'Signature Attacks'}</span>
                      </div>
                      <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                        {(lang === 'ku' ? selectedHero.kurdishSignatureMoves : selectedHero.signatureMoves).map((m, i) => (
                          <li key={i} className="leading-snug">{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Arena Action CTA */}
                  {onOpenArenaWithHero && (
                    <button
                      onClick={() => {
                        onOpenArenaWithHero(selectedHero);
                        setSelectedHero(null);
                      }}
                      className="w-full py-3 bg-[#ec1d24] hover:bg-[#b9151b] border-2 border-black comic-shadow-sm font-comic text-xl uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-all"
                    >
                      <Shield size={20} />
                      <span>{lang === 'ku' ? 'ناردنی ئەم پاڵەوانە بۆ گۆڕەپانی شەڕ' : 'Deploy This Hero to Battle Arena'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
