import React from 'react';
import { X, Sparkles, Heart } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

interface StanLeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ku';
}

export const StanLeeModal: React.FC<StanLeeModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0f1117] border-4 border-[#ec1d24] comic-shadow text-white overflow-hidden rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Comic Header Stripe */}
        <div className="bg-[#ec1d24] px-6 py-3 flex items-center justify-between border-b-4 border-black">
          <div className="flex items-center gap-3">
            <span className="font-comic text-2xl tracking-wider text-yellow-300">EXCELSIOR!</span>
            <span className="text-xs uppercase tracking-widest text-white/90 font-bold">
              {lang === 'ku' ? 'یادەوەری ستان لی (1922 - 2018)' : 'In Memory of Stan Lee (1922 - 2018)'}
            </span>
          </div>
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-1 hover:bg-black/30 transition-colors text-white"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6 bg-halftone">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative group shrink-0">
              <div className="w-36 h-44 border-4 border-black comic-shadow-red overflow-hidden bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80"
                  alt="Stan Lee Tribute"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-yellow-400 text-black font-comic px-2.5 py-1 text-sm border-2 border-black rotate-3">
                LEGEND
              </div>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs text-yellow-400 uppercase tracking-wider font-semibold">
                <Sparkles size={14} />
                <span>{lang === 'ku' ? 'باوکی فرەگەردی مارڤڵ' : 'Architect of the Marvel Universe'}</span>
              </div>
              <h2 className="font-marvel text-3xl md:text-4xl tracking-wide text-white">
                STAN "THE MAN" LEE
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {lang === 'ku'
                  ? 'ستان لی، نووسەر و سەرنووسەری ئەفسانەیی مارڤڵ، بە یارمەتی جاک کێربی و ستیڤ دیتکۆ سەدان پاڵەوانی نەمری وەک سپایدەرمان، ئایرۆن مان، هەڵک، تۆر و ئێکس مێنی دروستکرد کە ژیانی ملیۆنان کەسیان لە سەرتاسەری جیهان گۆڕی.'
                  : 'Co-creator of Spider-Man, the Avengers, X-Men, Iron Man, Thor, Hulk, Black Panther, and Doctor Strange. He revolutionized comic books by giving heroes human flaws, insecurities, and unshakeable moral compasses.'}
              </p>
            </div>
          </div>

          {/* Quotes Section */}
          <div className="border-2 border-zinc-700 bg-black/60 p-4 space-y-3">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
              {lang === 'ku' ? 'وتەی ئەفسانەیی' : 'Iconic Wisdom'}
            </div>
            <blockquote className="font-comic text-xl text-yellow-300 tracking-wide border-l-4 border-[#ec1d24] pl-4 py-1">
              {lang === 'ku'
                ? '"ئەو کەسەی کە بەبێ بەرژەوەندی یارمەتی کەسانی تر دەدات لەبەر ئەوەی کارێکی دروستە، بە دڵنیاییەوە پاڵەوانێکی ڕاستەقینەیە."'
                : '"That person who helps others simply because it should or must be done, and because it is the right thing to do, is indeed without a doubt, a real superhero."'}
            </blockquote>
            <p className="text-right text-xs text-zinc-400 font-marvel tracking-wider">
              — STAN LEE (1922–2018)
            </p>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-zinc-800">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Heart size={14} className="text-red-500 fill-red-500" />
              <span>{lang === 'ku' ? 'هەمیشە لە دڵماندا دەمێنێتەوە' : 'True Believer Forever'}</span>
            </div>

            <button
              onClick={() => {
                playSound('thunder');
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#ec1d24] hover:bg-[#b9151b] text-white font-comic text-lg uppercase tracking-wider border-2 border-black comic-shadow-sm active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              {lang === 'ku' ? 'ئێکسێلسیۆر! (بەرەو لوتکە)' : 'EXCELSIOR!'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
