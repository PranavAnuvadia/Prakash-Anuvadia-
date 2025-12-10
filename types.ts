export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Drawings' | '3D Visualization';
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}