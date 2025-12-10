import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Phone, Mail, MapPin } from 'lucide-react';
import { PERSONAL_DETAILS, EXPERIENCE, EDUCATION, SKILLS, NOTABLE_PROJECTS, LINKS } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-gray-900 w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative"
        >
          {/* Header / Toolbar */}
          <div className="bg-brand-charcoal text-white p-4 flex justify-between items-center shrink-0 sticky top-0 z-10">
            <h2 className="font-serif font-bold text-lg">Resume Preview</h2>
            <div className="flex items-center gap-4">
              <a 
                href={LINKS.resumePdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-brand-gold transition-colors"
              >
                <Download size={16} /> Open Drive Folder
              </a>
              <button onClick={onClose} className="hover:text-brand-gold transition-colors">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar bg-white">
            {/* Resume Header */}
            <div className="border-b-2 border-gray-900 pb-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2 uppercase tracking-tight">
                {PERSONAL_DETAILS.name}
              </h1>
              <p className="text-lg font-medium text-gray-600 mb-6">{PERSONAL_DETAILS.role}</p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 font-medium">
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-gray-400" /> {PERSONAL_DETAILS.location}
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={16} className="text-gray-400" /> {PERSONAL_DETAILS.phone}
                </div>
                <div className="flex items-center gap-1">
                  <Mail size={16} className="text-gray-400" /> {PERSONAL_DETAILS.email}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4 text-gray-800">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed">{PERSONAL_DETAILS.about}</p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4 text-gray-800">Core Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILLS.map((group, i) => (
                  <div key={i}>
                     <h4 className="font-bold text-sm mb-2 text-gray-900 bg-gray-100 px-2 py-1 inline-block rounded">{group.category}</h4>
                     <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm pl-2">
                       {group.items.map((skill, j) => (
                         <li key={j}>{skill}</li>
                       ))}
                     </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4 text-gray-800">Professional Experience</h3>
              <div className="space-y-6">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                      <h4 className="font-bold text-lg text-gray-900">{exp.company}</h4>
                      <span className="font-mono text-sm text-gray-500 bg-gray-50 px-2 rounded">{exp.period}</span>
                    </div>
                    <p className="font-medium text-gray-700 italic mb-2">{exp.role}</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

             {/* Education */}
             <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4 text-gray-800">Education & Certifications</h3>
              <div className="space-y-4">
                {EDUCATION.map((edu, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                      <span className="text-sm text-gray-500">{edu.year}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notable Projects */}
             <div>
              <h3 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4 text-gray-800">Notable Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                {NOTABLE_PROJECTS.map((proj, i) => (
                  <div key={i} className="text-sm text-gray-700 flex justify-between border-b border-gray-100 py-1">
                    <span className="font-medium">{proj.name}</span>
                    <span className="text-gray-500 font-mono text-xs pt-1">{proj.size}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;