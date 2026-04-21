import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway =  Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mirzah Muzammil | Full Stack Developer",
  description: "Portfolio of Mirzah Muzammil, a Full Stack Developer specializing in React.js, Next.js, Flutter, React Native, and Node.js.",
  keywords: ["Mirzah Muzammil", "Full Stack Developer", "Next.js", "React.js", "Flutter", "Portfolio"],
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
