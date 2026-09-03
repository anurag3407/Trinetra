import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRINETRA | Autonomous Crypto Forensics & Nearest VASP Attribution",
  description:
    "Transaction Reconnaissance & Intelligence Network for Exchange Tracking & Real-Time Attribution. Built for Smart India Hackathon (SIH 2026 PS 26182 & 26183) for MHA / I4C.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F0F0F0] text-[#121212] font-outfit antialiased selection:bg-[#F0C020] selection:text-[#121212]">
        {children}
      </body>
    </html>
  );
}
