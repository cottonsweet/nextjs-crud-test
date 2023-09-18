// Next
// import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  const notices = await prisma.notice.findMany();
  return new Response(JSON.stringify(notices));
}

export async function POST() {
  const notice = await prisma.notice.create({
    data: {
      id: 2,
      createdAt: new Date(),
      title: "안녕하세요!",
      body: "본문 테스트.",
    },
  });
  return new Response(JSON.stringify("일단 포스트는.."));
}
