import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav";
import Footer from "./containers/footer";

const pop= Poppins({
  subsets: ["latin"],
  weight:["100","400","500","900"]
})

export const metadata: Metadata = {
  title: "jobboard",
  description: "ethio jobboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pop.className} anticipated` }
      >
        {/* <NavBar/> */}
        {children}

        {/* <Footer/> */}
      </body>
    </html>
  );
}
