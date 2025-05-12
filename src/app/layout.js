import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Space_Grotesk } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: "Pranj Patel | Software Engineer",
  description: "Full Stack Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className={`font-space-grotesk antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
