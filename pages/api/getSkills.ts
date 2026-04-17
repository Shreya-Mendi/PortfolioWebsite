import type { NextApiRequest, NextApiResponse } from "next";
import { skillsData } from "../../data/skills";

type Data = {
  skills: typeof skillsData;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ skills: skillsData });
}
