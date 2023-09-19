const noticeDateTiem = (currentDate: string) => {
  // 초
  const sec = 1;
  // 분
  const min = sec * 60;
  // 시
  const hour = min * 60;
  // 일
  const day = hour * 24;

  const today = new Date();
  const elapsedTime = Math.trunc(
    (today.getTime() - Number(currentDate)) / 1000
  );
  let elapsedText = "";
  if (elapsedTime < sec) {
    elapsedText = "방금 전";
  } else if (elapsedTime < min) {
    elapsedText = elapsedTime + "초 전";
  } else if (elapsedTime < hour) {
    elapsedText = Math.trunc(elapsedTime / min) + "분 전";
  } else if (elapsedTime < day) {
    elapsedText = Math.trunc(elapsedTime / hour) + "시간 전";
  } else if (elapsedTime < day * 15) {
    elapsedText = Math.trunc(elapsedTime / day) + "일 전";
  }

  return elapsedText;
};

export const sliceCreateAt = (date: string) => date.slice(0, 10);

export default noticeDateTiem;
