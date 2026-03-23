import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Volume2, VolumeX, Sun, Moon } from 'lucide-react';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cream via-soft-gold to-blush-pink origin-left z-50 shadow-sm"
      style={{ scaleX }}
    />
  );
};

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}music_trimmed.mp3`} loop preload="auto" />
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-6 right-6 z-[60] p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-sm border"
        style={{ background: "var(--glass-card-bg-start)", color: "var(--color-text-primary)", borderColor: "var(--glass-card-border)" }}
        aria-label="Toggle background music"
      >
        {isPlaying ? <Volume2 size={20} strokeWidth={1.5} /> : <VolumeX size={20} strokeWidth={1.5} />}
      </motion.button>
    </>
  );
};

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Always enforce the bright pastel Day Mode as the default on every fresh visit
    document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      style={{
         background: "var(--glass-card-bg-start)",
         color: "var(--color-text-primary)",
         borderColor: "var(--glass-card-border)"
      }}
      className="fixed top-6 left-6 z-[60] p-3 rounded-full backdrop-blur-md transition-all duration-500 shadow-md border hover:shadow-lg inline-flex items-center justify-center cursor-pointer"
      aria-label="Toggle dark mode"
      title="Toggle Dark Mode"
    >
      {isDark ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
    </motion.button>
  );
};

export const FloralCorners = () => {
  return (
    <>
      <svg style={{ width: 0, height: 0, position: 'absolute', pointerEvents: 'none' }}>
        <filter id="remove-white" colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix
            type="matrix"
            values="1   0   0   0   0
                    0   1   0   0   0
                    0   0   1   0   0
                   -4  -4  -4   0  11.8"
          />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </svg>
      <div className="fixed inset-0 z-[50] pointer-events-none overflow-hidden" style={{ mixBlendMode: "var(--blend-floral)" }}>
      {/* Left Floral Border */}
      <motion.img 
        src={`${import.meta.env.BASE_URL}floral_side.png`}
        animate={{ rotate: [ -1.5, 1.5, -1.5 ] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10vh] bottom-[-10vh] left-0 h-[120vh] w-[22vw] max-w-[300px] min-w-[65px] object-cover object-center opacity-90 origin-bottom-left"
        style={{ filter: "var(--filter-floral)" }}
        alt="Left Botanical Border"
      />

      {/* Right Floral Border Container (Flipped horizontally natively) */}
      <div className="absolute top-[-10vh] bottom-[-10vh] right-0 h-[120vh] w-[22vw] max-w-[300px] min-w-[65px]" style={{ transform: "scaleX(-1)" }}>
        <motion.img 
          src={`${import.meta.env.BASE_URL}floral_side.png`}
          animate={{ rotate: [ -1.5, 1.5, -1.5 ] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="w-full h-full object-cover object-center opacity-90 origin-bottom-left"
          style={{ filter: "var(--filter-floral)" }}
          alt="Right Botanical Border"
        />
      </div>
      </div>
    </>
  );
};

export const Particles = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Falling petal effect */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          initial={{
            y: "-10vh",
            x: Math.random() * 100 + "vw",
            opacity: Math.random() * 0.3,
            scale: Math.random() * 0.6 + 0.4,
            rotate: Math.random() * 360
          }}
          animate={{
            y: "110vh",
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 200 - 100}px)`,
            rotate: Math.random() * 360 + 180,
            opacity: [0, Math.random() * 0.4 + 0.1, 0]
          }}
          transition={{
            duration: Math.random() * 20 + 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-4 h-5 rounded-tr-[50%] rounded-bl-[50%] rounded-tl-sm rounded-br-sm bg-blush-pink/60 shadow-sm"
          style={{ filter: "blur(1px)" }}
        />
      ))}
      {/* Floating dust/light effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`light-${i}`}
          initial={{
            y: "110vh",
            x: Math.random() * 100 + "vw",
            opacity: Math.random() * 0.2,
            scale: Math.random() * 0.8 + 0.4,
          }}
          animate={{
            y: "-10vh",
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 100 - 50}px)`,
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: Math.random() * 25 + 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-6 h-6 rounded-full bg-soft-gold/30"
          style={{ filter: "blur(6px)" }}
        />
      ))}
    </div>
  );
};
