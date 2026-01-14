import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import ScrollToTop from "@/components/ui/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R4A10 - Compléments Web | IUT Paris 8",
  description: "Cours de développement frontend avec React - IUT Paris 8",
  keywords: ["React", "JavaScript", "TypeScript", "Frontend", "IUT Paris 8", "R4A10"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReadingProgressBar />
        <ScrollToTop />
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8 xl:pr-80">
              <div className="max-w-4xl mx-auto">
                {children}
              </div>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
