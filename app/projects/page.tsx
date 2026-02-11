'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Code2, Filter } from 'lucide-react';
import type { Metadata } from 'next';

const categories = ['All', 'Web Development', 'Mobile Development', 'Full Stack', 'Backend', 'Research'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle
            title="My Projects"
            subtitle="A comprehensive showcase of my software development journey, featuring web applications, mobile apps, and research projects built with modern technologies."
            icon={Code2}
            centered
          />
        </div>

        {/* Filters */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg glass-card border border-white/10 focus:border-primary-500/50 focus:outline-none transition-colors duration-300"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Filter size={18} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'glass-card border border-white/10 text-gray-300 hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                {selectedCategory === category && (
                  <motion.span
                    className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full"
                    layoutId="categoryIndicator"
                  >
                    {category === 'All' ? projects.length : projects.filter(p => p.category === category).length}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400">
            Showing {filteredProjects.length} of {projects.length} projects
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or selecting a different category.
              </p>
              <motion.button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="glow-button inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Show All Projects</span>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Project Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Total Projects', value: projects.length, color: 'text-primary-400' },
            { label: 'Technologies Used', value: Array.from(new Set(projects.flatMap(p => p.technologies))).length, color: 'text-secondary-400' },
            { label: 'Categories', value: Array.from(new Set(projects.map(p => p.category))).length, color: 'text-green-400' },
            { label: 'GitHub Repos', value: projects.filter(p => p.githubLink).length, color: 'text-purple-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.span>
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}