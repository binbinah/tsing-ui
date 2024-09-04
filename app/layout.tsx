"use client";

import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState, useRef, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <html lang="zh" data-theme="lemonade">
      <body className={`${inter.className} bg-base-100`}>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar isOpen={sidebarOpen} sidebarRef={sidebarRef} />
        <main
          className={`container mx-auto mt-8 p-4 transition-all duration-300 ${
            sidebarOpen ? "ml-64" : ""
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
