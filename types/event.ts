export interface Event {
  id: string;
  name: string;
  venue: string;
  timeline: string;
  description: string;
  images?: string[];
  certificates?: string[];
  documents?: string[];
  category: 'Conference' | 'Workshop' | 'Seminar' | 'Competition' | 'Networking' | 'Tech Talk';
}