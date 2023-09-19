export interface NoticeReq {
  createAt: Date;
  title: string;
  desc: string;
}

export async function getNoticeData() {
  const res = await fetch("/api/notice");
  const data = res.json();

  if (!res.ok) {
    throw new Error("서버 요청에 실패하였습니다 !");
  }

  return data;
}

export async function postNoticeData(notice: NoticeReq) {
  const res = await fetch("/api/notice", {
    method: "POST",
    body: JSON.stringify(notice),
  });
  const data = res.json();

  if (!res.ok) {
    throw new Error("서버 요청에 실패하였습니다.");
  }

  return data;
}
