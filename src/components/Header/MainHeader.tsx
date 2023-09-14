// Next
import Link from "next/link";

// Data
import { HeaderList } from "../../../Data/data";

// Components
import HeaderTitle from "./HeaderTitle";

export default function MainHeader() {
  return (
    <header className="w-full max-w-screen-xl flex justify-between items-center bg-[#001e4c] text-base px-5 py-3 text-white mx-auto">
      <div className="flex items-center gap-8">
        <Link href="/notice">
          <HeaderTitle />
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
