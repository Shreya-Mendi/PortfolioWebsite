interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: string;
  name: string;
  phoneNumber: string;
  profilePic: string;
}

export interface Technology extends SanityBody {
  _type: "technology";
  image: string;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: string;
  progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: string;
  dateStarted: string;
  dateEnded: string | null;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  linkToBuild: string;
  githubUrl: string;
  demoUrl: string;
  image: string;
  summary: string;
  technologies: Technology[];
  tags: string[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
