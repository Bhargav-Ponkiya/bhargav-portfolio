import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhargav Ponkiya | Tech Lead & Voice AI Systems Engineer",
  description: "Portfolio of Bhargav Ponkiya, a Tech Lead and Full-Stack Systems Engineer specializing in real-time voice AI, distributed systems, and scalable cloud architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-hidden">
        {/* Background ambient glow — deep navy blue */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[55%] rounded-full bg-blue-600/12 blur-[180px] animate-pulse-slow"></div>
          <div className="absolute top-[30%] right-[-8%] w-[42%] h-[42%] rounded-full bg-emerald-600/8 blur-[160px]"></div>
          <div className="absolute bottom-[-5%] left-[15%] w-[60%] h-[40%] rounded-full bg-indigo-600/8 blur-[200px]"></div>
        </div>

        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
