// Next
import Link from "next/link";

// util
import sliceTextLength from "@/util/sliceTextLength";
import { sliceCreateAt } from "@/util/noticeDateTime";

interface Props {
  noticeData: noticeData[];
}

interface noticeData {
  id: number;
  title: string;
  createdAt: string;
  body: string;
}

export default function NoticeCard({ noticeData }: Props) {
  return (
    <ul className="border-y-2 border-[#DEDEDE] h-auto py-3 px-4 mt-10">
      {noticeData?.map((notice, _) => {
        {
          console.log(notice.createdAt.slice(0, 10));
        }
        return (
          <li key={notice.id} className="">
            <div className="flex flex-col gap-3 mb-5">
              <div className="text-[#222]">{sliceTextLength(notice.title)}</div>
              <div className="text-[#707070] text-sm">
                {sliceCreateAt(notice.createdAt)}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
