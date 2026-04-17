import type { NextApiRequest, NextApiResponse } from "next";
import { socialsData } from "../../data/socials";

type Data = {
  socials: typeof socialsData;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ socials: socialsData });
}
