import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden z-10">
      {/* Background with Parallax and blur */}
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ y: y1, scale }}
      >
        <img 
           src={`${import.meta.env.BASE_URL}warm_rings.png`} 
           alt="Wedding Rings Background"
           className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05020a] via-transparent to-[#05020a]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#8338ec]/20 via-transparent to-[#ff006e]/10 mix-blend-overlay"></div>
      </motion.div>

      {/* Content Layer */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full pt-10"
      >
        {/* Subtle decorative top element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-2 flex flex-col items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-neon-gold/20 blur-2xl rounded-full"></div>
          <img src={`${import.meta.env.BASE_URL}ganesha.png`} className="w-20 md:w-28 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,190,11,0.8)] relative z-10" alt="Ganesh" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-neon-pink font-sans tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm uppercase mb-6"
        >
          Two hearts. One journey.
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-serif text-[2.5rem] leading-[1.2] md:text-7xl lg:text-8xl text-white mb-6 text-glow-gold drop-shadow-2xl"
        >
          <span className="block mb-2">S. Govardan</span>
          <span className="text-neon-pink text-glow-pink font-light italic block my-2 md:inline md:my-0 md:mx-6">&amp;</span>
          <span className="block mt-2">U. Sanchana</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-lg md:text-2xl font-serif text-white/80 mb-10 tracking-widest uppercase text-glow-gold"
        >
          Forever begins here
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 2 }}
           className="glass-card-neon px-8 py-3 rounded-full border border-neon-gold/30"
        >
          <span className="text-neon-gold font-sans font-medium tracking-widest text-glow-gold text-sm md:text-md uppercase">April 20, 2026</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] tracking-[0.4em] text-white/40 mb-3 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-neon-gold w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
