import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lagmodellen — Tverrsektorielt samarbeid i praksis",
  description: "Et rammeverk for å prøve ut Lagmodellen i egen virkelighet. Tverrsektorielt samarbeid i offentlig sektor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="font-body antialiased bg-primary-light text-text-dark">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
