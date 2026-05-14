"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-secondary">
              Bhargav Ponkiya
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex space-x-8 items-center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 pl-4 border-l border-white/20">
              <Link href="https://github.com/Bhargav-Ponkiya" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/bhargav-p-a0ab5a200/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center space-x-4 px-3 border-t border-white/10">
                <Link href="https://github.com/Bhargav-Ponkiya" target="_blank" className="text-gray-400 hover:text-white">
                  <GithubIcon className="w-6 h-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/bhargav-p-a0ab5a200/" target="_blank" className="text-gray-400 hover:text-white">
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
