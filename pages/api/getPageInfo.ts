import type { NextApiRequest, NextApiResponse } from "next";
import { pageInfoData } from "../../data/pageInfo";

type Data = {
  pageInfo: typeof pageInfoData;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ pageInfo: pageInfoData });
}
