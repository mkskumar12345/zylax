import type { Metadata } from "next";
import rajdhani from "@/assets/fonts/rajdhani-fonts";
import "../assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Zylax",
  description: "Computers",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} antialiased`}>{children}</body>
    </html>
  );
}

