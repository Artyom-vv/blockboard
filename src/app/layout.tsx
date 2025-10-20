import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss"
import Header from "@/components/Header/Header";
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'
register();

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlockBoard",
  description: "BlockBoard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
      <div className="wrapper h-full min-h-full overflow-x-hidden">
          <Header />
          {children}
      </div>
      </body>
    </html>
  );
}
