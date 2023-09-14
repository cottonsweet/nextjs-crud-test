// Components
import NoticeHeader from "@/components/Notice/NoticeHeader";

import NoticeData from "@/components/Notice/NoticeData";

export default function NoticePage() {
  return (
    <section className="w-full max-w-screen-lg mx-auto">
      <NoticeHeader title="공지사항" />
      <NoticeData />
    </section>
  );
}
