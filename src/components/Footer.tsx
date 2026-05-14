"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Intro */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-secondary inline-block mb-4">
              Bhargav Ponkiya
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Software Engineer & Full-Stack Developer specializing in scalable architecture and AI integration.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/Bhargav-Ponkiya" target="_blank" className="p-2 glass rounded-full hover:bg-white/10 transition-colors group">
                <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/bhargav-p-a0ab5a200/" target="_blank" className="p-2 glass rounded-full hover:bg-white/10 transition-colors group">
                <LinkedinIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </Link>
              <Link href="mailto:bhargavponkiya7@gmail.com" className="p-2 glass rounded-full hover:bg-white/10 transition-colors group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <Link href="#about" className="text-gray-400 hover:text-accent transition-colors w-fit">About Me</Link>
            <Link href="#skills" className="text-gray-400 hover:text-accent transition-colors w-fit">Skills</Link>
            <Link href="#experience" className="text-gray-400 hover:text-accent transition-colors w-fit">Experience</Link>
            <Link href="#projects" className="text-gray-400 hover:text-accent transition-colors w-fit">Projects</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
            <a href="mailto:bhargavponkiya7@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
              <Mail className="w-4 h-4 text-accent" />
              <span>bhargavponkiya7@gmail.com</span>
            </a>
            <a href="https://wa.me/919979166390" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
              <span className="w-4 h-4 text-accent">#</span>
              <span>+91 99791 66390</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bhargav Ponkiya. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="p-1.5 glass rounded-full group-hover:bg-accent transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
