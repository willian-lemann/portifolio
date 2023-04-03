"use client";

import { useDarkMode } from "@/stores/dark";
import "../styles/globals.css";

import { Poppins } from "@next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}

type RootLayoutProps = {
  children: ReactNode;
  params: {
    lang: string;
  };
};

export default function RootLayout({ children }: RootLayoutProps) {
  const darkMode = useDarkMode((state) => state.darkMode);

  return (
    <html className={poppins.className}>
      <body>
        <div className={darkMode ? "dark" : ""}>{children}</div>
      </body>
    </html>
  );
}
