import type { NextApiRequest, NextApiResponse } from "next";
import { PageInfo } from "../../typings";
import path from "path";
import { promises as fs } from "fs";

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/pageInfo.json",
    "utf8"
  );
  const pageInfo: PageInfo = JSON.parse(fileContents);

  res.status(200).json({ pageInfo });
}
