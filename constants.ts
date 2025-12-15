import { Experience, Project, Skill, Education } from './types';
import { Layers, PenTool, Monitor, Home, Building2, FileText } from 'lucide-react';

export const LINKS = {
  // Linking to the drive folder
  resumePdf: "https://drive.google.com/drive/folders/1LwvjUg-S9iuYVJ0moZWTLdXOkuEfdPCX?usp=sharing", 
  portfolioDrive: "https://drive.google.com/drive/folders/1LwvjUg-S9iuYVJ0moZWTLdXOkuEfdPCX?usp=sharing" 
};

export const PERSONAL_DETAILS = {
  name: "Prakash Anuvadia",
  role: "Interior Designer & 3D Visualizer",
  location: "Borivali (W), Mumbai",
  phone: "8655 109902",
  email: "anuvadia.prakash@gmail.com",
  // Updated to match PDF
  about: "Experienced Interior Designer and 3D Visualizer in residential, commercial, and corporate interiors. Skilled in cinematic visualization, space planning, and project execution with a collaborative and detail-oriented approach."
};

export const NOTABLE_PROJECTS = [
  { name: "Bharti Lab, IIT Powai", size: "4,000 sq.ft", type: "Institutional" },
  { name: "Baroda Pioneer, Jogeshwari", size: "10,000 sq.ft", type: "Commercial" },
  { name: "Eurofins Scientific, Bangalore", size: "10,000 sq.ft", type: "Lab/Office" },
  { name: "Motilal Oswal, Elphinstone Road", size: "15,000 sq.ft", type: "Corporate" },
  { name: "Kumar Residence, Lokhandwala", size: "5,000 sq.ft", type: "Residential" }
];

export const SERVICES = [
  {
    title: "Interior Design",
    description: "Holistic space planning and aesthetic conceptualization that marries form with function.",
    icon: Home
  },
  {
    title: "Cinematic 3D Visualization",
    description: "Hyper-realistic rendering using 3ds Max, V-Ray, and Corona to visualize projects before they exist.",
    icon: Monitor
  },
  {
    title: "Turnkey Execution",
    description: "End-to-end project management, site coordination, and vendor handling.",
    icon: Layers
  },
  {
    title: "Technical Drafting",
    description: "Precision AutoCAD layouts for electrical, plumbing, and civil execution.",
    icon: FileText
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Assistant Interior Designer",
    company: "Ar. Parijat Misra",
    period: "2023 - 2025",
    description: [
      "Assistant interior designer, 3d model making in SketchUp, Project coordinator."
    ]
  },
  {
    id: "2",
    role: "Lead Planning & Design",
    company: "Creative Design",
    period: "2022 - 2023",
    description: [
      "Lead planning, design, 3D visualization, and execution of interior projects."
    ]
  },
  {
    id: "3",
    role: "Freelance 3D Visualizer",
    company: "Freelancer",
    period: "2013 - 2021",
    description: [
      "Delivered high-quality 3D views and managed on-site execution for architects."
    ]
  },
  {
    id: "4",
    role: "3D Visualizer",
    company: "Della Tecnica",
    period: "2011 - 2012",
    description: [
      "Coordinated with design teams to produce detailed interior renderings."
    ]
  },
  {
    id: "5",
    role: "Interior Designer",
    company: "Graphic Interiors",
    period: "2009 - 2011",
    description: [
      "Created proposals and 3D views; managed project execution."
    ]
  },
  {
    id: "6",
    role: "Assistant Project Manager",
    company: "Karim Noorani & Co.",
    period: "2008 - 2009",
    description: [
      "Built strong relationships with clients, vendors, and architects.",
      "Assistant project manager."
    ]
  },
  {
    id: "7",
    role: "Interior Designer",
    company: "Exotic Interiors",
    period: "2000 - 2008",
    description: [
      "Designed and furnished residential and commercial spaces."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master Diploma in Interior Design",
    institution: "St. Francis School",
    year: "1999"
  },
  {
    degree: "AutoCAD",
    institution: "St. Angelo's",
    year: "2004"
  },
  {
    degree: "3ds Max",
    institution: "St. Angelo's",
    year: "2006"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Design & Planning",
    items: ["Interior Design & Space Planning", "Project Coordination & Site Execution", "Mood Board"]
  },
  {
    category: "Software Proficiency",
    items: ["AutoCAD (2d - 3d)", "Photoshop & PowerPoint", "3ds Max", "Corona", "V-Ray", "SketchUp", "D5 Render (Animation walkthrough)"]
  }
];

export const PROJECTS = [];