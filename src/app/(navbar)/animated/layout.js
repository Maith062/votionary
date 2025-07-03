import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/sections/Header";
import Footer from "@/sections/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Votionary",
  description: "Join a community of anime and manga fans",
  icons: "/images/browser_icon1_cbg.png",
};

export default function AnimatedLayour({ children }) {
  return (
    
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200`}
      >
        <Header lightMode={false}/> {/*Will be a changed to be darker*/}
        {children}
      </div>
  );
}
