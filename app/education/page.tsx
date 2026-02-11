'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import EducationCard from '@/components/EducationCard';
import { education } from '@/data/education';
import { GraduationCap, Award, BookOpen, TrendingUp, Calendar, Star } from 'lucide-react';

export default function EducationPage() {
  const currentEducation = education[0]; // Since we have one education entry
  const deansListSemesters = currentEducation.semesterResults.filter(sem => sem.gpa >= 3.7);
  const averageGPA = currentEducation.semesterResults.reduce((sum, sem) => sum + sem.gpa, 0) / currentEducation.semesterResults.length;

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle
            title="Education"
            subtitle="My academic journey in software engineering, showcasing consistent academic excellence, comprehensive learning, and dedication to mastering cutting-edge technologies."
            icon={GraduationCap}
            centered
          />
        </div>

        {/* Academic Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: GraduationCap,
              label: 'Cumulative GPA',
              value: currentEducation.GPA.toString(),
              sublabel: `Weighted: ${currentEducation.weightedGPA}`,
              color: 'text-primary-400',
              bgColor: 'from-primary-500/20 to-primary-600/20',
              borderColor: 'border-primary-500/30'
            },
            {
              icon: Award,
              label: 'Dean\'s List',
              value: deansListSemesters.length.toString(),
              sublabel: 'Semesters',
              color: 'text-yellow-400',
              bgColor: 'from-yellow-500/20 to-yellow-600/20',
              borderColor: 'border-yellow-500/30'
            },
            {
              icon: BookOpen,
              label: 'Course Modules',
              value: currentEducation.modules.length.toString(),
              sublabel: 'Completed',
              color: 'text-green-400',
              bgColor: 'from-green-500/20 to-green-600/20',
              borderColor: 'border-green-500/30'
            },
            {
              icon: TrendingUp,
              label: 'Average GPA',
              value: averageGPA.toFixed(2),
              sublabel: 'All Semesters',
              color: 'text-purple-400',
              bgColor: 'from-purple-500/20 to-purple-600/20',
              borderColor: 'border-purple-500/30'
            }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className={`glass-card p-6 text-center border ${stat.borderColor}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </motion.div>
                
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.sublabel}</div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Education Details */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <EducationCard education={currentEducation} />
          </motion.div>
        </div>

        {/* GPA Trend Chart */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Academic Performance Trend"
            subtitle="GPA progression throughout my academic journey showing consistent high performance"
            icon={TrendingUp}
            centered
            className="mb-12"
          />

          <div className="glass-card p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {currentEducation.semesterResults.map((semester, index) => (
                <motion.div
                  key={semester.semester}
                  className={`p-4 rounded-lg text-center border ${
                    semester.gpa >= 3.7 
                      ? 'bg-green-500/20 border-green-500/30' 
                      : semester.gpa >= 3.5
                      ? 'bg-blue-500/20 border-blue-500/30'
                      : 'bg-gray-500/20 border-gray-500/30'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-sm font-medium text-gray-300 mb-1">
                    {semester.semester}
                  </div>
                  <div className={`text-xl font-bold ${
                    semester.gpa >= 3.7 ? 'text-green-400' : 
                    semester.gpa >= 3.5 ? 'text-blue-400' : 'text-gray-400'
                  }`}>
                    {semester.gpa}
                  </div>
                  {semester.gpa >= 3.7 && (
                    <motion.div
                      className="flex items-center justify-center mt-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star size={12} className="text-yellow-400" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center text-gray-400 text-sm">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Dean&apos;s List (GPA ≥ 3.7)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>High Honors (GPA ≥ 3.5)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span>Good Standing</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionTitle
            title="Academic Achievements"
            subtitle="Notable accomplishments and recognitions during my studies"
            icon={Award}
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Consistent Dean\'s List',
                description: `Achieved Dean's List recognition in ${deansListSemesters.length} out of ${currentEducation.semesterResults.length} semesters, demonstrating sustained academic excellence.`,
                icon: Star,
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'High Cumulative GPA',
                description: `Maintained a cumulative GPA of ${currentEducation.GPA} with a weighted GPA of ${currentEducation.weightedGPA}, ranking among top performers.`,
                icon: TrendingUp,
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Perfect Final Semester',
                description: 'Achieved a perfect 4.0 GPA in Y4S2, demonstrating mastery of advanced software engineering concepts.',
                icon: Award,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Comprehensive Learning',
                description: `Successfully completed ${currentEducation.modules.length} diverse modules covering all aspects of software engineering.`,
                icon: BookOpen,
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Consistent Improvement',
                description: 'Showed steady academic growth with strong performance in both theoretical and practical coursework.',
                icon: TrendingUp,
                color: 'from-indigo-500 to-purple-500'
              },
              {
                title: 'Well-Rounded Education',
                description: 'Balanced excellence across technical subjects, research methodology, and soft skills development.',
                icon: GraduationCap,
                color: 'from-pink-500 to-rose-500'
              }
            ].map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  className="glass-card p-6 group hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${achievement.color} bg-opacity-20 rounded-xl flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Institution Information */}
        <motion.div
          className="text-center glass-card p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Sri Lanka Institute of Information Technology
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
            SLIIT is one of Sri Lanka&apos;s leading private higher education institutions, 
            renowned for its comprehensive software engineering program that combines 
            theoretical knowledge with practical industry experience. The curriculum 
            is designed to meet international standards and prepare graduates for 
            global software development careers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 rounded-lg bg-white/5">
              <Calendar className="w-8 h-8 text-primary-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-white">2021 - 2025</div>
              <div className="text-sm text-gray-400">Study Period</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <GraduationCap className="w-8 h-8 text-secondary-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-white">BSc Honours in Software Engineering</div>
              <div className="text-sm text-gray-400">Degree Program</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-white">3.78 / 4.0</div>
              <div className="text-sm text-gray-400">Cumulative GPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}