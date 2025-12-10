import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { LINKS } from '../constants';
import ResumeModal from './ResumeModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-brand-black/80 backdrop-blur-md border-b border-white/10 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={() => scrollTo('hero')} className="text-2xl font-serif font-bold text-white relative group">
            Prakash<span className="text-brand-gold">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-brand-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setShowResume(true)}
              className="flex items-center gap-2 bg-brand-gold text-brand-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              <Download size={16} /> Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-3xl font-serif text-white hover:text-brand-gold"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setShowResume(true);
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 border border-brand-gold text-brand-gold px-8 py-3 rounded-full text-lg font-bold hover:bg-brand-gold hover:text-brand-black transition-colors"
            >
              <Download size={20} /> View Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  );
};

export default Navbar;