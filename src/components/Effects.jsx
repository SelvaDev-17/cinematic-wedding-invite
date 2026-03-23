import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-gold origin-left z-50 shadow-[0_0_15px_rgba(255,0,110,0.8)]"
      style={{ scaleX }}
    />
  );
};

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Note: Provide an actual file or let user provide it in public folder
    audioRef.current = new Audio(`${import.meta.env.BASE_URL}music_trimmed.mp3`);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed (often due to browser policies)', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggleMusic}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glass-card-neon text-white hover:text-neon-gold transition-colors duration-300 shadow-[0_0_20px_rgba(255,190,11,0.5)]"
      aria-label="Toggle background music"
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </motion.button>
  );
};

export const Particles = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "110vh",
            x: Math.random() * 100 + "vw",
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: "-10vh",
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 100 - 50}px)`,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-2 h-2 rounded-full bg-neon-gold shadow-[0_0_10px_rgba(255,190,11,0.8)]"
          style={{
            filter: "blur(1px)",
          }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`pink-${i}`}
          initial={{
            y: "-10vh",
            x: Math.random() * 100 + "vw",
            opacity: Math.random() * 0.3 + 0.1,
            scale: Math.random() * 0.8 + 0.4,
          }}
          animate={{
            y: "110vh",
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 100 - 50}px)`,
            rotate: Math.random() * -360,
          }}
          transition={{
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-4 h-4 rounded-full bg-neon-pink shadow-[0_0_15px_rgba(255,0,110,0.8)]"
          style={{
            filter: "blur(2px)",
          }}
        />
      ))}
    </div>
  );
};
