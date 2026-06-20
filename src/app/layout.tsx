import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import { Space_Mono, Inter } from "next/font/google";

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
