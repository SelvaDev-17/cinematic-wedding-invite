import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Venue = () => {
  return (
    <section className="relative py-24 px-6 z-10 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-gold/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-12 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-glow-gold text-white mb-4">The Venue</h2>
          <div className="w-16 h-1 bg-neon-pink mx-auto rounded-full blur-[1px]"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full glass-panel rounded-[2rem] p-8 md:p-14 text-center border border-white/10 border-t-neon-gold/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent rounded-[2rem] pointer-events-none"></div>

          <div className="w-full h-48 md:h-64 mb-8 rounded-2xl overflow-hidden relative shadow-[0_0_15px_rgba(255,0,110,0.3)] border border-neon-gold/20">
             <div className="absolute inset-0 bg-neon-purple/20 mix-blend-overlay z-10 transition-opacity duration-500 hover:opacity-0"></div>
             <img src={`${import.meta.env.BASE_URL}venue.jpg`} alt="Asirvatham Mahal Venue" className="w-full h-full object-cover filter contrast-125" />
          </div>

          <h3 className="font-serif text-3xl md:text-5xl text-glow-gold text-white mb-6">Asirvatham Mahal</h3>
          <p className="font-sans text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed mb-10">
            1No3, Madambakkam Main Rd, Maruthi Nagar, Madambakkam, Chennai, Tamil Nadu 600073
          </p>

          <a 
            href="https://maps.app.goo.gl/GFym4bJiWEErbfMN7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 glass-card-neon rounded-full text-neon-gold font-sans font-medium hover:text-white transition-colors duration-300 hover:shadow-[0_0_25px_rgba(255,0,110,0.6)]"
          >
            View on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
