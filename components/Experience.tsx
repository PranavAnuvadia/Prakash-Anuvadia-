import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, SKILLS, NOTABLE_PROJECTS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Skills & Notable Projects */}
          <div className="lg:col-span-1">
             <div className="sticky top-32 space-y-12">
               {/* Skills Section */}
               <div>
                 <h3 className="text-2xl font-serif font-bold text-white mb-8">Technical Proficiency</h3>
                 <div className="space-y-6">
                   {SKILLS.map((skillGroup, idx) => (
                     <div key={idx} className="bg-brand-charcoal p-6 rounded-xl border border-white/5">
                       <h4 className="text-brand-gold font-bold mb-4 uppercase tracking-wider text-sm">{skillGroup.category}</h4>
                       <div className="flex flex-wrap gap-2">
                         {skillGroup.items.map((skill) => (
                           <span key={skill} className="px-3 py-1 bg-brand-black rounded text-xs text-gray-300 border border-white/10">
                             {skill}
                           </span>
                         ))}
                       </div>
                     </div>
                   ))}
                 </div>
               </div>

               {/* Notable Projects Section */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
               >
                  <h3 className="text-2xl font-serif font-bold text-white mb-6">Notable Projects</h3>
                  <div className="bg-brand-charcoal rounded-xl border border-white/5 overflow-hidden">
                    {NOTABLE_PROJECTS.map((project, index) => (
                      <div key={index} className="p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-white font-bold text-sm">{project.name}</h4>
                          <span className="text-xs text-gray-500 border border-gray-700 px-1 rounded">{project.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-brand-gold text-xs">
                          <CheckCircle2 size={12} />
                          <span>{project.size}</span>
                        </div>
                      </div>
                    ))}
                  </div>
               </motion.div>
             </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l border-brand-charcoal hover:border-brand-gold transition-colors duration-300 group"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-brand-charcoal group-hover:bg-brand-gold transition-colors"></div>
                
                <span className="text-brand-gold font-mono text-sm mb-1 block">{exp.period}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-500 text-sm leading-relaxed flex items-start">
                      <span className="mr-2 text-brand-gold/50 mt-1.5">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;