export async function getNoticeData() {
  const res = await fetch("/api/notice");
  const data = res.json();

  if (!res.ok) {
    throw new Error("서버 요청에 실패하였습니다 !");
  }

  return data;
}
