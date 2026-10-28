"use client";

import Link from "next/link";
import { Mail, ArrowUp, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08090d] border-t border-white/[0.08] pt-16 pb-10 relative overflow-hidden">
      {/* Decorative top gradient separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Tagline (5 cols) */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="text-2xl font-bold text-white tracking-tight">
                Bhargav<span className="text-emerald-400">.dev</span>
              </span>
            </Link>

            <p className="text-gray-400 max-w-sm mb-6 text-sm leading-relaxed">
              Tech Lead &amp; Full-Stack Systems Engineer specializing in real-time voice AI, distributed backends, and full product ownership.
            </p>

            <div className="flex space-x-3">
              <Link href="https://github.com/Bhargav-Ponkiya" target="_blank" className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/30 transition-all text-gray-400 hover:text-white" aria-label="GitHub">
                <GithubIcon className="w-4 h-4" />
              </Link>
              <Link href="https://www.linkedin.com/in/bhargav-p-a0ab5a200/" target="_blank" className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/30 transition-all text-gray-400 hover:text-white" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </Link>
              <Link href="mailto:bhargavponkiya7@gmail.com" className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/30 transition-all text-gray-400 hover:text-white" aria-label="Email">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 flex flex-col space-y-2.5 text-sm">
            <h3 className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider mb-2">Navigation</h3>
            <Link href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors w-fit">About Me</Link>
            <Link href="#philosophy" className="text-gray-400 hover:text-emerald-400 transition-colors w-fit">Work Ethic &amp; Guarantee</Link>
            <Link href="#skills" className="text-gray-400 hover:text-emerald-400 transition-colors w-fit">Skills Arsenal</Link>
            <Link href="#experience" className="text-gray-400 hover:text-emerald-400 transition-colors w-fit">Experience &amp; Impact</Link>
            <Link href="#projects" className="text-gray-400 hover:text-emerald-400 transition-colors w-fit">Featured Projects</Link>
          </div>

          {/* Contact & Status (4 cols) */}
          <div className="md:col-span-4 flex flex-col space-y-3 text-sm">
            <h3 className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider mb-2">Direct Contact</h3>
            <a href="mailto:bhargavponkiya7@gmail.com" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 font-mono text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>bhargavponkiya7@gmail.com</span>
            </a>
            <a href="https://wa.me/919979166390" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 font-mono text-xs sm:text-sm">
              <span className="w-4 h-4 text-emerald-400 font-bold flex-shrink-0">#</span>
              <span>+91 99791 66390 (WhatsApp)</span>
            </a>
            <div className="pt-2 text-xs font-mono text-gray-400">
              Timezone: IST (UTC+5:30) &bull; 4&ndash;6h European (CET) Overlap
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/[0.07] text-xs font-mono text-gray-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Bhargav Ponkiya &bull; Engineered with Extreme Ownership.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors group"
          >
            <span>Back to top</span>
            <div className="p-1 rounded-lg bg-white/5 border border-white/10 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
