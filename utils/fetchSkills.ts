import { skillsData } from "../data/skills";
import { Skill } from "../typings";

export const fetchSkills = async (): Promise<Skill[]> => {
  return skillsData as Skill[];
};
