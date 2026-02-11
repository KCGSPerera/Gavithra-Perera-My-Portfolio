export interface Project {
  id: string;
  name: string;
  timeline: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  images?: string[];
  videos?: string[];
  documents?: string[];
  role: string;
  category: 'Web Development' | 'Mobile Development' | 'Full Stack' | 'Research' | 'Backend';
}