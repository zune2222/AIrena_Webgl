import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Link from "next/link";
export const metadata: Metadata = {
  title: "AIrena",
  description: "AI랑 싸워서 이겨보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="absolute top-0 z-50 w-full flex justify-center p-4 bg-[rgba(34,34,34,0.2)] text-white">
          <Link href="/" className="mx-4 text-white no-underline">
            홈
          </Link>
          <Link href="/game" className="mx-4 text-white no-underline">
            게임
          </Link>
          <Link href="/board" className="mx-4 text-white no-underline">
            게시판
          </Link>
          <Link href="/login" className="mx-4 text-white no-underline">
            로그인
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
