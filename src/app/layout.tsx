"use client";

import { useDarkMode } from "@/stores/dark";
import "../styles/globals.css";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode } = useDarkMode((state) => state);

  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div className={darkMode ? "dark" : ""}>{children}</div>
      </body>
    </html>
  );
}
