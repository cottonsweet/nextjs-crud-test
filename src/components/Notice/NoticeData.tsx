// Dummy Data
import { NoticeDataList } from "../../../data/data";

// Components
import Paging from "../Pagination/Paging";

export default function NoticeData() {
  return <Paging NoticeDataList={NoticeDataList} />;
}
