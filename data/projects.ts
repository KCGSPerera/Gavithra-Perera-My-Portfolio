import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    name: 'EV Station Booking Application',
    timeline: '2025',
    description: 'A comprehensive electric vehicle charging station booking application with real-time availability, payment integration, and mobile companion app.',
    technologies: ['C#', 'React.js', 'Android', 'MongoDB', 'Express.js', 'RESTful APIs'],
    role: 'Full Stack Developer',
    category: 'Full Stack',
    images: ['/images/projects/ev-booking-1.jpg', '/images/projects/ev-booking-2.jpg'],
    videos: ['/videos/ev-booking-demo.mp4'],
    documents: ['/documents/ev-booking-spec.pdf']
  },
  {
    id: '2',
    name: 'Punchi Pasala – Final Year Research',
    timeline: '2024-2025',
    description: 'An AI-powered educational platform for children with learning disabilities, featuring adaptive learning algorithms and speech recognition capabilities.',
    technologies: ['Node.js', 'React.js', 'MongoDB', 'Python', 'Tensorflow', 'AWS ECS', 'AWS S3', 'AWS ALB', 'AWS IAM'],
    role: 'Lead Developer & Researcher',
    category: 'Research',
    images: ['/images/projects/punchi-pasala-1.jpg', '/images/projects/punchi-pasala-2.jpg'],
    documents: ['/documents/punchi-pasala-research.pdf', '/documents/punchi-pasala-presentation.pdf']
  },
  {
    id: '3',
    name: 'Microservices E-Commerce Backend',
    timeline: '2025',
    description: 'Scalable microservices architecture for e-commerce platform with containerized services, automated CI/CD pipeline, and cloud deployment.',
    technologies: ['Node.js', 'Docker', 'GitHub Actions', 'AWS ECS', 'Docker Compose', 'RESTful APIs'],
    role: 'Backend Developer',
    category: 'Backend',
    githubLink: 'https://github.com/KCGSPerera/ecommerce-microservices',
    images: ['/images/projects/microservices-1.jpg']
  },
  {
    id: '4',
    name: 'Rheuma Connect',
    timeline: '2024',
    description: 'A healthcare platform connecting rheumatology patients with specialists, featuring appointment scheduling, medical records management, and telemedicine capabilities.',
    technologies: ['Node.js', 'Flutter', 'Vercel', 'MongoDB', 'WebRTC'],
    role: 'Mobile Developer',
    category: 'Mobile Development',
    images: ['/images/projects/rheuma-connect-1.jpg', '/images/projects/rheuma-connect-2.jpg']
  },
  {
    id: '5',
    name: 'Waste Management App',
    timeline: '2024',
    description: 'Smart waste management system with route optimization, real-time tracking, and user engagement features. Includes security testing with OWASP ZAP.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google Maps API', 'OWASP ZAP'],
    role: 'Full Stack Developer',
    category: 'Web Development',
    githubLink: 'https://github.com/KCGSPerera/waste-management',
    images: ['/images/projects/waste-management-1.jpg']
  },
  {
    id: '6',
    name: 'Logix',
    timeline: '2023',
    description: 'A comprehensive logistics management platform with inventory tracking, delivery optimization, and analytics dashboard.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Chart.js', 'JWT'],
    role: 'Full Stack Developer',
    category: 'Web Development',
    githubLink: 'https://github.com/KCGSPerera/logix',
    images: ['/images/projects/logix-1.jpg', '/images/projects/logix-2.jpg']
  }
];