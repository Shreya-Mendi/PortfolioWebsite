import { Project } from "../typings";
import { fetchGitHubProjects } from "./fetchGitHubProjects";

export const fetchProjects = async (): Promise<Project[]> => {
  return fetchGitHubProjects();
};
