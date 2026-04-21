import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mirzah Muzammil | Full Stack Developer",
  description: "Portfolio of Mirzah Muzammil, a Full Stack Developer specializing in React.js, Next.js, Flutter, React Native, and Node.js.",
  keywords: ["Mirzah Muzammil", "Full Stack Developer", "Next.js", "React.js", "Flutter", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
