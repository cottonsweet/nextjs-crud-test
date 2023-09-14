// Next
import Link from "next/link";

// Data
import { HeaderList } from "../../../Data/data";

// Components
import HeaderTitle from "./HeaderTitle";

export default function MainHeader() {
  return (
    <header className="w-full flex justify-between bg-slate-500">
      <div className="flex">
        <HeaderTitle />
        <p className="text-red-500">홈</p>
      </div>

      <nav className="flex">
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
