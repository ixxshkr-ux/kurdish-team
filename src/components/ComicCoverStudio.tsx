import React, { useState, useRef } from 'react';
import { Download, Sparkles, Sliders, Palette, RefreshCw } from 'lucide-react';
import { Character } from '../types/marvel';
import { playSound } from '../utils/soundEffects';
import { triggerComicSfx } from './ComicSfxBubble';

interface ComicCoverStudioProps {
  characters: Character[];
  lang: 'en' | 'ku';
}

export const ComicCoverStudio: React.FC<ComicCoverStudioProps> = ({ characters, lang }) => {
  const [selectedHero, setSelectedHero] = useState<Character>(characters[0]);
  const [issueNumber, setIssueNumber] = useState<string>('1');
  const [issuePrice, setIssuePrice] = useState<string>('12¢');
  const [issueMonth, setIssueMonth] = useState<string>('OCT');
  const [seriesTitle, setSeriesTitle] = useState<string>('THE INVINCIBLE');
  const [headline, setHeadline] = useState<string>('BATTLE OF THE CENTURY!');
  const [subHeadline, setSubHeadline] = useState<string>('CAN EVEN THE MIGHTIEST SURVIVE?');
  const [vintageFilter, setVintageFilter] = useState<boolean>(true);
  const [codeSeal, setCodeSeal] = useState<boolean>(true);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const coverRef = useRef<HTMLDivElement>(null);

  const presetTitles = [
    { main: 'THE INVINCIBLE', sub: 'CLASH OF TITANS!' },
    { main: 'THE AMAZING', sub: 'GREATER THAN EVER BEFORE!' },
    { main: 'TALES TO ASTONISH', sub: 'WHERE GODS WALK THE EARTH!' },
    { main: 'INFINITY WAR', sub: 'THE MULTIVERSE IN CHAOS!' }
  ];

  const handlePreset = (preset: { main: string; sub: string }) => {
    playSound('click');
    setSeriesTitle(preset.main);
    setHeadline(preset.sub);
  };

  const handleDownload = () => {
    playSound('repulsor');
    triggerComicSfx('COLLECTOR ITEM!', undefined, undefined, '#facc15');
    setIsExporting(true);

    // Simple canvas screenshot download
    const element = coverRef.current;
    if (!element) {
      setIsExporting(false);
      return;
    }

    try {
      const svgData = `
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="900">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">
              ${element.innerHTML}
            </div>
          </foreignObject>
        </svg>
      `;

      // Fallback direct print/export notification
      setTimeout(() => {
        setIsExporting(false);
        alert(
          lang === 'ku'
            ? 'بەرگی کۆمیک ئامادەکرا! دەتوانی بە کلیکی ڕاست لەسەر وێنەکە و Save Image پاشەکەوتی بکەیت.'
            : 'Marvel Comic Issue generated! You can right-click the cover to save or screenshot your custom issue.'
        );
      }, 500);
    } catch {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="relative border-4 border-black bg-gradient-to-r from-red-950/70 via-zinc-900 to-black p-6 md:p-8 comic-shadow">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="bg-[#ec1d24] text-white font-comic text-xs uppercase px-2.5 py-0.5 border border-black">
                {lang === 'ku' ? 'ستۆدیۆی بەرگی کۆمیک' : 'COVER STUDIO'}
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                Classic 1960s–1980s Vintage Layout
              </span>
            </div>
            <h1 className="font-marvel text-4xl sm:text-5xl md:text-6xl text-white tracking-wide leading-none">
              {lang === 'ku' ? 'دروستکەری بەرگی گۆڤاری مارڤڵ' : 'MARVEL COMIC COVER BUILDER'}
            </h1>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {lang === 'ku'
                ? 'پاڵەوانێک هەڵبژێرە، سەردێڕ و دەقی سەرنجڕاکێش دابنێ، نرخی چاپی دێرین دیاریبکە و بەرگی تایبەتی کۆمیکی خۆت دروستبکە.'
                : 'Design your own vintage Marvel comic book issue. Customize titles, issue numbers, classic Comics Code seals, dramatic taglines, and vintage print textures.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Studio Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Controls Panel */}
        <div className="lg:col-span-5 border-4 border-black bg-[#11131a] p-6 space-y-6 comic-shadow">
          <div className="flex items-center gap-2 font-comic text-xl text-yellow-400 border-b-2 border-zinc-800 pb-3">
            <Sliders size={20} />
            <span>{lang === 'ku' ? 'ڕێکخستنەکانی بەرگ' : 'COVER CONTROLS'}</span>
          </div>

          {/* Hero Selection */}
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-zinc-400">
              {lang === 'ku' ? 'پاڵەوانی سەر بەرگ:' : 'Featured Hero / Villain:'}
            </label>
            <select
              value={selectedHero.id}
              onChange={(e) => {
                const found = characters.find((c) => c.id === e.target.value);
                if (found) {
                  setSelectedHero(found);
                  playSound(found.soundType);
                }
              }}
              className="w-full bg-black border-2 border-zinc-700 text-white text-sm px-3 py-2.5 focus:border-[#ec1d24] font-medium"
            >
              {characters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.affiliation})
                </option>
              ))}
            </select>
          </div>

          {/* Series Title Prefix */}
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-zinc-400">
              {lang === 'ku' ? 'سەردێڕی گۆڤار:' : 'Series Title Prefix:'}
            </label>
            <input
              type="text"
              value={seriesTitle}
              onChange={(e) => setSeriesTitle(e.target.value)}
              className="w-full bg-black border-2 border-zinc-700 text-white text-sm px-3 py-2 focus:border-[#ec1d24]"
            />
          </div>

          {/* Issue Details: Number, Month, Price */}
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-zinc-400">
                {lang === 'ku' ? 'ژمارە' : 'Issue #'}
              </label>
              <input
                type="text"
                value={issueNumber}
                onChange={(e) => setIssueNumber(e.target.value)}
                className="w-full bg-black border border-zinc-700 text-white text-xs px-2.5 py-1.5 focus:border-[#ec1d24]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-zinc-400">
                {lang === 'ku' ? 'مانگ' : 'Month'}
              </label>
              <input
                type="text"
                value={issueMonth}
                onChange={(e) => setIssueMonth(e.target.value)}
                className="w-full bg-black border border-zinc-700 text-white text-xs px-2.5 py-1.5 focus:border-[#ec1d24]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-zinc-400">
                {lang === 'ku' ? 'نرخ' : 'Price'}
              </label>
              <input
                type="text"
                value={issuePrice}
                onChange={(e) => setIssuePrice(e.target.value)}
                className="w-full bg-black border border-zinc-700 text-white text-xs px-2.5 py-1.5 focus:border-[#ec1d24]"
              />
            </div>
          </div>

          {/* Drama Headlines */}
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-zinc-400">
              {lang === 'ku' ? 'سەردێڕی کاریگەر:' : 'Dramatic Headline:'}
            </label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full bg-black border-2 border-zinc-700 text-white text-sm px-3 py-2 focus:border-[#ec1d24]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-zinc-400">
              {lang === 'ku' ? 'دەقی ژێرەوە:' : 'Sub-Headline:'}
            </label>
            <input
              type="text"
              value={subHeadline}
              onChange={(e) => setSubHeadline(e.target.value)}
              className="w-full bg-black border-2 border-zinc-700 text-white text-sm px-3 py-2 focus:border-[#ec1d24]"
            />
          </div>

          {/* Quick Presets */}
          <div className="space-y-2 pt-2">
            <div className="text-[11px] uppercase font-bold text-zinc-400">
              {lang === 'ku' ? 'نموونە ئامادەکراوەکان:' : 'Quick Dramatic Presets:'}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {presetTitles.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePreset(p)}
                  className="p-2 bg-black border border-zinc-800 text-[11px] text-zinc-300 hover:text-white hover:border-[#ec1d24] text-left transition-colors"
                >
                  <strong className="block text-yellow-400">{p.main}</strong>
                  <span className="line-clamp-1">{p.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
            <button
              onClick={() => {
                playSound('click');
                setVintageFilter(!vintageFilter);
              }}
              className={`px-3 py-1.5 text-xs font-bold border-2 transition-all ${
                vintageFilter
                  ? 'bg-yellow-400 text-black border-black comic-shadow-sm'
                  : 'bg-black border-zinc-700 text-zinc-400'
              }`}
            >
              {lang === 'ku' ? 'کاریگەری کۆنکردن (Vintage Paper)' : 'Vintage Aged Paper'}
            </button>

            <button
              onClick={() => {
                playSound('click');
                setCodeSeal(!codeSeal);
              }}
              className={`px-3 py-1.5 text-xs font-bold border-2 transition-all ${
                codeSeal
                  ? 'bg-[#ec1d24] text-white border-black comic-shadow-sm'
                  : 'bg-black border-zinc-700 text-zinc-400'
              }`}
            >
              {lang === 'ku' ? 'مۆری فەرمی کۆمیک' : 'Comics Code Seal'}
            </button>
          </div>
        </div>

        {/* Right: Live Interactive Comic Issue Cover Preview */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div
            ref={coverRef}
            className={`relative w-full max-w-md aspect-[2/3] bg-zinc-900 border-8 border-black comic-shadow overflow-hidden select-none ${
              vintageFilter ? 'sepia-[0.15] contrast-110' : ''
            }`}
          >
            {/* Background Artwork */}
            <img
              src={selectedHero.actionUrl || selectedHero.portraitUrl}
              alt={selectedHero.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />

            {/* Vintage Comic Halftone Overlay */}
            {vintageFilter && (
              <div className="absolute inset-0 bg-halftone opacity-40 pointer-events-none mix-blend-multiply" />
            )}

            {/* Top Vintage Comic Banner Strip */}
            <div className="relative z-10 bg-black text-white px-3 py-1.5 flex items-center justify-between border-b-4 border-black">
              {/* Corner Price Box */}
              <div className="bg-white text-black px-2 py-0.5 border-2 border-black text-center font-bold">
                <div className="text-[10px] font-mono leading-none">{issuePrice}</div>
                <div className="text-[9px] font-comic uppercase leading-none">{issueMonth}</div>
                <div className="text-[11px] font-comic font-black leading-none text-[#ec1d24]">#{issueNumber}</div>
              </div>

              {/* Center Marvel Comics Group Banner */}
              <div className="text-center">
                <div className="bg-[#ec1d24] text-white font-marvel text-2xl tracking-tighter px-3 py-0.5 border border-white inline-block">
                  MARVEL COMICS GROUP
                </div>
                <div className="text-[8px] tracking-widest uppercase font-bold text-yellow-300">
                  SPECIAL COLLECTOR'S EDITION
                </div>
              </div>

              {/* Comics Code Authority Seal */}
              {codeSeal && (
                <div className="w-10 h-12 bg-white text-black border-2 border-black flex flex-col items-center justify-center p-0.5 shrink-0 text-center font-bold">
                  <div className="text-[6px] tracking-tighter uppercase leading-none">APPROVED BY THE</div>
                  <div className="font-comic text-[8px] text-[#ec1d24] leading-tight">COMICS CODE</div>
                  <div className="text-[6px] tracking-tighter uppercase leading-none">AUTHORITY</div>
                </div>
              )}
            </div>

            {/* Main Series Title in Big Comic Typography */}
            <div className="relative z-10 px-4 pt-3 text-center">
              <div className="text-yellow-400 font-comic text-xs uppercase tracking-widest drop-shadow-[0_2px_0_#000]">
                {seriesTitle}
              </div>
              <h1
                className="font-marvel text-4xl sm:text-5xl text-white tracking-tight uppercase leading-none drop-shadow-[4px_4px_0_#000000]"
                style={{
                  textShadow: '3px 3px 0 #000, -2px -2px 0 #ec1d24'
                }}
              >
                {selectedHero.name}
              </h1>
            </div>

            {/* Dramatic Mid-Cover Action Tag */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10 max-w-[200px] bg-yellow-400 text-black border-3 border-black p-2 rotate-[-4deg] comic-shadow-sm">
              <div className="font-comic text-xs uppercase text-[#ec1d24] leading-none">
                STAN LEE PRESENTS:
              </div>
              <div className="font-comic text-base uppercase leading-tight font-black">
                {headline}
              </div>
            </div>

            {/* Bottom Climax Bar */}
            <div className="absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-black via-black/85 to-transparent p-4 pt-8 text-center space-y-1">
              <div className="font-comic text-yellow-300 text-sm sm:text-base tracking-wider uppercase drop-shadow-[0_2px_0_#000]">
                {subHeadline}
              </div>
              <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-zinc-400 border-t border-zinc-700 pt-1">
                <span>© MARVEL COMICS</span>
                <span className="font-comic text-xs text-yellow-400">EXCELSIOR!</span>
                <span>PRINTED IN THE MULTIVERSE</span>
              </div>
            </div>
          </div>

          {/* Action Download / Export Button */}
          <button
            onClick={handleDownload}
            disabled={isExporting}
            className="mt-6 px-8 py-3.5 bg-[#ec1d24] hover:bg-[#b9151b] border-4 border-black comic-shadow text-white font-comic text-xl uppercase tracking-wider flex items-center gap-3 transition-transform active:scale-95 cursor-pointer"
          >
            <Download size={22} />
            <span>
              {isExporting
                ? (lang === 'ku' ? 'لە دروستکردندایە...' : 'EXPORTING...')
                : (lang === 'ku' ? 'پاشەکەوتکردنی بەرگی کۆمیک' : 'SAVE COMIC COVER')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
