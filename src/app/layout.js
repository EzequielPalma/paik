import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <Script src="https://cdn.rawgit.com/mrturck/aframe-joystick/master/joystick.min.js"/>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
