export interface Experience {
  id: string;
  companyName: string;
  position: string;
  jobType: 'Full Time' | 'Part Time' | 'Internship' | 'Contract';
  jobMode: 'Remote' | 'On-site' | 'Hybrid';
  timeline: string;
  description: string;
  specialProjects: string[];
  technologiesLearned: string[];
  achievements: string[];
  images?: string[];
  videos?: string[];
}