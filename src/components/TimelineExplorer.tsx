import React, { useState } from 'react';
import { Clock, Shield, Sparkles, BookOpen, Film, Zap, Star } from 'lucide-react';
import { TimelineEvent } from '../types/marvel';
import { playSound } from '../utils/soundEffects';

interface TimelineExplorerProps {
  events: TimelineEvent[];
  lang: 'en' | 'ku';
}

export const TimelineExplorer: React.FC<TimelineExplorerProps> = ({ events, lang }) => {
  const [filterEra, setFilterEra] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const eras = [
    { id: 'all', label: lang === 'ku' ? 'تەواوی مێژوو' : 'All Eras' },
    { id: 'comics-golden', label: lang === 'ku' ? 'سەردەمی زێڕین (1939–1955)' : 'Golden Age (1939–55)' },
    { id: 'comics-silver', label: lang === 'ku' ? 'سەردەمی زیوین (1961–1970)' : 'Silver Age (1961–70)' },
    { id: 'comics-modern', label: lang === 'ku' ? 'کۆمیکە مۆدێرنەکان' : 'Modern Comics' },
    { id: 'mcu-infinity', label: lang === 'ku' ? 'داستانی ئەبەدیەت (MCU)' : 'The Infinity Saga' },
    { id: 'mcu-multiverse', label: lang === 'ku' ? 'داستانی فرەگەردوون' : 'The Multiverse Saga' },
  ];

  const filtered = events.filter((ev) => {
    return filterEra === 'all' || ev.era === filterEra;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="relative border-4 border-black bg-gradient-to-r from-red-950/70 via-zinc-900 to-black p-6 md:p-8 comic-shadow">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="bg-[#ec1d24] text-white font-comic text-xs uppercase px-2.5 py-0.5 border border-black">
                {lang === 'ku' ? 'هێڵی کات' : 'CHRONOLOGY'}
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                85+ Years of Marvel Storytelling
              </span>
            </div>
            <h1 className="font-marvel text-4xl sm:text-5xl md:text-6xl text-white tracking-wide leading-none">
              {lang === 'ku' ? 'هێڵی کاتی کۆمیک و سینەمای مارڤڵ' : 'MARVEL MULTIVERSE TIMELINE'}
            </h1>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {lang === 'ku'
                ? 'لە یەکەم چاپی کۆمیکی ١٩٣٩ تا سەردەمی فرەگەردوون و جەنگە نهێنییەکان، هەموو وێستگە گرنگەکانی مارڤڵ بە وردەکارییەکانەوە ببینە.'
                : 'Follow the epic transformation of Marvel from Timely Comics in 1939, through Stan Lee’s Silver Age revolution, to the modern Marvel Cinematic Universe box office phenomenon.'}
            </p>
          </div>

          <div className="bg-black/90 border-2 border-zinc-800 p-4 shrink-0 text-center">
            <div className="font-comic text-3xl text-yellow-400">1939 – 2026+</div>
            <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
              {lang === 'ku' ? 'مێژووی زیندوو' : 'Continuity Archive'}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-4 border-t-2 border-zinc-800">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => {
                playSound('click');
                setFilterEra(era.id);
              }}
              className={`px-3.5 py-1.5 border-2 text-xs font-bold uppercase transition-all whitespace-nowrap ${
                filterEra === era.id
                  ? 'bg-[#ec1d24] border-black text-white comic-shadow-sm'
                  : 'bg-black/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {era.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-4 border-[#ec1d24] ml-4 md:ml-12 pl-6 md:pl-10 space-y-10 py-4">
        {filtered.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => {
              playSound('click');
              setSelectedEvent(item);
            }}
            className="group relative cursor-pointer"
          >
            {/* Timeline Node Stamp */}
            <div className="absolute -left-[38px] md:-left-[54px] top-1.5 w-7 h-7 md:w-8 md:h-8 rounded-full bg-black border-4 border-[#ec1d24] flex items-center justify-center font-comic text-xs text-yellow-400 group-hover:scale-125 transition-transform comic-shadow-sm">
              ★
            </div>

            {/* Event Card */}
            <div className="border-4 border-black bg-[#12141c] p-5 md:p-6 comic-shadow transition-all group-hover:-translate-y-1 group-hover:comic-shadow-red space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-400 text-black font-comic text-sm px-2 py-0.5 border border-black font-bold">
                    {item.year}
                  </span>
                  <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
                    {item.era}
                  </span>
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  EVENT {idx + 1}
                </div>
              </div>

              <h3 className="font-marvel text-2xl md:text-3xl text-white group-hover:text-yellow-400 transition-colors">
                {lang === 'ku' ? item.kurdishTitle : item.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {lang === 'ku' ? item.kurdishSummary : item.summary}
              </p>

              {/* Key Heroes Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                <span className="text-[11px] uppercase font-bold text-zinc-400 mr-1">
                  Key Figures:
                </span>
                {item.keyHeroes.map((hero, hIdx) => (
                  <span
                    key={hIdx}
                    className="text-xs text-zinc-300 bg-black border border-zinc-800 px-2 py-0.5"
                  >
                    {hero}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
