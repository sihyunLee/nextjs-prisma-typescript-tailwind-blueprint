import client from "@libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      name: "test",
      email: "hi@mail.com",
    },
  });
  res.json({
    ok: true,
  });
}
