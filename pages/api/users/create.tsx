import client from "@libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const { name, email } = req.body;
  console.log(req.body);
  //   await client.user.create({
  //     data: {
  //       name,
  //       email,
  //     },
  //   });
  //   res.json({
  //     ok: true,
  //   });
}
