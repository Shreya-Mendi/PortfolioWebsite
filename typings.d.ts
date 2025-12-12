
export interface PageInfo {
    name: string;
    role: string;
    heroImage: string;
    backgroundInformation: string;
    profilePic: string;
    phoneNumber: string;
    email: string;
    address: string;
}

export interface Technology {
    title: string;
    image: string;
}

export interface Skill {
    id: string;
    title: string;
    image: string;
    progress: number;
}

export interface Experience {
    id: string;
    jobTitle: string;
    companyImage: string;
    company: string;
    dateStarted: string;
    dateEnded: string | null;
    isCurrentlyWorkingHere: boolean;
    technologies: Technology[];
    points: string[];
}

export interface Project {
    id: string;
    title: string;
    image: string;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social {
    id: string;
    title: string;
    url: string;
}