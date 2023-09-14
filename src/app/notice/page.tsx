// Components
import NoticeHeader from "@/components/Notice/NoticeHeader";

import NoticeCard from "@/components/Notice/NoticeCard";

export default function NoticePage() {
  return (
    <section className="w-full max-w-screen-lg mx-auto">
      <NoticeHeader title="공지사항" />
      <NoticeCard />
    </section>
  );
}
