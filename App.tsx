import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import PortfolioCTA from './components/PortfolioCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <PortfolioCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;