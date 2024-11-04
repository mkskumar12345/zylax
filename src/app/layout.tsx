import type { Metadata } from "next";
import rajdhani from "@/assets/fonts/rajdhani-fonts";
import "../assets/styles/globals.css";
import Navbar from "@/components/Home/Navbar/Navbar";
import Footer from "@/components/Home/Footer/Footer";

export const metadata: Metadata = {
  title: "Zylax",
  description: "Computers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} antialiased`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
