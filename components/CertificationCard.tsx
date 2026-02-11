'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, Building, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Certification } from '@/types/certification';
import { useState } from 'react';

interface CertificationCardProps {
  certification: Certification;
  index?: number;
}

export default function CertificationCard({ certification, index = 0 }: CertificationCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
    >
      
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 overflow-hidden">
        
        {/* Image Placeholder/Loading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <ImageIcon className="w-16 h-16 text-primary-400/50" />
          </motion.div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>

        {/* Organization Badge */}
        <motion.div
          className="absolute top-4 right-4 px-4 py-2 rounded-full glass-card border border-white/20"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-white">{certification.organization}</span>
        </motion.div>

        {/* Year Badge */}
        <motion.div
          className="absolute bottom-4 left-4 flex items-center space-x-1 px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <Calendar size={16} className="text-secondary-300" />
          <span className="text-sm font-medium text-secondary-300">{certification.timeline}</span>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        
        {/* Title */}
        <motion.h3
          className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {certification.title}
        </motion.h3>

        {/* Organization */}
        <div className="flex items-center space-x-2 text-gray-300">
          <Building size={16} className="text-primary-400" />
          <span className="font-medium">{certification.organization}</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {certification.description}
        </p>

        {/* Gallery Preview */}
        {certification.otherImages && certification.otherImages.length > 0 && (
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <ImageIcon size={16} className="text-blue-400" />
            <span className="text-xs text-blue-400">
              +{certification.otherImages.length} more images
            </span>
          </motion.div>
        )}

        {/* Action Button */}
        {certification.credentialLink && (
          <motion.a
            href={certification.credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 w-full justify-center px-4 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Award size={18} />
            <span>Verify Credential</span>
            <ExternalLink size={16} />
          </motion.a>
        )}
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(14, 165, 233, 0.05), transparent 40%)',
        }}
      />
    </motion.div>
  );
}