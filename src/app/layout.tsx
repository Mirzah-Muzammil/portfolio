import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirzah Muzammil | Web & Mobile Developer",
  description:
    "Full stack and mobile developer based in Kannur, Kerala. Building thoughtful digital experiences with React, Next.js, Flutter and Node.js.",
  keywords: [
    "Mirzah Muzammil",
    "Full Stack Developer",
    "Next.js",
    "React.js",
    "Flutter",
  ],
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
