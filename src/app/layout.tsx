import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--primary-font",
});

type RootLayoutProps = {
  children: ReactNode;
  params: {
    lang: string;
  };
};

export const metadata = {
  title: {
    default: "Willian Lemann",
    template: "%s | Willian Lemann",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className="bg-black">
        <Navigation />

        <div className="md:container px-8 mb-20">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
