import { projectsData } from "../data/projects";
import { Project } from "../typings";

export const fetchProjects = async (): Promise<Project[]> => {
  return projectsData as Project[];
};
