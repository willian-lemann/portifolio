"use client";

import { useDarkMode } from "@/stores/dark";
import "../styles/globals.css";

import { Poppins } from "@next/font/google";
import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { classnames } from "@/utils/classnames";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--primary-font",
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
    <html>
      <body className={poppins.className}>
        <div className={classnames(darkMode ? "dark" : "")}>
          <div className="dark:bg-zinc-900">
            <Navigation />
            <div className="container">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
