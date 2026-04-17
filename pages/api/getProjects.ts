import type { NextApiRequest, NextApiResponse } from "next";
import { projectsData } from "../../data/projects";

type Data = {
  projects: typeof projectsData;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ projects: projectsData });
}
