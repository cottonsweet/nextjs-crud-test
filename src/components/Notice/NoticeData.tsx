// // Dummy Data
// import { NoticeDataList } from "../../../data/data";

// Components
import NoticeCard from "./NoticeCard";
// test

export default function NoticeData() {
  return (
    <ul className="border-y-2 border-[#DEDEDE] h-auto py-3 px-4 mt-10 flex">
      {/* {NoticeDataList.map((notice, _) => {
        return (
          <li key={notice.id}>
            <NoticeCard notice={notice} />
          </li>
        );
      })} */}
    </ul>
  );
}
