import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FolderOpen } from 'lucide-react';
import { LINKS } from '../constants';

const PortfolioCTA: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-32 bg-brand-charcoal overflow-hidden flex items-center justify-center">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' 
      }}></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto border border-white/10 bg-white/5 backdrop-blur-lg rounded-2xl p-12 md:p-20 shadow-2xl"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/20 text-brand-gold mb-8">
            <FolderOpen size={40} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Explore My Work
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            A curated collection of my best residential and commercial projects, including 
            technical drawings and high-fidelity 3D renders.
          </p>

          <motion.a
            href={LINKS.portfolioDrive}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-brand-gold text-brand-black px-10 py-5 rounded-full text-lg font-bold shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40 transition-all"
          >
            View Full Portfolio <ArrowRight size={24} />
          </motion.a>
          
          <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest">
            Redirects to Google Drive
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCTA;