import { socialsData } from "../data/socials";
import { Social } from "../typings";

export const fetchSocials = async (): Promise<Social[]> => {
  return socialsData as Social[];
};
