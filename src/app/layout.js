import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

const space = localFont({
  src: [{ path: "../../public/fonts/SPACE.ttf" }],
  variable: "--font-space",
});
export const metadata = {
  title: "Aker Portfolio",
  description: "Created by Aditya Kandel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${space.variable} font-sans`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
