'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  icon: Icon, 
  centered = false,
  className = ''
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`space-y-4 ${centered ? 'text-center' : ''} ${className}`}
    >
      {Icon && (
        <motion.div
          className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl border border-primary-500/30 ${centered ? 'mx-auto' : ''}`}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="w-6 h-6 text-primary-400" />
        </motion.div>
      )}
      
      <div className="space-y-2">
        <motion.h2
          className="text-3xl md:text-4xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.p
            className="text-gray-400 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Decorative line */}
      <motion.div
        className={`w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full ${centered ? 'mx-auto' : ''}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}