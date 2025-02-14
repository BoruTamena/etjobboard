import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "../globals.css";


const pop= Poppins({
  subsets: ["latin"],
  weight:["100","400","500","900"]
})

export const metadata: Metadata = {
  title: "jobboard",
  description: "Ethio job board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div
        className={`${pop.className} anticipated` }
      >
        {children}

      </div>
  );
}
