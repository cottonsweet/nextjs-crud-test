// Next
import Link from "next/link";

// data
import { NoticeType } from "../../../data/data";

// util
import sliceTextLength from "@/util/sliceTextLength";

interface Props {
  currentPageData: NoticeType[];
}

export default function NoticeCard({ currentPageData }: Props) {
  return (
    <ul className="border-y-2 border-[#DEDEDE] h-auto py-3 px-4 mt-10">
      {currentPageData.map((notice, _) => {
        return (
          <li key={notice.id} className="">
            <div className="flex flex-col gap-3 mb-5">
              <div className="text-[#222]">{sliceTextLength(notice.title)}</div>
              <div className="text-[#707070] text-sm">{notice.time}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
