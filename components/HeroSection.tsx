'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ChevronDown, Code, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  "Software Engineer",
  "Full Stack Developer", 
  "React.js Enthusiast",
  "Node.js Developer",
  "Problem Solver"
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-lighter">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="section-container relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Hello Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border border-primary-500/30"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
            </motion.div>
            <span className="text-sm text-primary-300">Hello, I&apos;m</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="gradient-text">Gavithra</span>
            <br />
            <span className="text-white">Perera</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            variants={itemVariants}
            className="h-16 flex items-center justify-center"
          >
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium"
            >
              {roles[currentRole]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate software engineering student crafting innovative digital solutions. 
            Specializing in full-stack development with modern technologies and a keen eye for user experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://github.com/KCGSPerera/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>View My Work</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/gavithra-perera-93941a2a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              <span>Connect</span>
            </motion.a>

            <motion.button
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 pt-8"
          >
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((tech, index) => (
              <motion.span
                key={tech}
                className="tech-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Code size={14} className="mr-1" />
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 text-gray-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}