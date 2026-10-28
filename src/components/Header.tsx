"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Sun, Moon, Monitor } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

type Theme = "dark" | "light" | "system";

const themeOptions: { value: Theme; icon: React.ReactNode; label: string }[] = [
  { value: "dark", icon: <Moon className="w-3.5 h-3.5" />, label: "Dark" },
  { value: "light", icon: <Sun className="w-3.5 h-3.5" />, label: "Light" },
  { value: "system", icon: <Monitor className="w-3.5 h-3.5" />, label: "System" },
];

function applyTheme(theme: Theme) {
  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("light-theme", !isDark);
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("portfolio-theme") as Theme) || "dark";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close theme menu on outside click
  useEffect(() => {
    if (!themeMenuOpen) return;
    const handler = () => setThemeMenuOpen(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [themeMenuOpen]);

  const handleThemeChange = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("portfolio-theme", t);
    applyTheme(t);
    setThemeMenuOpen(false);
  };

  const currentThemeIcon = themeOptions.find((o) => o.value === theme)?.icon ?? <Moon className="w-3.5 h-3.5" />;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Bhargav<span className="text-emerald-400">.dev</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex space-x-7 items-center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
              {/* GitHub */}
              <Link href="https://github.com/Bhargav-Ponkiya" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </Link>
              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/in/bhargav-p-a0ab5a200/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </Link>

              {/* Theme Toggle */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all text-xs font-mono"
                  aria-label="Switch theme"
                >
                  {currentThemeIcon}
                </button>

                <AnimatePresence>
                  {themeMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-32 rounded-xl bg-background/95 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden z-50"
                    >
                      {themeOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleThemeChange(opt.value)}
                          className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-mono transition-colors text-left ${
                            theme === opt.value
                              ? "text-emerald-400 bg-emerald-500/10"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {opt.icon}
                          {opt.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className="bg-emerald-400 hover:bg-emerald-300 text-black px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] transform hover:-translate-y-0.5"
              >
                Contact
              </Link>
            </div>
          </motion.nav>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="flex items-center p-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400"
                aria-label="Switch theme"
              >
                {currentThemeIcon}
              </button>
              <AnimatePresence>
                {themeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-32 rounded-xl bg-[#0e1525]/95 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden z-50"
                  >
                    {themeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleThemeChange(opt.value)}
                        className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-mono transition-colors text-left ${
                          theme === opt.value
                            ? "text-emerald-400 bg-emerald-500/10"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {opt.icon}
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
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
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center justify-between px-3 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <Link href="https://github.com/Bhargav-Ponkiya" target="_blank" className="text-slate-400 hover:text-white">
                    <GithubIcon className="w-5 h-5" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/bhargav-p-a0ab5a200/" target="_blank" className="text-slate-400 hover:text-white">
                    <LinkedinIcon className="w-5 h-5" />
                  </Link>
                </div>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-emerald-400 text-black px-4 py-2 rounded-lg text-xs font-bold"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
