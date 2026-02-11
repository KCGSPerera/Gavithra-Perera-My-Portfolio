'use client';

import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Briefcase, Star, TrendingUp, Award, ChevronRight } from 'lucide-react';
import { Experience } from '@/types/experience';
import { useState } from 'react';

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export default function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative glass-card p-6 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
    >
      
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

      {/* Header */}
      <div className="space-y-4 mb-6">
        
        {/* Company & Position */}
        <div>
          <motion.h3
            className="text-xl font-bold text-white mb-1"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {experience.position}
          </motion.h3>
          <div className="flex items-center space-x-2 text-primary-300">
            <Building size={16} />
            <span className="font-medium">{experience.companyName}</span>
          </div>
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-3">
          
          {/* Timeline */}
          <motion.div
            className="flex items-center space-x-1 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar size={16} className="text-primary-300" />
            <span className="text-sm font-medium text-primary-300">{experience.timeline}</span>
          </motion.div>

          {/* Job Type */}
          <motion.div
            className="flex items-center space-x-1 px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase size={16} className="text-secondary-300" />
            <span className="text-sm font-medium text-secondary-300">{experience.jobType}</span>
          </motion.div>

          {/* Job Mode */}
          <motion.div
            className="flex items-center space-x-1 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={16} className="text-green-300" />
            <span className="text-sm font-medium text-green-300">{experience.jobMode}</span>
          </motion.div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed mb-6">
        {experience.description}
      </p>

      {/* Expandable Sections */}
      <div className="space-y-4">
        
        {/* Special Projects */}
        {experience.specialProjects.length > 0 && (
          <motion.div className="space-y-3">
            <motion.button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleSection('projects')}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-400" size={16} />
                <span className="font-medium text-white">Key Projects</span>
                <span className="text-xs text-gray-400">({experience.specialProjects.length})</span>
              </div>
              <motion.div
                animate={{ rotate: expandedSection === 'projects' ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={16} className="text-gray-400" />
              </motion.div>
            </motion.button>

            {expandedSection === 'projects' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2 ml-6"
              >
                {experience.specialProjects.map((project, projIndex) => (
                  <motion.p
                    key={projIndex}
                    className="text-sm text-gray-300 flex items-start space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: projIndex * 0.1 }}
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{project}</span>
                  </motion.p>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Technologies */}
        {experience.technologiesLearned.length > 0 && (
          <motion.div className="space-y-3">
            <motion.button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleSection('technologies')}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-blue-400" size={16} />
                <span className="font-medium text-white">Technologies</span>
                <span className="text-xs text-gray-400">({experience.technologiesLearned.length})</span>
              </div>
              <motion.div
                animate={{ rotate: expandedSection === 'technologies' ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={16} className="text-gray-400" />
              </motion.div>
            </motion.button>

            {expandedSection === 'technologies' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-2 ml-6"
              >
                {experience.technologiesLearned.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Achievements */}
        {experience.achievements.length > 0 && (
          <motion.div className="space-y-3">
            <motion.button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleSection('achievements')}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center space-x-2">
                <Award className="text-green-400" size={16} />
                <span className="font-medium text-white">Achievements</span>
                <span className="text-xs text-gray-400">({experience.achievements.length})</span>
              </div>
              <motion.div
                animate={{ rotate: expandedSection === 'achievements' ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={16} className="text-gray-400" />
              </motion.div>
            </motion.button>

            {expandedSection === 'achievements' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2 ml-6"
              >
                {experience.achievements.map((achievement, achIndex) => (
                  <motion.p
                    key={achIndex}
                    className="text-sm text-gray-300 flex items-start space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: achIndex * 0.1 }}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </motion.p>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}