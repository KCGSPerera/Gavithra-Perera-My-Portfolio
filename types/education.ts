export interface SemesterResult {
  semester: string;
  gpa: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  timeline: string;
  GPA: number;
  weightedGPA?: number;
  classAward?: string;
  semesterResults: SemesterResult[];
  modules: string[];
}