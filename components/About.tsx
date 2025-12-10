import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, PERSONAL_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Design is not just what it looks like.<br /> It's how it works.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 border-l-2 border-brand-gold pl-6">
              {PERSONAL_DETAILS.about}
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
               <div>
                 <span className="text-4xl font-serif font-bold text-white block mb-2">20+</span>
                 <span className="text-gray-500 text-sm uppercase tracking-wider">Years Experience</span>
               </div>
               <div>
                 <span className="text-4xl font-serif font-bold text-white block mb-2">100+</span>
                 <span className="text-gray-500 text-sm uppercase tracking-wider">Projects Delivered</span>
               </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-charcoal p-8 rounded-lg border border-white/5 hover:border-brand-gold/30 transition-colors group"
              >
                <service.icon className="text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;