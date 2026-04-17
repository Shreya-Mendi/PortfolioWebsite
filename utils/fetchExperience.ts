import { experiencesData } from "../data/experiences";
import { Experience } from "../typings";

export const fetchExperiences = async (): Promise<Experience[]> => {
  return experiencesData as Experience[];
};
