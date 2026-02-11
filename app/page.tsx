'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import EventCard from '@/components/EventCard';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import { events } from '@/data/events';
import { 
  Code2, 
  Briefcase, 
  GraduationCap, 
  ArrowRight, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud,
  Palette,
  Settings,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

const skills = [
  {
    category: 'Frontend Development',
    icon: Globe,
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Backend Development', 
    icon: Database,
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Mongoose'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    technologies: ['React Native', 'Flutter', 'Android', 'iOS', 'Mobile UI/UX'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    technologies: ['AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'Vercel', 'Heroku'],
    color: 'from-orange-500 to-red-500'
  },
  {
    category: 'Design & Tools',
    icon: Palette,
    technologies: ['Figma', 'UI/UX Design', 'Responsive Design', 'Framer Motion'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    category: 'Other Technologies',
    icon: Settings,
    technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'OWASP ZAP', 'Agile'],
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <section className="py-20 bg-dark-lighter/50">
        <div className="section-container">
          <SectionTitle
            title="Technical Skills"
            subtitle="Technologies and tools I work with to bring ideas to life"
            icon={Code2}
            centered
            className="mb-12"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  className="glass-card p-6 group hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-20 border border-current border-opacity-30`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors duration-300">
                      {skill.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12">
            <SectionTitle
              title="Featured Projects"
              subtitle="A selection of projects that showcase my technical skills and creativity"
              icon={Code2}
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg border border-primary-500/30 text-primary-300 hover:bg-primary-500/10 transition-all duration-300 group"
              >
                <span>View All Projects</span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <ArrowRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Preview */}
      <section className="py-20 bg-dark-lighter/50">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12">
            <SectionTitle
              title="Work Experience"
              subtitle="Professional journey and key contributions in software development"
              icon={Briefcase}
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/experience"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg border border-primary-500/30 text-primary-300 hover:bg-primary-500/10 transition-all duration-300 group"
              >
                <span>View Full Experience</span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <ArrowRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.slice(0, 1).map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Preview */}
      <section className="py-20">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12">
            <SectionTitle
              title="Education"
              subtitle="Academic journey and achievements in software engineering"
              icon={GraduationCap}
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/education"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg border border-primary-500/30 text-primary-300 hover:bg-primary-500/10 transition-all duration-300 group"
              >
                <span>View Education Details</span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <ArrowRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.slice(0, 1).map((edu, index) => (
              <EducationCard key={edu.id} education={edu} index={index} />
            ))} 
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-20">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12">
            <SectionTitle
              title="Recent Events"
              subtitle="Latest conferences, workshops, and tech events attended"
              icon={Calendar}
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/events"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg border border-primary-500/30 text-primary-300 hover:bg-primary-500/10 transition-all duration-300 group"
              >
                <span>View All Events</span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <ArrowRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-y border-primary-500/30">
        <div className="section-container text-center">
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              I&apos;m always excited to work on innovative projects and collaborate with talented teams. 
              Whether it&apos;s a startup idea, enterprise solution, or open-source contribution, 
              let&apos;s connect and create something extraordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:gavithrapay666@gmail.com"
                className="glow-button inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <ArrowRight size={20} />
              </motion.a>
              
              <motion.a
                href="/projects"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore My Work</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}