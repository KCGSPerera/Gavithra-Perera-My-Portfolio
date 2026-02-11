'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, User, Tag, Image as ImageIcon, Video, FileText } from 'lucide-react';
import { Project } from '@/types/project';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 group hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
    >
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <motion.div
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-primary-300">{project.category}</span>
            </motion.div>
          </div>
          
          <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">
            {project.name}
          </h3>
        </div>

        {/* Timeline Badge */}
        <motion.div
          className="flex items-center space-x-1 px-4 py-2 rounded-full bg-secondary-500/20 border border-secondary-500/30"
          whileHover={{ scale: 1.05 }}
        >
          <Calendar size={16} className="text-secondary-300" />
          <span className="text-sm font-medium text-secondary-300">{project.timeline}</span>
        </motion.div>
      </div>

      {/* Role */}
      <div className="flex items-center space-x-2 mb-3">
        <User size={16} className="text-gray-400" />
        <span className="text-sm text-gray-300">{project.role}</span>
      </div>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Tag size={16} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-300">Technologies</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
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
      </div>

      {/* Media Section */}
      {(project.images || project.videos || project.documents) && (
        <div className="mb-6 space-y-3">
          <div className="flex items-center space-x-4">
            
            {/* Images */}
            {project.images && project.images.length > 0 && (
              <motion.button
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowGallery(!showGallery)}
              >
                <ImageIcon size={16} className="text-blue-400" />
                <span className="text-xs text-blue-400">{project.images.length} Images</span>
              </motion.button>
            )}

            {/* Videos */}
            {project.videos && project.videos.length > 0 && (
              <motion.div
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/5"
                whileHover={{ scale: 1.05 }}
              >
                <Video size={16} className="text-green-400" />
                <span className="text-xs text-green-400">{project.videos.length} Videos</span>
              </motion.div>
            )}

            {/* Documents */}
            {project.documents && project.documents.length > 0 && (
              <motion.div
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/5"
                whileHover={{ scale: 1.05 }}
              >
                <FileText size={16} className="text-yellow-400" />
                <span className="text-xs text-yellow-400">{project.documents.length} Docs</span>
              </motion.div>
            )}
          </div>

          {/* Image Gallery */}
          {showGallery && project.images && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-2 gap-2 mt-3"
            >
              {project.images.slice(0, 4).map((image, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg border border-primary-500/30 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: imgIndex * 0.1 }}
                >
                  <ImageIcon size={24} className="text-primary-400" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-3">
        {project.githubLink && (
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glow-button text-center inline-flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={18} />
            <span>View Code</span>
          </motion.a>
        )}
        
        <motion.button
          className="flex items-center justify-center px-4 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ExternalLink size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}