import React, { useEffect, useState } from 'react';

export interface SfxEvent {
  id: string;
  word: string;
  x: number;
  y: number;
  color?: string;
}

let emitSfxCallback: ((event: SfxEvent) => void) | null = null;

export const triggerComicSfx = (word: string, x?: number, y?: number, color?: string) => {
  if (emitSfxCallback) {
    const posX = x ?? (typeof window !== 'undefined' ? window.innerWidth / 2 + (Math.random() * 200 - 100) : 200);
    const posY = y ?? (typeof window !== 'undefined' ? window.innerHeight / 2 + (Math.random() * 150 - 75) : 300);
    emitSfxCallback({
      id: Math.random().toString(),
      word,
      x: posX,
      y: posY,
      color: color || '#facc15'
    });
  }
};

export const ComicSfxBubbleContainer: React.FC = () => {
  const [bubbles, setBubbles] = useState<SfxEvent[]>([]);

  useEffect(() => {
    emitSfxCallback = (newBubble) => {
      setBubbles((prev) => [...prev.slice(-4), newBubble]);
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 950);
    };
    return () => {
      emitSfxCallback = null;
    };
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
          className="absolute animate-bounce"
        >
          <div className="relative">
            {/* Burst Star SVG */}
            <svg
              viewBox="0 0 120 120"
              className="w-28 h-28 drop-shadow-[0_5px_0_#000000]"
              style={{ filter: 'drop-shadow(4px 4px 0px #000000)' }}
            >
              <polygon
                points="60,5 73,40 110,25 90,60 115,85 78,85 85,120 55,95 25,115 35,80 5,75 35,50 15,20 50,35"
                fill={bubble.color}
                stroke="#000000"
                strokeWidth="4"
              />
            </svg>
            {/* Comic Word */}
            <span
              className="absolute inset-0 flex items-center justify-center font-comic text-2xl md:text-3xl text-black tracking-widest select-none -rotate-6"
              style={{
                textShadow: '2px 2px 0px #ffffff, -1px -1px 0px #ffffff'
              }}
            >
              {bubble.word}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
