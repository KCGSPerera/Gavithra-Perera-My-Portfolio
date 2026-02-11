'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/data/experience';
import { Briefcase, Calendar, TrendingUp, Star, Award, Code } from 'lucide-react';

export default function ExperiencePage() {
  // Calculate statistics
  const totalTechnologies = Array.from(new Set(experiences.flatMap(exp => exp.technologiesLearned))).length;
  const totalAchievements = experiences.reduce((sum, exp) => sum + exp.achievements.length, 0);
  const totalProjects = experiences.reduce((sum, exp) => sum + exp.specialProjects.length, 0);

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle
            title="Professional Experience"
            subtitle="My journey in software development, showcasing the skills I've gained, projects I've contributed to, and impact I've made in professional environments."
            icon={Briefcase}
            centered
          />
        </div>

        {/* Statistics Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: Calendar,
              label: 'Experience Period',
              value: 'July 2024 - June 2025',
              color: 'text-primary-400',
              bgColor: 'from-primary-500/20 to-primary-600/20',
              borderColor: 'border-primary-500/30'
            },
            {
              icon: Star,
              label: 'Key Projects',
              value: totalProjects.toString(),
              color: 'text-yellow-400',
              bgColor: 'from-yellow-500/20 to-yellow-600/20',
              borderColor: 'border-yellow-500/30'
            },
            {
              icon: Code,
              label: 'Technologies',
              value: totalTechnologies.toString(),
              color: 'text-green-400',
              bgColor: 'from-green-500/20 to-green-600/20',
              borderColor: 'border-green-500/30'
            },
            {
              icon: Award,
              label: 'Achievements',
              value: totalAchievements.toString(),
              color: 'text-purple-400',
              bgColor: 'from-purple-500/20 to-purple-600/20',
              borderColor: 'border-purple-500/30'
            }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className={`glass-card p-6 text-center border ${stat.borderColor}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </motion.div>
                
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.span>
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Timeline Title */}
          <motion.div
            className="flex items-center space-x-3 mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <TrendingUp size={16} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Career Timeline</h3>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ExperienceCard experience={experience} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Gained Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Technical Skills Developed"
            subtitle="Technologies and tools I've mastered through hands-on professional experience"
            icon={Code}
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Frontend Technologies',
                skills: ['React.js', 'Tailwind CSS', 'JavaScript ES6+', 'HTML5', 'CSS3'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                category: 'Backend Development',
                skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
                color: 'from-green-500 to-emerald-500'
              },
              {
                category: 'Database & Storage',
                skills: ['MongoDB', 'Mongoose ODM', 'Database Design', 'Data Optimization'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                category: 'Development Tools',
                skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'],
                color: 'from-orange-500 to-red-500'
              },
              {
                category: 'Methodologies',
                skills: ['Agile Development', 'Scrum', 'Code Review', 'Testing'],
                color: 'from-indigo-500 to-purple-500'
              },
              {
                category: 'Soft Skills',
                skills: ['Team Collaboration', 'Problem Solving', 'Communication', 'Mentoring'],
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`h-1 bg-gradient-to-r ${skillGroup.color} rounded-full mb-4`}></div>
                <h4 className="text-lg font-bold text-white mb-3">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`}></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-400 mb-6">
              I&apos;m seeking opportunities to apply my experience in full-stack development, 
              contribute to innovative projects, and continue growing as a software engineer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:gavithra.perera@gmail.com"
                className="glow-button inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/gavithra-perera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Connect on LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}