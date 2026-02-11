'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { Education } from '@/types/education';
import { useState } from 'react';

interface EducationCardProps {
  education: Education;
  index?: number;
}

export default function EducationCard({ education, index = 0 }: EducationCardProps) {
  const [showModules, setShowModules] = useState(false);
  const [showSemesters, setShowSemesters] = useState(false);

  // Calculate Dean's List semesters (GPA >= 3.7)
  const deansListSemesters = education.semesterResults.filter(result => result.gpa >= 3.7);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="glass-card p-6 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
    >
      
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <motion.h3
            className="text-xl font-bold text-white mb-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {education.degree}
          </motion.h3>
          <div className="flex items-center space-x-2 text-primary-300 mb-3">
            <GraduationCap size={16} />
            <span className="font-medium">{education.institution}</span>
          </div>
          
          {/* Timeline */}
          <motion.div
            className="flex items-center space-x-1 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 inline-flex"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar size={14} className="text-primary-300" />
            <span className="text-xs font-medium text-primary-300">{education.timeline}</span>
          </motion.div>
        </div>

        {/* GPA Badge */}
        <motion.div
          className="text-right"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-gradient-to-r from-secondary-500 to-green-500 text-white px-4 py-2 rounded-xl text-center shadow-lg">
            <div className="text-lg font-bold">{education.GPA}</div>
            <div className="text-xs opacity-90">Cumulative GPA</div>
          </div>
          {education.weightedGPA && (
            <div className="mt-2 text-xs text-gray-400">
              Weighted: <span className="text-secondary-300 font-medium">{education.weightedGPA}</span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Class Award */}
      {education.classAward && (
        <motion.div
          className="flex items-center space-x-2 mb-6 px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Award className="text-yellow-400" size={20} />
          <span className="text-yellow-200 font-medium">{education.classAward}</span>
          {deansListSemesters.length > 0 && (
            <span className="text-xs text-yellow-300">
              ({deansListSemesters.length} semesters)
            </span>
          )}
        </motion.div>
      )}

      {/* Semester Results */}
      <div className="mb-6">
        <motion.button
          className="flex items-center justify-between w-full text-left mb-3"
          onClick={() => setShowSemesters(!showSemesters)}
          whileHover={{ x: 5 }}
        >
          <div className="flex items-center space-x-2">
            <TrendingUp className="text-blue-400" size={16} />
            <span className="font-medium text-white">Semester Results</span>
            <span className="text-xs text-gray-400">({education.semesterResults.length} semesters)</span>
          </div>
          <motion.div
            animate={{ rotate: showSemesters ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} className="text-gray-400" />
          </motion.div>
        </motion.button>

        {showSemesters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {education.semesterResults.map((semester, semIndex) => (
              <motion.div
                key={semester.semester}
                className={`p-3 rounded-lg border text-center ${
                  semester.gpa >= 3.7 
                    ? 'bg-green-500/20 border-green-500/30 text-green-300' 
                    : 'bg-gray-500/20 border-gray-500/30 text-gray-300'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: semIndex * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xs font-medium mb-1">{semester.semester}</div>
                <div className="text-lg font-bold">{semester.gpa}</div>
                {semester.gpa >= 3.7 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + semIndex * 0.1 }}
                    className="text-xs mt-1"
                  >
                    ⭐ Dean&apos;s List
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Modules Section */}
      <div>
        <motion.button
          className="flex items-center justify-between w-full text-left mb-3"
          onClick={() => setShowModules(!showModules)}
          whileHover={{ x: 5 }}
        >
          <div className="flex items-center space-x-2">
            <BookOpen className="text-purple-400" size={16} />
            <span className="font-medium text-white">Course Modules</span>
            <span className="text-xs text-gray-400">({education.modules.length} modules)</span>
          </div>
          <motion.div
            animate={{ rotate: showModules ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} className="text-gray-400" />
          </motion.div>
        </motion.button>

        {showModules && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
          >
            {education.modules.map((module, moduleIndex) => (
              <motion.div
                key={moduleIndex}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: moduleIndex * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-sm text-gray-300">{module}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Statistics Footer */}
      <motion.div
        className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="text-lg font-bold text-primary-400">{deansListSemesters.length}</div>
          <div className="text-xs text-gray-400">Dean&apos;s List</div>
        </div>
        <div>
          <div className="text-lg font-bold text-secondary-400">{education.modules.length}</div>
          <div className="text-xs text-gray-400">Modules</div>
        </div>
        <div>
          <div className="text-lg font-bold text-green-400">{education.semesterResults.length}</div>
          <div className="text-xs text-gray-400">Semesters</div>
        </div>
      </motion.div>
    </motion.div>
  );
}