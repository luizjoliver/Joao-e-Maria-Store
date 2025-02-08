import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/components/landPage/NavBarComponent";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loja João e Maria - JM store",
  description: "Somos a loja de vestuários  ''João e Maria'' , estamos no mercado há 10 anos , atualmente possuimos unidades em ceilândia QNO ETC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NavBarComponent />

        {children}
      </body>
    </html>
  );
}
