import type { NextApiRequest } from "next/"
import { NextResponse } from "next/server"

import { demoJobs } from "./demoJobs"

export const GET = async (req: NextApiRequest) => {
  const url = new URL(req.url as any)
  const query = url.searchParams
  const searchValue = query.get("searchValue")

  return NextResponse.json({})
}
