import "@/styles/globals.css";

import { Poppins } from "@next/font/google";
import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";

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

export const metadata = {
  title: {
    default: "Willian Lemann",
    template: "%s | Willian Lemann",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <div>
          <div className="bg-black">
            <Navigation />
            <div className="md:container px-8">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
