import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "퍼스널 컬러 진단 | Personal Color Finder",
  description: "간단한 설문을 통해 당신만의 퍼스널 컬러를 찾아보세요. 봄, 여름, 가을, 겨울 중 어떤 타입인지 알아보고 맞춤 추천을 받아보세요.",
  keywords: "퍼스널컬러, 컬러진단, 웜톤, 쿨톤, 봄웜톤, 여름쿨톤, 가을웜톤, 겨울쿨톤",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
