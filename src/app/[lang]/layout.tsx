"use client";

import { useDarkMode } from "@/stores/dark";
import "../../styles/globals.css";

import { Poppins } from "@next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "pt-BR" }];
}

type RootLayoutProps = {
  children: ReactNode;
  params: {
    lang: string;
  };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { darkMode } = useDarkMode((state) => state);

  return (
    <html lang={params.lang} className={poppins.className}>
      <body>
        <div className={darkMode ? "dark" : ""}>{children}</div>
      </body>
    </html>
  );
}
