import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import InvitationText from './components/InvitationText';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Venue from './components/Venue';
import Footer from './components/Footer';
import { ScrollProgress, MusicToggle, ThemeToggle, Particles, FloralCorners } from './components/Effects';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-transparent text-text-main font-sans selection:bg-blush-pink selection:text-text-main paper-texture">
      {/* Global Fixed Rings Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
        <img 
           src={`${import.meta.env.BASE_URL}warm_rings.png`} 
           alt="Wedding Rings Background"
           className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/75 backdrop-blur-[10px]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-soft-gold/20 via-transparent to-blush-pink/20 mix-blend-multiply"></div>
      </div>

      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-light-bg paper-texture"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="text-text-main text-5xl font-serif mb-8 tracking-[0.3em] font-light"
            >
              G & S
            </motion.div>
            <div className="h-[1px] w-64 bg-text-light/10 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-transparent via-soft-gold to-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <MusicToggle />
      <ThemeToggle />
      <FloralCorners />
      <Particles />

      <Hero />
      <InvitationText />
      <Countdown />
      <Events />
      <Venue />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
