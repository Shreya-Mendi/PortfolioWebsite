import type { NextApiRequest, NextApiResponse } from "next";
import { Experience } from "../../typings";
import path from "path";
import { promises as fs } from "fs";

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/experiences.json",
    "utf8"
  );
  const experiences: Experience[] = JSON.parse(fileContents);

  res.status(200).json({ experiences });
}
