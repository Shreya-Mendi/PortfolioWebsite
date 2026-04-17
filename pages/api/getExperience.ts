import type { NextApiRequest, NextApiResponse } from "next";
import { experiencesData } from "../../data/experiences";

type Data = {
  experiences: typeof experiencesData;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ experiences: experiencesData });
}
