import React, { useState } from 'react';
import { Sparkles, RotateCcw, AlertTriangle, Eye, ShieldAlert, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { InfinityStone } from '../types/marvel';
import { playSound } from '../utils/soundEffects';
import { triggerComicSfx } from './ComicSfxBubble';

interface InfinityGauntletProps {
  stones: InfinityStone[];
  lang: 'en' | 'ku';
  dustedIds: string[];
  onTriggerSnap: () => void;
  onRestoreUniverse: () => void;
}

export const InfinityGauntlet: React.FC<InfinityGauntletProps> = ({
  stones,
  lang,
  dustedIds,
  onTriggerSnap,
  onRestoreUniverse
}) => {
  const [selectedStone, setSelectedStone] = useState<InfinityStone | null>(stones[2]); // Default Power stone
  const [activeStoneAura, setActiveStoneAura] = useState<string | null>(null);
  const [isSnapping, setIsSnapping] = useState<boolean>(false);
  const [whiteFlash, setWhiteFlash] = useState<boolean>(false);
  const [screenShake, setScreenShake] = useState<boolean>(false);
  const [showMindThoughts, setShowMindThoughts] = useState<boolean>(false);

  const isSnapped = dustedIds.length > 0;

  const handleStoneClick = (stone: InfinityStone) => {
    playSound(stone.soundKey);
    setSelectedStone(stone);
    setActiveStoneAura(stone.id);

    // Specific VFX per stone
    if (stone.id === 'power') {
      setScreenShake(true);
      setTimeout(() => setScreenShake(false), 550);
      triggerComicSfx('KRAKOOM!', undefined, undefined, '#c084fc');
    } else if (stone.id === 'reality') {
      triggerComicSfx('REALITY WARP!', undefined, undefined, '#f87171');
    } else if (stone.id === 'time') {
      triggerComicSfx('TIME REWIND!', undefined, undefined, '#34d399');
    } else if (stone.id === 'space') {
      triggerComicSfx('PORTAL WARP!', undefined, undefined, '#60a5fa');
    } else if (stone.id === 'mind') {
      setShowMindThoughts(true);
      triggerComicSfx('PSIONIC BLAST!', undefined, undefined, '#facc15');
    } else if (stone.id === 'soul') {
      triggerComicSfx('SOUL COMMUNE!', undefined, undefined, '#fb923c');
    }

    setTimeout(() => {
      setActiveStoneAura(null);
    }, 1800);
  };

  const handleExecuteSnap = () => {
    setIsSnapping(true);
    playSound('snap');
    setWhiteFlash(true);
    setScreenShake(true);

    triggerComicSfx('SNAP!', undefined, undefined, '#ffffff');

    setTimeout(() => {
      setWhiteFlash(false);
      setScreenShake(false);
      setIsSnapping(false);
      onTriggerSnap();
    }, 600);
  };

  const handleExecuteRestore = () => {
    playSound('repulsor');
    playSound('magic');
    triggerComicSfx('RESTORED!', undefined, undefined, '#facc15');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ec1d24', '#f59e0b', '#3b82f6', '#10b981']
    });
    onRestoreUniverse();
  };

  return (
    <div className={`space-y-8 animate-fadeIn ${screenShake ? 'animate-comic-shake' : ''}`}>
      {/* White Cosmic Flash when Snap triggers */}
      {whiteFlash && (
        <div className="fixed inset-0 z-50 bg-white pointer-events-none transition-opacity duration-300" />
      )}

      {/* Main Gauntlet Header */}
      <div className="relative border-4 border-black bg-gradient-to-r from-amber-950/70 via-zinc-900 to-black p-6 md:p-8 comic-shadow">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="bg-yellow-400 text-black font-comic text-xs uppercase px-2.5 py-0.5 border border-black">
                {lang === 'ku' ? 'چەکی گەردوونی' : 'COSMIC RELIC'}
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                Nidavellir Uru Forged
              </span>
            </div>
            <h1 className="font-marvel text-4xl sm:text-5xl md:text-6xl text-white tracking-wide leading-none">
              {lang === 'ku' ? 'دەستکێشی ئەبەدیەت و بەردەکان' : 'THE INFINITY GAUNTLET'}
            </h1>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {lang === 'ku'
                ? 'شەش بەردەکەی ئەبەدیەت کە پاشماوەی شەش تەقینەوەی گەورەی سەرەتای دروستبوونی گەردوونن. دەست لە هەریەکەیان بدە بۆ بینینی هێز و دەنگی گەردوونییان.'
                : 'Formed from six singularities compressed into cosmic ingots. Harness all six stones to wield godlike mastery over Space, Reality, Power, Soul, Mind, and Time.'}
            </p>
          </div>

          {/* Snap Status Badge */}
          <div className="bg-black/90 border-2 border-zinc-800 p-4 shrink-0 text-center sm:text-right">
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
              {lang === 'ku' ? 'دۆخی فرەگەردوون' : 'Multiverse Status'}
            </div>
            {isSnapped ? (
              <div className="flex items-center gap-2 text-red-500 font-comic text-2xl">
                <AlertTriangle size={24} className="animate-bounce" />
                <span>{lang === 'ku' ? 'پەنجە لێدراوە: 50% سڕدراونەتەوە' : 'DECIMATED: 50% DUSTED'}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-emerald-400 font-comic text-2xl">
                <Sparkles size={24} />
                <span>{lang === 'ku' ? 'هاوسەنگ: 100% ژیان ماوە' : 'PRISTINE: 100% ALIVE'}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gauntlet Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: The Visual Gauntlet Device */}
        <div className="lg:col-span-6 border-4 border-black bg-gradient-to-b from-[#15110e] to-black p-6 md:p-8 comic-shadow flex flex-col justify-between relative overflow-hidden">
          {/* Halftone BG */}
          <div className="absolute inset-0 bg-halftone-yellow pointer-events-none opacity-40" />

          {/* Aura Overlay when stone clicked */}
          {activeStoneAura && (
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700 animate-pulse"
              style={{
                background: `radial-gradient(circle at center, ${
                  stones.find((s) => s.id === activeStoneAura)?.glowHex || 'transparent'
                } 0%, transparent 70%)`
              }}
            />
          )}

          <div>
            <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-3 mb-6">
              <span className="font-comic text-xl text-yellow-400">
                {lang === 'ku' ? 'دەستکێشی زێڕین' : 'THE GAUNTLET HARNESS'}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                6 / 6 STONES SLOTTED
              </span>
            </div>

            {/* Visual Gauntlet Representation with Interactive Stone Sockets */}
            <div className="relative mx-auto w-full max-w-sm h-80 sm:h-96 flex items-center justify-center">
              {/* Golden Gauntlet Hand Silhouette SVG */}
              <svg
                viewBox="0 0 320 400"
                className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
              >
                {/* Arm / Wrist Brace */}
                <path
                  d="M100,280 L220,280 L235,390 L85,390 Z"
                  fill="#b45309"
                  stroke="#78350f"
                  strokeWidth="6"
                />
                <path
                  d="M110,300 L210,300 L215,370 L105,370 Z"
                  fill="#d97706"
                  stroke="#451a03"
                  strokeWidth="3"
                />

                {/* Palm Base */}
                <path
                  d="M80,180 C80,160 100,140 160,140 C220,140 240,160 240,180 L230,285 L90,285 Z"
                  fill="#f59e0b"
                  stroke="#78350f"
                  strokeWidth="7"
                />

                {/* Knuckle Sockets Plate */}
                <path
                  d="M75,130 L245,130 L240,165 L80,165 Z"
                  fill="#b45309"
                  stroke="#451a03"
                  strokeWidth="4"
                />

                {/* Fingers */}
                {/* Thumb */}
                <path
                  d="M60,195 C45,180 40,150 55,130 C65,115 80,125 85,150 Z"
                  fill="#d97706"
                  stroke="#78350f"
                  strokeWidth="4"
                />
                {/* Index */}
                <path
                  d="M85,130 L85,60 C85,45 110,45 110,60 L110,130 Z"
                  fill="#d97706"
                  stroke="#78350f"
                  strokeWidth="4"
                />
                {/* Middle (Tallest) */}
                <path
                  d="M125,130 L125,35 C125,20 155,20 155,35 L155,130 Z"
                  fill="#f59e0b"
                  stroke="#78350f"
                  strokeWidth="4"
                />
                {/* Ring */}
                <path
                  d="M170,130 L170,55 C170,40 195,40 195,55 L195,130 Z"
                  fill="#d97706"
                  stroke="#78350f"
                  strokeWidth="4"
                />
                {/* Pinky */}
                <path
                  d="M210,130 L210,80 C210,65 235,65 235,80 L235,130 Z"
                  fill="#b45309"
                  stroke="#78350f"
                  strokeWidth="4"
                />

                {/* Decorative Gauntlet Etchings */}
                <line x1="160" y1="210" x2="160" y2="275" stroke="#78350f" strokeWidth="4" />
                <line x1="120" y1="240" x2="200" y2="240" stroke="#78350f" strokeWidth="3" />
              </svg>

              {/* Interactive Sockets Over the SVG */}
              {/* 1. Mind Stone (Center of Palm) */}
              <button
                onClick={() => handleStoneClick(stones.find((s) => s.id === 'mind')!)}
                style={{
                  top: '52%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 20px ${stones.find((s) => s.id === 'mind')?.glowHex}`
                }}
                className="absolute w-12 h-16 rounded-full bg-yellow-400 border-3 border-black cursor-pointer hover:scale-115 transition-transform flex items-center justify-center animate-stone-glow"
                title="Mind Stone (Yellow)"
              >
                <div className="w-5 h-8 bg-yellow-100 rounded-full blur-[1px]" />
              </button>

              {/* 2. Power Stone (Index knuckle) */}
              <button
                onClick={() => handleStoneClick(stones.find((s) => s.id === 'power')!)}
                style={{
                  top: '32%',
                  left: '31%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 15px ${stones.find((s) => s.id === 'power')?.glowHex}`
                }}
                className="absolute w-8 h-8 rounded-full bg-purple-600 border-2 border-black cursor-pointer hover:scale-125 transition-transform flex items-center justify-center"
                title="Power Stone (Purple)"
              >
                <div className="w-3 h-3 bg-purple-200 rounded-full blur-[0.5px]" />
              </button>

              {/* 3. Space Stone (Middle knuckle) */}
              <button
                onClick={() => handleStoneClick(stones.find((s) => s.id === 'space')!)}
                style={{
                  top: '31%',
                  left: '44%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 15px ${stones.find((s) => s.id === 'space')?.glowHex}`
                }}
                className="absolute w-8 h-8 rounded-full bg-blue-500 border-2 border-black cursor-pointer hover:scale-125 transition-transform flex items-center justify-center"
                title="Space Stone (Blue)"
              >
                <div className="w-3 h-3 bg-blue-100 rounded-full blur-[0.5px]" />
              </button>

              {/* 4. Reality Stone (Ring knuckle) */}
              <button
                onClick={() => handleStoneClick(stones.find((s) => s.id === 'reality')!)}
                style={{
                  top: '32%',
                  left: '57%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 15px ${stones.find((s) => s.id === 'reality')?.glowHex}`
                }}
                className="absolute w-8 h-8 rounded-full bg-red-600 border-2 border-black cursor-pointer hover:scale-125 transition-transform flex items-center justify-center"
                title="Reality Stone (Red)"
              >
                <div className="w-3 h-3 bg-red-200 rounded-full blur-[0.5px]" />
              </button>

              {/* 5. Soul Stone (Pinky knuckle) */}
              <button
                onClick={() => handleStoneClick(stones.find((s) => s.id === 'soul')!)}
                style={{
                  top: '35%',
                  left: '70%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 15px ${stones.find((s) => s.id === 'soul')?.glowHex}`
                }}
                className="absolute w-8 h-8 rounded-full bg-orange-500 border-2 border-black cursor-pointer hover:scale-125 transition-transform flex items-center justify-center"
                title="Soul Stone (Orange)"
              >
                <div className="w-3 h-3 bg-orange-100 rounded-full blur-[0.5px]" />
              </button>

              {/* 6. Time Stone (Thumb knuckle) */}
              <button
                onClick={() => handleStoneClick(stones.find((s) => s.id === 'time')!)}
                style={{
                  top: '42%',
                  left: '18%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 15px ${stones.find((s) => s.id === 'time')?.glowHex}`
                }}
                className="absolute w-8 h-8 rounded-full bg-emerald-500 border-2 border-black cursor-pointer hover:scale-125 transition-transform flex items-center justify-center"
                title="Time Stone (Green)"
              >
                <div className="w-3 h-3 bg-emerald-100 rounded-full blur-[0.5px]" />
              </button>
            </div>
          </div>

          {/* Action Triggers: Snap vs Restore */}
          <div className="pt-6 border-t-2 border-zinc-800 space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {!isSnapped ? (
                <button
                  onClick={handleExecuteSnap}
                  disabled={isSnapping}
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 border-4 border-black comic-shadow font-comic text-2xl tracking-widest text-white uppercase flex items-center justify-center gap-3 transition-transform active:scale-95 cursor-pointer"
                >
                  <Sparkles size={24} />
                  <span>{lang === 'ku' ? 'تەقاندنی پەنجە (THE SNAP)' : 'PERFORM THE SNAP'}</span>
                </button>
              ) : (
                <button
                  onClick={handleExecuteRestore}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-4 border-black comic-shadow font-comic text-2xl tracking-widest text-white uppercase flex items-center justify-center gap-3 transition-transform active:scale-95 cursor-pointer"
                >
                  <RotateCcw size={24} />
                  <span>{lang === 'ku' ? 'گەڕاندنەوەی گەردوون (I AM IRON MAN)' : 'RESTORE THE MULTIVERSE'}</span>
                </button>
              )}
            </div>
            <p className="text-center text-xs text-zinc-400">
              {lang === 'ku'
                ? 'بە تەقاندنی پەنجە، نیوەی پاڵەوانەکانی ناو کۆدێکس دەبنە خۆڵەمێش و لەناو دەچن.'
                : 'Clicking the Snap executes the decimation protocol, turning 50% of the active hero roster to dust.'}
            </p>
          </div>
        </div>

        {/* Right: Selected Stone Inspection & Lore */}
        <div className="lg:col-span-6 space-y-6">
          {/* Stone Selector Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {stones.map((st) => (
              <button
                key={st.id}
                onClick={() => handleStoneClick(st)}
                className={`p-2.5 border-2 text-center transition-all ${
                  selectedStone?.id === st.id
                    ? 'border-black bg-zinc-800 comic-shadow-sm scale-105'
                    : 'border-zinc-800 bg-black/60 hover:border-zinc-600'
                }`}
              >
                <div
                  className="w-5 h-5 mx-auto rounded-full mb-1.5 border border-black shadow-sm"
                  style={{ backgroundColor: st.colorHex }}
                />
                <span className="font-comic text-xs uppercase tracking-wider block text-white">
                  {st.id}
                </span>
              </button>
            ))}
          </div>

          {/* Active Stone Card */}
          {selectedStone && (
            <div className="border-4 border-black bg-[#12141c] p-6 space-y-5 comic-shadow relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: selectedStone.colorHex }}
              />

              <div className="flex items-start justify-between gap-4 border-b-2 border-zinc-800 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ backgroundColor: selectedStone.colorHex }}
                    />
                    <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
                      {lang === 'ku' ? selectedStone.kurdishRelic : selectedStone.relic}
                    </span>
                  </div>
                  <h2 className="font-marvel text-3xl sm:text-4xl text-white">
                    {lang === 'ku' ? selectedStone.kurdishName : selectedStone.name}
                  </h2>
                </div>

                <button
                  onClick={() => handleStoneClick(selectedStone)}
                  className="px-4 py-2 border-2 border-black bg-zinc-900 hover:bg-[#ec1d24] text-yellow-300 hover:text-white font-comic text-sm tracking-wider uppercase transition-colors"
                >
                  {lang === 'ku' ? 'تاقیکردنەوە' : 'TRIGGER SURGE'}
                </button>
              </div>

              {/* Stone Powers */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider font-bold text-zinc-400">
                  {lang === 'ku' ? 'هێز و دەسەڵاتی سەرەکی:' : 'Cosmic Manifestation:'}
                </div>
                <p className="text-sm text-zinc-200 bg-black/60 border-l-4 border-yellow-400 p-3 leading-relaxed">
                  {lang === 'ku' ? selectedStone.kurdishAbility : selectedStone.ability}
                </p>
              </div>

              {/* Ancient Lore */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider font-bold text-zinc-400">
                  {lang === 'ku' ? 'مێژووی دێرینی بەردەکە:' : 'Historical Provenance:'}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/60 p-3 border border-zinc-800">
                  {lang === 'ku' ? selectedStone.kurdishLore : selectedStone.lore}
                </p>
              </div>
            </div>
          )}

          {/* Telepathic Mind Stone Peek if activated */}
          {showMindThoughts && (
            <div className="border-2 border-yellow-500/60 bg-yellow-950/20 p-4 space-y-2 text-xs text-yellow-200 animate-fadeIn">
              <div className="flex items-center justify-between font-bold uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <Eye size={14} className="text-yellow-400" />
                  <span>{lang === 'ku' ? 'بینینی تێلیپاتی مێشک' : 'Mind Stone Psionic Telepathy Stream'}</span>
                </div>
                <button
                  onClick={() => setShowMindThoughts(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  ×
                </button>
              </div>
              <p className="italic">
                {lang === 'ku'
                  ? '"سانۆس بیر لە ڕاگرتنی هاوسەنگی گەردوون دەکاتەوە... تۆنی ستارک لە بیری پاراستنی خێزانەکەیدایە... لۆکی هەست بە هێڵی کات دەکات..."'
                  : '"Interpreting cosmic neural signatures: Tony Stark calculates quantum GPS vectors... Thanos envisions peace in a grateful universe... Wanda whispers chaos hex formulas..."'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
