import type { Metadata } from "next";
import "./../styles/normalize.scss";
import "./../styles/global.scss";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Endure Route",
  description: "Endure Route",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <body >{children}</body> */}
    </html>
  );
}
