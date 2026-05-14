"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, BrainCircuit, Code, Database, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-accent/30 text-accent mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-medium">Available for new opportunities</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Hi, I&apos;m <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent-secondary to-accent animate-gradient-x">
                Bhargav Ponkiya
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Software Engineer specializing in <span className="text-white font-medium">AI Integration</span>, scalable architecture, and full-stack web development.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-300 bg-accent rounded-full hover:bg-accent-hover shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-300 glass rounded-full hover:bg-white/10"
              >
                <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Visual Elements */}
          <div className="relative hidden lg:flex justify-center items-center h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="relative w-80 h-80 md:w-[22rem] md:h-[22rem]"
            >
              {/* Dynamic glowing background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent via-purple-500 to-accent-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Image Container with premium glass border */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-white/20 via-transparent to-white/5 backdrop-blur-sm border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)] z-10 overflow-hidden group">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 border-4 border-black/20 rounded-full z-20 pointer-events-none"></div>
                  <img
                    src="/profile.jpg"
                    alt="Bhargav Ponkiya"
                    className="w-full h-full object-cover rounded-full bg-[#111] transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Bhargav+Ponkiya&size=512&background=0D8ABC&color=fff";
                    }}
                  />
                </div>
              </div>

              {/* Orbiting Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50px] border border-white/5 rounded-full border-dashed pointer-events-none flex items-center justify-center z-0"
              >
                <div className="absolute -top-5 p-4 glass rounded-full shadow-lg shadow-accent/20 border border-accent/20">
                  <Terminal className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute -bottom-5 p-4 glass rounded-full shadow-lg shadow-accent-secondary/20 border border-accent-secondary/20">
                  <Database className="w-6 h-6 text-accent-secondary" />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
