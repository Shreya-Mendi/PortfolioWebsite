import type { NextApiRequest, NextApiResponse } from "next";
import { Skill } from "../../typings";
import path from "path";
import { promises as fs } from "fs";

type Data = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/skills.json",
    "utf8"
  );
  const skills: Skill[] = JSON.parse(fileContents);

  res.status(200).json({ skills });
}
