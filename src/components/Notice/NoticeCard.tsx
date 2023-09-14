// Next
import Link from "next/link";

import { NoticeType } from "../../../data/data";

interface Props {
  notice: NoticeType;
}

export default function NoticeCard({ notice: { id, title, time } }: Props) {
  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{time}</div>
    </div>
  );
}
