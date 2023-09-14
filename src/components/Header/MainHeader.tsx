// Next
import Link from "next/link";

// Data
import { HeaderList } from "../../../data/data";

// Components
import HeaderSVG from "./HeaderSVG";

export default function MainHeader() {
  return (
    <header className="w-full flex justify-between items-center bg-[#001e4c] px-5 py-3 text-white mx-auto">
      <div className="flex items-center gap-8">
        <Link href="/notice">
          <HeaderSVG />
        </Link>
        <Link href="/">홈</Link>
      </div>
      <nav className="flex gap-7">
        {HeaderList?.map((item, _) => {
          return (
            <Link key={item.path} href={item.path}>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
