import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Home from "./home";
import About from "./about/page";
import Contact from "./contact/page";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grace Solution",
  description: "Grace Solution Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blue">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
