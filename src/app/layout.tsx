import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'RUNTEQ依存度チェッカー',
  description: 'あなたのRUNTEQ依存度を測定します。',
  openGraph: {
    title: 'RUNTEQ依存度チェッカー',
    description: 'あなたのRUNTEQ依存度を測定します。',
    url: "https://runteq-dependency-checker.vercel.app",
    images: [
      {
        url: "https://runteq-dependency-checker.vercel.app/images/ogp.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ["https://runteq-dependency-checker.vercel.app/images/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
