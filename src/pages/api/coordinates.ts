// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import coordinateData from "./data/coordinate.js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  console.log(body);
  res.status(200).json(coordinateData);
}
