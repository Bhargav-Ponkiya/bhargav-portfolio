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
  title: "Bhargav Ponkiya | Software Engineer & AI Integrator",
  description: "Portfolio of Bhargav Ponkiya, a Full-Stack Developer and AI Integrator specializing in scalable, modern web applications.",
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
      <body className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white flex flex-col relative overflow-x-hidden">
        {/* Background ambient glow */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] mix-blend-screen opacity-50 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-accent-secondary/20 blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-4000"></div>
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
