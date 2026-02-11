'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import EventCard from '@/components/EventCard';
import { events } from '@/data/events';
import { Calendar, Filter, MapPin, Award, Users } from 'lucide-react';
import type { Metadata } from 'next';

const categories = ['All', 'Conference', 'Workshop', 'Seminar', 'Competition', 'Networking', 'Tech Talk'];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle
            title="Events & Conferences"
            subtitle="Professional development through active participation in technology conferences, workshops, and community events."
            icon={Calendar}
            centered
          />
        </div>

        {/* Filters */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          {/* Search Bar */}
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search events by name, venue, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50 transition-colors duration-300"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
          >
            <Filter className="text-gray-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-500/50 transition-colors duration-300"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-dark text-white">
                  {category}
                </option>
              ))}
            </select>
          </motion.div>
        </motion.div>

        {/* Results Counter */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Showing {filteredEvents.length} of {events.length} events
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
            />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Calendar className="mx-auto mb-4 text-gray-500" size={48} />
            <h3 className="text-xl font-bold text-gray-400 mb-2">No Events Found</h3>
            <p className="text-gray-500">
              {searchQuery ? 
                `No events match "${searchQuery}" in ${selectedCategory === 'All' ? 'any category' : selectedCategory}.` :
                `No events found in ${selectedCategory}.`
              }
            </p>
            <motion.button
              className="mt-4 px-6 py-2 bg-primary-500/20 text-primary-300 rounded-lg hover:bg-primary-500/30 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Event Participation Overview</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Calendar,
                label: 'Events Attended',
                value: events.length,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Award,
                label: 'Certificates Earned', 
                value: events.reduce((acc, event) => acc + (event.certificates?.length || 0), 0),
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: MapPin,
                label: 'Unique Venues',
                value: new Set(events.map(event => event.venue)).size, 
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Users,
                label: 'Categories',
                value: new Set(events.map(event => event.category)).size,
                color: 'from-orange-500 to-red-500'
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}