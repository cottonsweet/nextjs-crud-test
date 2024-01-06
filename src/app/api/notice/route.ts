// lib
import prisma from "@/app/lib/prisma";
import dayjs from "dayjs";

export async function GET() {
  const notices = await prisma.notice.findMany();
  return new Response(JSON.stringify(notices));
}

export async function POST(req: Request) {
  const dbNow = (): Date => dayjs().add(9, "hour").toDate();
  const data = await req.json();

  const notice = await prisma.notice.create({
    data: {
      createdAt: dbNow(),
      title: data.title,
      body: data.desc,
      name:data.name
    },
  });
  console.log(notice);
  return new Response(JSON.stringify("포스트 요청 완료"));
}
