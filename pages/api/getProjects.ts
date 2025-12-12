import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../typings";
import path from "path";
import { promises as fs } from "fs";

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/projects.json",
    "utf8"
  );
  const projects: Project[] = JSON.parse(fileContents);

  res.status(200).json({ projects });
}
