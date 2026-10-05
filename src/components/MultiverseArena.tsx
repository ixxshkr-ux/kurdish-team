import React, { useState } from 'react';
import { Swords, RotateCcw, Trophy, Zap, Shield, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Character, ArenaLocation, BattleRound } from '../types/marvel';
import { playSound } from '../utils/soundEffects';
import { triggerComicSfx } from './ComicSfxBubble';

interface MultiverseArenaProps {
  characters: Character[];
  arenas: ArenaLocation[];
  lang: 'en' | 'ku';
  preselectedHero?: Character | null;
}

export const MultiverseArena: React.FC<MultiverseArenaProps> = ({
  characters,
  arenas,
  lang,
  preselectedHero
}) => {
  const [fighter1, setFighter1] = useState<Character>(
    preselectedHero || characters[0] // Iron Man
  );
  const [fighter2, setFighter2] = useState<Character>(
    characters.find((c) => c.id === 'thanos') || characters[1] // Thanos or Spidey
  );
  const [selectedArena, setSelectedArena] = useState<ArenaLocation>(arenas[0]);

  const [inBattle, setInBattle] = useState<boolean>(false);
  const [battleRounds, setBattleRounds] = useState<BattleRound[]>([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [f1Health, setF1Health] = useState<number>(100);
  const [f2Health, setF2Health] = useState<number>(100);
  const [winner, setWinner] = useState<Character | null>(null);

  const startBattleSimulation = () => {
    playSound('thunder');
    triggerComicSfx('CLASH!', undefined, undefined, '#ec1d24');
    setInBattle(true);
    setBattleRounds([]);
    setCurrentRoundIndex(0);
    setF1Health(100);
    setF2Health(100);
    setWinner(null);

    // Simulate 4-6 dynamic tactical rounds
    const rounds: BattleRound[] = [];
    let h1 = 100;
    let h2 = 100;
    let roundNum = 1;

    // Arena modifiers
    let f1Bonus = 1.0;
    let f2Bonus = 1.0;
    if (selectedArena.id === 'avengers-ruins') {
      if (fighter1.affiliation === 'Avengers' || fighter1.id === 'thanos') f1Bonus += 0.15;
      if (fighter2.affiliation === 'Avengers' || fighter2.id === 'thanos') f2Bonus += 0.15;
    } else if (selectedArena.id === 'bifrost-asgard') {
      if (fighter1.id === 'thor' || fighter1.id === 'loki') f1Bonus += 0.25;
      if (fighter2.id === 'thor' || fighter2.id === 'loki') f2Bonus += 0.25;
    } else if (selectedArena.id === 'mirror-dimension') {
      if (fighter1.id === 'doctor-strange' || fighter1.id === 'scarlet-witch') f1Bonus += 0.3;
      if (fighter2.id === 'doctor-strange' || fighter2.id === 'scarlet-witch') f2Bonus += 0.3;
    }

    const comicWords = ['BAM!', 'POW!', 'KRAKOOM!', 'THWIP!', 'SMASH!', 'ZAP!', 'CLANG!'];

    while (h1 > 0 && h2 > 0 && roundNum <= 7) {
      const isF1Attacker = roundNum % 2 !== 0;
      const attacker = isF1Attacker ? fighter1 : fighter2;
      const defender = isF1Attacker ? fighter2 : fighter1;
      const bonus = isF1Attacker ? f1Bonus : f2Bonus;

      // Calculate damage based on Power Grid
      const baseDamage =
        attacker.powerGrid.strength * 3.5 +
        attacker.powerGrid.energyProjection * 3.0 +
        attacker.powerGrid.fightingSkills * 2.0;

      const defenseReduction = defender.powerGrid.durability * 2.2;
      const isCrit = Math.random() < 0.28;
      const critMultiplier = isCrit ? 1.6 : 1.0;

      let damage = Math.round(
        Math.max(12, (baseDamage * bonus - defenseReduction) * critMultiplier * (0.8 + Math.random() * 0.4))
      );

      // Random move from attacker's signature moves
      const moveIdx = Math.floor(Math.random() * attacker.signatureMoves.length);
      const moveName = attacker.signatureMoves[moveIdx];
      const kurdishMoveName = attacker.kurdishSignatureMoves[moveIdx] || moveName;

      let remaining = 0;
      if (isF1Attacker) {
        h2 = Math.max(0, h2 - damage);
        remaining = h2;
      } else {
        h1 = Math.max(0, h1 - damage);
        remaining = h1;
      }

      const comicWord = comicWords[Math.floor(Math.random() * comicWords.length)];

      rounds.push({
        round: roundNum,
        attacker,
        defender,
        moveName,
        kurdishMoveName,
        damage,
        isCrit,
        soundSfx: attacker.soundType,
        comicWord,
        dialogue: isCrit ? attacker.quote : `${attacker.name} strikes with ${moveName}!`,
        kurdishDialogue: isCrit ? attacker.kurdishQuote : `${attacker.kurdishName} هێرش دەکات بە ${kurdishMoveName}!`,
        defenderHealthRemaining: remaining
      });

      roundNum++;
    }

    // Playback loop with intervals
    rounds.forEach((round, idx) => {
      setTimeout(() => {
        setCurrentRoundIndex(idx);
        playSound(round.soundSfx);
        triggerComicSfx(round.comicWord, undefined, undefined, round.isCrit ? '#ef4444' : '#facc15');

        if (round.attacker.id === fighter1.id) {
          setF2Health(round.defenderHealthRemaining);
        } else {
          setF1Health(round.defenderHealthRemaining);
        }

        // Final round
        if (idx === rounds.length - 1) {
          const victor = h1 > h2 ? fighter1 : fighter2;
          setWinner(victor);
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.5 },
            colors: ['#ec1d24', '#f59e0b', '#ffffff']
          });
        }
      }, (idx + 1) * 1100);
    });

    setBattleRounds(rounds);
  };

  const handleRandomize = () => {
    playSound('whoosh');
    const random1 = characters[Math.floor(Math.random() * characters.length)];
    let random2 = characters[Math.floor(Math.random() * characters.length)];
    while (random2.id === random1.id) {
      random2 = characters[Math.floor(Math.random() * characters.length)];
    }
    setFighter1(random1);
    setFighter2(random2);
    setInBattle(false);
    setF1Health(100);
    setF2Health(100);
    setWinner(null);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="relative border-4 border-black bg-gradient-to-r from-red-950/70 via-zinc-900 to-black p-6 md:p-8 comic-shadow">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="bg-[#ec1d24] text-white font-comic text-xs uppercase px-2.5 py-0.5 border border-black">
                {lang === 'ku' ? 'گۆڕەپانی فرەگەردوون' : 'COMBAT SIMULATOR'}
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                Multiverse Matchmaker
              </span>
            </div>
            <h1 className="font-marvel text-4xl sm:text-5xl md:text-6xl text-white tracking-wide leading-none">
              {lang === 'ku' ? 'گۆڕەپانی پێکدادانی پاڵەوانەکان' : 'MULTIVERSE CLASH ARENA'}
            </h1>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {lang === 'ku'
                ? 'دوو پاڵەوان یان بەدکار هەڵبژێرە، گۆڕەپانی شەڕ دیاری بکە، و تەماشای شەڕە ئەفسانەییەکەیان بکە بە کاریگەری دەنگ و لێدانی کوشندەوە!'
                : 'Select two contenders from across dimensions, designate a volatile battlefield, and simulate a canonical tactical clash driven by official Marvel power ratings.'}
            </p>
          </div>

          <button
            onClick={handleRandomize}
            className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-700 hover:border-yellow-400 text-yellow-300 font-comic text-sm tracking-wider uppercase flex items-center gap-2 transition-colors shrink-0"
          >
            <RotateCcw size={16} />
            <span>{lang === 'ku' ? 'هەڵبژاردنی بەڕێکەوت' : 'Randomize Match'}</span>
          </button>
        </div>
      </div>

      {/* Arena Stage */}
      <div className="border-4 border-black bg-[#0d0f15] p-6 md:p-8 comic-shadow space-y-8">
        {/* Arena Location Picker */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase font-bold text-zinc-400 tracking-wider">
            <MapPin size={14} className="text-[#ec1d24]" />
            <span>{lang === 'ku' ? 'گۆڕەپانی شەڕ دیاریبکە:' : 'Select Battle Realm:'}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {arenas.map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  playSound('click');
                  setSelectedArena(loc);
                }}
                disabled={inBattle && !winner}
                className={`p-3 border-2 text-left transition-all relative overflow-hidden ${
                  selectedArena.id === loc.id
                    ? 'border-[#ec1d24] bg-zinc-900 comic-shadow-sm scale-102'
                    : 'border-zinc-800 bg-black/60 hover:border-zinc-700 opacity-80'
                }`}
              >
                <div className="font-marvel text-base text-white leading-tight">
                  {lang === 'ku' ? loc.kurdishName : loc.name}
                </div>
                <div className="text-[10px] text-yellow-400 mt-1 line-clamp-1">
                  {lang === 'ku' ? loc.kurdishEffect : loc.effect}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* The Two Combatants Versus Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Fighter 1 */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-comic text-xs uppercase text-zinc-400 tracking-wider">
                CONTENDER 1
              </span>
              {/* Contender selector dropdown */}
              <select
                value={fighter1.id}
                onChange={(e) => {
                  const found = characters.find((c) => c.id === e.target.value);
                  if (found) {
                    setFighter1(found);
                    playSound(found.soundType);
                  }
                }}
                disabled={inBattle && !winner}
                className="bg-black border border-zinc-700 text-xs text-white px-2 py-1 focus:outline-none focus:border-[#ec1d24]"
              >
                {characters.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Fighter Card */}
            <div className="relative border-4 border-black comic-shadow-red overflow-hidden bg-black h-72">
              <img
                src={fighter1.portraitUrl}
                alt={fighter1.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end">
                <span className="font-marvel text-3xl text-white">
                  {lang === 'ku' ? fighter1.kurdishName : fighter1.name}
                </span>
                <span className="text-xs text-zinc-300">
                  {lang === 'ku' ? fighter1.kurdishRealName : fighter1.realName}
                </span>
              </div>
            </div>

            {/* Health Meter */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-zinc-400">HEALTH</span>
                <span className={f1Health > 30 ? 'text-emerald-400' : 'text-red-500'}>
                  {f1Health}%
                </span>
              </div>
              <div className="h-4 bg-black border-2 border-zinc-800 p-0.5">
                <div
                  className={`h-full transition-all duration-500 ${
                    f1Health > 50 ? 'bg-emerald-500' : f1Health > 25 ? 'bg-yellow-400' : 'bg-red-600'
                  }`}
                  style={{ width: `${f1Health}%` }}
                />
              </div>
            </div>
          </div>

          {/* Versus Center Badge */}
          <div className="md:col-span-2 text-center py-4 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-[#ec1d24] border-4 border-black flex items-center justify-center font-comic text-2xl text-yellow-300 comic-shadow animate-pulse">
                VS
              </div>
            </div>

            {/* Launch Fight Button */}
            {!inBattle || winner ? (
              <button
                onClick={startBattleSimulation}
                className="mt-6 px-6 py-3.5 bg-[#ec1d24] hover:bg-[#b9151b] border-4 border-black comic-shadow text-white font-comic text-xl uppercase tracking-wider transition-transform active:scale-95 cursor-pointer w-full"
              >
                {winner ? (lang === 'ku' ? 'شەڕی دووبارە' : 'REMATCH') : (lang === 'ku' ? 'دەستپێکردنی شەڕ' : 'ENGAGE!')}
              </button>
            ) : (
              <div className="mt-6 font-comic text-lg text-yellow-400 animate-pulse uppercase">
                {lang === 'ku' ? 'شەڕ بەردەوامە...' : 'BATTLE IN PROGRESS...'}
              </div>
            )}
          </div>

          {/* Fighter 2 */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-comic text-xs uppercase text-zinc-400 tracking-wider">
                CONTENDER 2
              </span>
              <select
                value={fighter2.id}
                onChange={(e) => {
                  const found = characters.find((c) => c.id === e.target.value);
                  if (found) {
                    setFighter2(found);
                    playSound(found.soundType);
                  }
                }}
                disabled={inBattle && !winner}
                className="bg-black border border-zinc-700 text-xs text-white px-2 py-1 focus:outline-none focus:border-[#ec1d24]"
              >
                {characters.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Fighter Card */}
            <div className="relative border-4 border-black comic-shadow-gold overflow-hidden bg-black h-72">
              <img
                src={fighter2.portraitUrl}
                alt={fighter2.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end">
                <span className="font-marvel text-3xl text-white">
                  {lang === 'ku' ? fighter2.kurdishName : fighter2.name}
                </span>
                <span className="text-xs text-zinc-300">
                  {lang === 'ku' ? fighter2.kurdishRealName : fighter2.realName}
                </span>
              </div>
            </div>

            {/* Health Meter */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-zinc-400">HEALTH</span>
                <span className={f2Health > 30 ? 'text-emerald-400' : 'text-red-500'}>
                  {f2Health}%
                </span>
              </div>
              <div className="h-4 bg-black border-2 border-zinc-800 p-0.5">
                <div
                  className={`h-full transition-all duration-500 ${
                    f2Health > 50 ? 'bg-emerald-500' : f2Health > 25 ? 'bg-yellow-400' : 'bg-red-600'
                  }`}
                  style={{ width: `${f2Health}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Turn-by-turn Comic Combat Logs */}
        {battleRounds.length > 0 && (
          <div className="space-y-4 pt-6 border-t-2 border-zinc-800">
            <div className="flex items-center justify-between">
              <span className="font-comic text-xl text-yellow-400 tracking-wider">
                {lang === 'ku' ? 'تۆماری شەڕ و هێرشەکان' : 'ROUND-BY-ROUND COMBAT CHRONICLE'}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                ROUND {Math.min(currentRoundIndex + 1, battleRounds.length)} / {battleRounds.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {battleRounds.slice(0, currentRoundIndex + 1).map((round, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 border-2 border-black bg-zinc-900/90 comic-shadow-sm space-y-2 animate-fadeIn relative ${
                    round.isCrit ? 'border-red-500 bg-red-950/30' : ''
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-comic text-yellow-300">
                      ROUND {round.round}
                    </span>
                    <span className="bg-[#ec1d24] text-white font-comic px-1.5 py-0.2 border border-black">
                      -{round.damage} HP
                    </span>
                  </div>

                  <div className="text-xs text-zinc-200">
                    <strong className="text-white font-marvel text-base block">
                      {lang === 'ku' ? round.attacker.kurdishName : round.attacker.name}
                    </strong>
                    <span className="text-zinc-400">
                      {lang === 'ku' ? round.kurdishDialogue : round.dialogue}
                    </span>
                  </div>

                  {round.isCrit && (
                    <div className="inline-block bg-yellow-400 text-black font-comic text-[11px] px-1.5 py-0.5 border border-black uppercase">
                      CRITICAL IMPACT!
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Victor Newspaper Frontpage */}
        {winner && (
          <div className="border-4 border-black bg-amber-50 text-black p-6 md:p-8 comic-shadow animate-fadeIn space-y-4">
            <div className="border-b-4 border-black pb-2 text-center">
              <div className="font-comic text-4xl sm:text-5xl tracking-widest text-[#ec1d24]">
                THE DAILY BUGLE
              </div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-zinc-800 border-t border-b border-black py-1 my-1">
                <span>NEW YORK EDITION</span>
                <span>MULTIVERSE BATTLE BULLETIN</span>
                <span>PRICE: 10¢</span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <h2 className="font-marvel text-4xl sm:text-6xl text-black tracking-wide leading-none uppercase">
                {lang === 'ku'
                  ? `${winner.kurdishName} سەرکەوتنی بەدەستهێنا!`
                  : `${winner.name} STANDS VICTORIOUS!`}
              </h2>
              <p className="text-sm md:text-base text-zinc-700 max-w-xl mx-auto italic">
                "{lang === 'ku' ? winner.kurdishQuote : winner.quote}"
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <div className="inline-flex items-center gap-2 bg-[#ec1d24] text-white font-comic text-lg px-6 py-2 border-2 border-black comic-shadow-sm">
                <Trophy size={20} className="text-yellow-300" />
                <span>CHAMPION OF {selectedArena.name.toUpperCase()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
