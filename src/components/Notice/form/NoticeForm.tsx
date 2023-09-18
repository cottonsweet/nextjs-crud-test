"use client";

// React
import { useState, useEffect } from "react";

// service
import { getNoticeData } from "@/service/notice";

export default function NoticeForm() {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    async function fetchNotice() {
      const data = await getNoticeData();
      console.log(data);
    }

    fetchNotice();
  }, []);

  return (
    <form className="flex flex-col mx-auto my-auto">
      <textarea placeholder="공지사항" />
      <p>시간</p>
      <input placeholder="ㅇㅇ" />
      <div>
        <button>취소</button>
        <button>저장</button>
      </div>
    </form>
  );
}
