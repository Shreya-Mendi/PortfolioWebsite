import type { NextApiRequest, NextApiResponse } from "next";
import { Social } from "../../typings";
import path from "path";
import { promises as fs } from "fs";

type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/socials.json",
    "utf8"
  );
  const socials: Social[] = JSON.parse(fileContents);

  res.status(200).json({ socials });
}
