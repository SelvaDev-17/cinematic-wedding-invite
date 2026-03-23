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
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cream via-soft-gold to-blush-pink origin-left z-50 shadow-sm"
      style={{ scaleX }}
    />
  );
};

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(`${import.meta.env.BASE_URL}music_trimmed.mp3`);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
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
    <motion.button
      onClick={toggleMusic}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 backdrop-blur-md text-text-main hover:text-soft-gold transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-soft-gold/30"
      aria-label="Toggle background music"
    >
      {isPlaying ? <Volume2 size={20} strokeWidth={1.5} /> : <VolumeX size={20} strokeWidth={1.5} />}
    </motion.button>
  );
};

export const FloralCorners = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Left Floral Border */}
      <motion.img 
        src={`${import.meta.env.BASE_URL}floral_side.png`}
        animate={{ rotate: [ -1.5, 1.5, -1.5 ], x: ["-15%", "-10%", "-15%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10vh] bottom-[-10vh] left-0 h-[120vh] w-[40vw] md:w-[30vw] max-w-[500px] min-w-[200px] object-cover object-right mix-blend-darken filter contrast-125 saturate-[0.85] opacity-90 origin-left"
        alt="Botanical Border"
      />

      {/* Right Floral Border */}
      <motion.img 
        src={`${import.meta.env.BASE_URL}floral_side.png`}
        initial={{ scaleX: -1 }}
        animate={{ rotate: [ 1.5, -1.5, 1.5 ], x: ["15%", "10%", "15%"], scaleX: -1 }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[-10vh] bottom-[-10vh] right-0 h-[120vh] w-[40vw] md:w-[30vw] max-w-[500px] min-w-[200px] object-cover object-right mix-blend-darken filter contrast-125 saturate-[0.85] opacity-90 origin-right"
        alt="Botanical Border"
      />
    </div>
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
