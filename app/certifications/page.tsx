'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import CertificationCard from '@/components/CertificationCard';
import { certifications } from '@/data/certifications';
import { Award, Calendar, Building, ExternalLink, TrendingUp, Star } from 'lucide-react';

export default function CertificationsPage() {
  // Group certifications by year
  const certificationsByYear = certifications.reduce((acc, cert) => {
    const year = cert.timeline;
    if (!acc[year]) acc[year] = [];
    acc[year].push(cert);
    return acc;
  }, {} as Record<string, typeof certifications>);

  const years = Object.keys(certificationsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  // Get unique organizations
  const organizations = Array.from(new Set(certifications.map(cert => cert.organization)));

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle
            title="Professional Certifications"
            subtitle="Industry-recognized credentials that validate my expertise in modern technologies and development practices, showcasing my commitment to continuous learning and professional growth."
            icon={Award}
            centered
          />
        </div>

        {/* Statistics Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: Award,
              label: 'Total Certifications',
              value: certifications.length.toString(),
              color: 'text-primary-400',
              bgColor: 'from-primary-500/20 to-primary-600/20',
              borderColor: 'border-primary-500/30'
            },
            {
              icon: Building,
              label: 'Organizations',
              value: organizations.length.toString(),
              color: 'text-secondary-400',
              bgColor: 'from-secondary-500/20 to-secondary-600/20',
              borderColor: 'border-secondary-500/30'
            },
            {
              icon: Calendar,
              label: 'Years Active',
              value: years.length.toString(),
              color: 'text-green-400',
              bgColor: 'from-green-500/20 to-green-600/20',
              borderColor: 'border-green-500/30'
            },
            {
              icon: TrendingUp,
              label: 'Latest Year',
              value: years[0] || 'N/A',
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
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.span>
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications by Year */}
        <div className="space-y-16">
          {years.map((year, yearIndex) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: yearIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Year Header */}
              <motion.div
                className="flex items-center space-x-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Calendar size={20} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold gradient-text">{year}</h3>
                </div>
                <motion.div
                  className="flex-1 h-px bg-gradient-to-r from-primary-500/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                <span className="text-sm text-gray-400 px-3 py-1 rounded-full bg-white/5">
                  {certificationsByYear[year].length} certification{certificationsByYear[year].length > 1 ? 's' : ''}
                </span>
              </motion.div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsByYear[year].map((certification, index) => (
                  <CertificationCard
                    key={certification.id}
                    certification={certification}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Organizations Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Certification Providers"
            subtitle="Trusted industry leaders and educational institutions that have validated my skills"
            icon={Building}
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizations.map((org, index) => {
              const orgCerts = certifications.filter(cert => cert.organization === org);
              return (
                <motion.div
                  key={org}
                  className="glass-card p-6 text-center group hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Building className="w-8 h-8 text-primary-400" />
                  </motion.div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                    {org}
                  </h4>
                  
                  <div className="text-sm text-gray-400 mb-3">
                    {orgCerts.length} certification{orgCerts.length > 1 ? 's' : ''}
                  </div>

                  <div className="space-y-1">
                    {orgCerts.map((cert) => (
                      <div key={cert.id} className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200">
                        {cert.title}
                      </div>
                    ))}
                  </div>

                  {orgCerts.some(cert => cert.credentialLink) && (
                    <motion.div
                      className="mt-4 pt-4 border-t border-white/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink size={16} className="text-gray-400 mx-auto" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Certification Benefits"
            subtitle="How these credentials enhance my capabilities as a software engineer"
            icon={Star}
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Industry Recognition',
                description: 'Validated expertise in cutting-edge technologies from leading industry providers.',
                icon: Award,
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Technical Proficiency',
                description: 'Demonstrated competency in cloud computing, databases, and modern development frameworks.',
                icon: TrendingUp,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Continuous Learning',
                description: 'Commitment to staying current with evolving technologies and best practices.',
                icon: Star,
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Professional Credibility',
                description: 'Third-party validation of skills that enhances trust and confidence from employers.',
                icon: Building,
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Knowledge Application',
                description: 'Practical understanding of how to implement learned concepts in real-world projects.',
                icon: ExternalLink,
                color: 'from-indigo-500 to-purple-500'
              },
              {
                title: 'Career Advancement',
                description: 'Enhanced qualifications that open doors to new opportunities and career growth.',
                icon: Calendar,
                color: 'from-pink-500 to-rose-500'
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="glass-card p-6 group hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${benefit.color} bg-opacity-20 rounded-xl flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Committed to Excellence
            </h3>
            <p className="text-gray-400 mb-6">
              These certifications represent my dedication to professional growth and technical excellence. 
              I continue to pursue new learning opportunities to stay at the forefront of technology.
            </p>
            <motion.a
              href="mailto:gavithra.perera@gmail.com"
              className="glow-button inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Discuss My Qualifications</span>
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}