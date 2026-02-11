import { Experience } from '@/types/experience';

export const experiences: Experience[] = [
  {
    id: '1',
    companyName: 'Coltex Biz Solutions (PVT) LTD',
    position: 'Software Engineering Intern',
    jobType: 'Internship',
    jobMode: 'On-site',
    timeline: 'July 2024 – June 2025',
    description: 'Developed full-stack web applications and mobile solutions while collaborating with cross-functional teams. Gained hands-on experience in modern software development practices, agile methodologies, and cloud technologies.',
    specialProjects: [
      'Led development of customer management system handling 10,000+ records',
      'Implemented REST API architecture serving 5+ frontend applications',
      'Designed responsive UI components used across multiple projects',
      'Integrated third-party payment gateways with 99.9% uptime',
      'Optimized database queries reducing response time by 40%'
    ],
    technologiesLearned: [
      'Node.js',
      'React.js',
      'MongoDB',
      'Tailwind CSS',
      'REST APIs',
      'Figma',
      'GitHub',
      'Express.js',
      'JWT Authentication',
      'Agile Methodologies'
    ],
    achievements: [
      'Successfully delivered 3 major projects ahead of schedule',
      'Improved application performance by 40% through optimization',
      'Mentored 2 junior interns in React.js and Node.js development',
      'Received outstanding performance rating from supervisor',
      'Contributed to company\'s open-source initiative'
    ],
    images: ['/images/experience/coltex-office.jpg', '/images/experience/team-photo.jpg']
  }
];