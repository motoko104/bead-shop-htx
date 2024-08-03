import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./ui/fonts";

export const metadata: Metadata = {
  title: "The Bead Shop HTX",
  description: "the bead shop HTX website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${roboto} antialiased`}>{children}</body>
    </html>
  );
}
