import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContextWrapper from "@/context/ContextWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GoPro Argentina",
  description: "Sitio no oficial de GoPro, hecho por el Trupi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ContextWrapper>
          <Navbar/>
            <main>
          {children}
            </main>
          <Footer/>
        </ContextWrapper>
      </body>
    </html>
  );
}
