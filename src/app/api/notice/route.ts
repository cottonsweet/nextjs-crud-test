// Next
// import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  const notices = await prisma.notice.findMany();
  return new Response(JSON.stringify(notices));
}
