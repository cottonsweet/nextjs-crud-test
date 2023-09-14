// CSS
import "./globals.css";

// Next
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

// Components
import MainHeader from "@/components/Header/MainHeader";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Block-Smith",
  description: "블록스미스 프론트엔드 과제",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <MainHeader />
        <main> {children}</main>
      </body>
    </html>
  );
}
