export interface Certification {
  id: string;
  title: string;
  organization: string;
  timeline: string;
  description: string;
  mainImage?: string;
  otherImages?: string[];
  credentialLink?: string;
}