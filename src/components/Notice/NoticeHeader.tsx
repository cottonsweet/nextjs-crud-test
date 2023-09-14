// Components
import SearchInput from "@/components/SearchInput/SearchInput";

interface Props {
  title: string;
}

export default function NoticeHeader({ title }: Props) {
  return (
    <div className="flex justify-between mt-[60px]">
      <h1 className="text-[32px] font-semibold">{title}</h1>
      <SearchInput />
    </div>
  );
}
