import { Education } from '@/types/education';

export const education: Education[] = [
  {
    id: '1',
    institution: 'Sri Lanka Institute of Information Technology',
    degree: 'Bachelor of Science in Software Engineering',
    timeline: '2021 - Present',
    GPA: 3.78,
    weightedGPA: 3.83,
    classAward: 'Dean\'s List - Multiple Semesters',
    semesterResults: [
      { semester: 'Y1S1', gpa: 3.72 },
      { semester: 'Y1S2', gpa: 3.81 },
      { semester: 'Y2S1', gpa: 3.74 },
      { semester: 'Y2S2', gpa: 3.74 },
      { semester: 'Y3S1', gpa: 3.65 },
      { semester: 'Y3S2', gpa: 3.76 },
      { semester: 'Y4S1', gpa: 3.85 },
      { semester: 'Y4S2', gpa: 4.0 }
    ],
    modules: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Software Engineering Principles',
      'Web Technologies',
      'Mobile Application Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Cloud Computing',
      'Cybersecurity',
      'Software Quality Assurance',
      'Project Management',
      'Human-Computer Interaction',
      'Distributed Systems',
      'Software Architecture',
      'DevOps and CI/CD',
      'Agile Software Development',
      'Research Methodology'
    ]
  }
];