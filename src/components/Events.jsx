import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1, y: 0, transition: { delay: custom * 0.3, duration: 1.2, ease: "easeOut" }
    })
  };

  const EventCard = ({ title, date, time, icon, custom }) => (
    <motion.div
      custom={custom}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="glass-card-light rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-14 text-center w-full max-w-[90%] md:max-w-lg mx-auto relative overflow-hidden group border border-white transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_25px_50px_-20px_rgba(197,164,126,0.2)]"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full flex items-center justify-center mb-6 md:mb-8 border-[3px] border-soft-gold shadow-[0_0_15px_rgba(197,164,126,0.3)] relative z-10 transition-transform duration-700 group-hover:scale-110 bg-[#FAF9F6]">
        <div className="w-full h-full p-[6px] flex items-center justify-center rounded-full overflow-hidden" style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)", clipPath: "circle(50% at 50% 50%)" }}>
           <img 
              src={`${import.meta.env.BASE_URL}${icon}`}
              alt={`${title} Icon`}
              className="w-full h-full object-contain mix-blend-multiply"
              style={{ filter: "contrast(1.4) brightness(1.3)" }}
           />
        </div>
      </div>

      <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-main mb-4 md:mb-6 font-normal tracking-wide">{title}</h3>
      <div className="space-y-2 md:space-y-3 font-sans text-text-light px-2">
        <p className="text-base sm:text-lg md:text-xl tracking-wide text-text-main font-medium">{date}</p>
        <p className="text-sm sm:text-base font-light tracking-wide">{time}</p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-soft-gold/30 to-transparent"></div>
    </motion.div>
  );

  return (
    <section className="py-32 px-6 relative z-10 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           className="mb-12 md:mb-20 text-center"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-text-main mb-4 md:mb-6">Wedding Events</h2>
          <div className="w-16 md:w-24 h-[1px] bg-soft-gold/60 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-16 justify-center w-full">
           <EventCard title="Reception" date="Sunday, April 19, 2026" time="7:00 PM onwards" icon="ring.png" custom={1} />
           <EventCard title="Muhurtham" date="Monday, April 20, 2026" time="6:00 AM – 7:30 AM" icon="muhurtham.png" custom={2} />
        </div>
      </div>
    </section>
  );
};

export default Events;
