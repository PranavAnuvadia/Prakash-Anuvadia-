import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-8 border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Prakash Anuvadia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;