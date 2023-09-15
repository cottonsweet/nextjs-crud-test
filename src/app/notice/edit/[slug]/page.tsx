// Components
import NoticeForm from "@/components/Notice/form/NoticeForm";

interface Props {
  params: {
    slug: string;
  };
}

export default function NoticeEdit({ params: { slug } }: Props) {
  return (
    <div>
      <h1>공지사항</h1>
      <NoticeForm />
    </div>
  );
}
