import { Certification } from '@/types/certification';

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Cloud Practitioner',
    organization: 'Amazon Web Services',
    timeline: '2024',
    description: 'Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
    mainImage: '/images/certifications/aws-cloud-practitioner.jpg',
    credentialLink: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
  },
  {
    id: '2', 
    title: 'MongoDB Developer Certification',
    organization: 'MongoDB University',
    timeline: '2024',
    description: 'Comprehensive knowledge of MongoDB database administration, development, and optimization techniques.',
    mainImage: '/images/certifications/mongodb-developer.jpg',
    credentialLink: 'https://university.mongodb.com/'
  },
  {
    id: '3',
    title: 'Google Analytics Certified',
    organization: 'Google',
    timeline: '2023',
    description: 'Proficiency in Google Analytics platform for web analytics, data interpretation, and digital marketing insights.',
    mainImage: '/images/certifications/google-analytics.jpg',
    credentialLink: 'https://skillshop.exceedlms.com/student/catalog/list?category_ids=53-google-analytics-4'
  },
  {
    id: '4',
    title: 'React Developer Certification',
    organization: 'Meta',
    timeline: '2023',
    description: 'Advanced React.js development skills including hooks, context, state management, and modern React patterns.',
    mainImage: '/images/certifications/meta-react.jpg',
    credentialLink: 'https://www.coursera.org/professional-certificates/meta-front-end-developer'
  }
];