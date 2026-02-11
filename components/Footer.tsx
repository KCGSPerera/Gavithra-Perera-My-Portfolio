'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/KCGSPerera/',
    icon: Github,
    label: 'GitHub',
    hoverColor: 'hover:text-gray-400'
  },
  {
    href: 'https://www.linkedin.com/in/gavithra-perera-93941a2a8/',
    icon: Linkedin,
    label: 'LinkedIn',
    hoverColor: 'hover:text-blue-400'
  },
  {
    href: 'mailto:gavithrapay666@gmail.com',
    icon: Mail,
    label: 'Email',
    hoverColor: 'hover:text-green-400'
  }
];

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-white/10">
      <div className="section-container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">GP</span>
              </div>
              <span className="font-bold text-xl gradient-text">Gavithra Perera</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              Software Engineer passionate about creating innovative solutions 
              that make a difference. Always learning, always building.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-white text-lg">Quick Links</h3>
            <div className="space-y-2">
              {['Projects', 'Experience', 'Education', 'Certifications', 'Events'].map((link) => (
                <motion.a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-primary-400 transition-colors duration-200 text-base"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-white text-lg">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-white/5 text-gray-400 ${social.hoverColor} transition-all duration-300 hover:bg-white/10`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
            <div className="text-gray-400 text-sm space-y-1">
              <p>📍 Colombo, Sri Lanka</p>
              <p>🎓 SLIIT - Software Engineering</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <motion.p 
              className="text-gray-500 text-base text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span>© 2026 Gavithra Perera. All Rights Reserved</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}