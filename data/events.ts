import { Event } from '@/types/event';

export const events: Event[] = [
  {
    id: '1',
    name: 'DevFest Colombo 2024',
    venue: 'Hilton Colombo',
    timeline: 'December 2024', 
    description: 'Google DevFest is a global technology conference series organized by Google Developer Groups (GDGs) around the world. Participated in workshops on Flutter development, cloud technologies, and machine learning.',
    category: 'Conference',
    images: ['/images/events/devfest-2024-1.jpg', '/images/events/devfest-2024-2.jpg'],
    certificates: ['/documents/events/devfest-2024-certificate.pdf'],
    documents: ['/documents/events/devfest-2024-agenda.pdf']
  },
  {
    id: '2',
    name: 'AWS re:Invent Local Meetup',
    venue: 'WSO2 Office, Colombo',
    timeline: 'November 2024',
    description: 'Local AWS community meetup discussing the latest announcements from AWS re:Invent. Learned about new serverless technologies, database innovations, and best practices for cloud architecture.',
    category: 'Tech Talk',
    images: ['/images/events/aws-meetup-2024-1.jpg'],
    certificates: ['/documents/events/aws-meetup-participation.pdf'],
    documents: ['/documents/events/aws-latest-services-2024.pdf']
  },
  {
    id: '3', 
    name: 'React Colombo Meetup',
    venue: 'IFS R&D Center',
    timeline: 'October 2024',
    description: 'Monthly React.js meetup focusing on the latest React 18 features, Next.js 14 updates, and modern state management patterns. Presented a lightning talk on React Server Components.',
    category: 'Workshop',
    images: ['/images/events/react-meetup-2024-1.jpg', '/images/events/react-meetup-2024-2.jpg'],
    documents: ['/documents/events/react-server-components-slides.pdf']
  },
  {
    id: '4',
    name: 'SLIIT TechFair 2024',
    venue: 'SLIIT Malabe Campus',
    timeline: 'September 2024',
    description: 'Annual technology exhibition showcasing student projects and industry innovations. Demonstrated the EV Station Booking Application to industry professionals and received valuable feedback.',
    category: 'Conference',
    images: ['/images/events/sliit-techfair-2024-1.jpg', '/images/events/sliit-techfair-2024-2.jpg'],
    certificates: ['/documents/events/sliit-techfair-participation.pdf'],
    documents: ['/documents/events/project-showcase-report.pdf']
  },
  {
    id: '5',
    name: 'Firebase Summit Extended',
    venue: 'Dialog Axiata Digital Labs',
    timeline: 'August 2024',
    description: 'Extended event of Google Firebase Summit featuring hands-on workshops on Firebase v9, Firestore optimization, and Cloud Functions. Built a real-time chat application during the workshop.',
    category: 'Workshop',
    images: ['/images/events/firebase-summit-2024-1.jpg'],
    certificates: ['/documents/events/firebase-workshop-certificate.pdf'],
    documents: ['/documents/events/firebase-best-practices.pdf']
  }
];