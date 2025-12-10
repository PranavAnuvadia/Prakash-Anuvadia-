import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Let's Create Together</h2>
          <p className="text-gray-400 text-lg">
            Ready to bring your space to life? Whether it's a new home, office, or a freelance visualization project, I'm here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all group text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-brand-black flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors duration-300">
              <Phone size={28} />
            </div>
            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-2">Call Me</h3>
            <p className="text-lg text-white font-medium">{PERSONAL_DETAILS.phone}</p>
          </motion.div>
          
          {/* Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all group text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-brand-black flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors duration-300">
              <Mail size={28} />
            </div>
            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-2">Email</h3>
            <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-lg text-white font-medium hover:text-brand-gold transition-colors break-words">
              {PERSONAL_DETAILS.email}
            </a>
          </motion.div>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all group text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-brand-black flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors duration-300">
              <MapPin size={28} />
            </div>
            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-2">Location</h3>
            <p className="text-lg text-white font-medium">{PERSONAL_DETAILS.location}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;