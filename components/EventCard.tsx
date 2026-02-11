'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Image as ImageIcon, FileText, Award, Eye } from 'lucide-react';
import { Event } from '@/types/event';
import { useState } from 'react';

interface EventCardProps {
  event: Event;
  index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
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

        {/* Category Badge */}
        <motion.div
          className="absolute top-4 right-4 px-4 py-2 rounded-full glass-card border border-white/20"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-white">{event.category}</span>
        </motion.div>

        {/* Timeline Badge */}
        <motion.div
          className="absolute bottom-4 left-4 flex items-center space-x-1 px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <Calendar size={16} className="text-secondary-300" />
          <span className="text-sm font-medium text-secondary-300">{event.timeline}</span>
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
          {event.name}
        </motion.h3>

        {/* Venue */}
        <div className="flex items-center space-x-2 text-gray-400">
          <MapPin size={16} />
          <span className="text-sm">{event.venue}</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {event.description}
        </p>

        {/* Media & Documents Section */}
        <div className="space-y-3">
          
          {/* Images */}
          {event.images && event.images.length > 0 && (
            <motion.div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ImageIcon size={16} className="text-blue-400" />
                <span className="text-sm text-gray-300">
                  {event.images.length} Image{event.images.length > 1 ? 's' : ''}
                </span>
              </div>
              <motion.button
                className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowGallery(!showGallery)}
              >
                <Eye size={12} className="inline mr-1" />
                View Gallery
              </motion.button>
            </motion.div>
          )}

          {/* Certificates */}
          {event.certificates && event.certificates.length > 0 && (
            <div className="flex items-center space-x-2">
              <Award size={16} className="text-green-400" />
              <span className="text-sm text-gray-300">
                {event.certificates.length} Certificate{event.certificates.length > 1 ? 's' : ''}
              </span>
            </div>
          )}

          {/* Documents */}
          {event.documents && event.documents.length > 0 && (
            <div className="flex items-center space-x-2">
              <FileText size={16} className="text-purple-400" />
              <span className="text-sm text-gray-300">
                {event.documents.length} Document{event.documents.length > 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
          
          {/* Certificates Download */}
          {event.certificates && event.certificates.length > 0 && (
            <motion.button
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-xs bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Award size={14} />
              <span>Certificates</span>
            </motion.button>
          )}

          {/* Documents */}
          {event.documents && event.documents.length > 0 && (
            <motion.button
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-xs bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={14} />
              <span>Documents</span>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}