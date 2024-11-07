import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const  open_sans = Open_Sans({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  preload: true, 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>{children}</body>
    </html>
  );
}