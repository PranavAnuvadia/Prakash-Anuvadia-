import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/70 to-brand-black z-10"></div>
        {/* Abstract Architectural Background Image Placeholder */}
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-brand-gold/50 rounded-full text-brand-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
            Interior Designer & 3D Visualizer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Crafting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-pale to-brand-gold">
            Elegance.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Transforming visions into hyper-realistic 3D experiences and executed realities.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-brand-gold" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;