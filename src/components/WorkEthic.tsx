"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Flame, Heart, MessageSquareCode, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WorkEthic() {
  const principles = [
    {
      title: "Extreme Ownership",
      subtitle: "Zero excuses, full accountability",
      description: "I treat every codebase, cloud bill, and architectural decision as my own responsibility. From design to production monitoring, I don't pass the blame — I fix the problem and improve the process.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      tag: "Accountability",
      accent: "border-emerald-500/20 group-hover:border-emerald-500/40"
    },
    {
      title: "No-Clock Dedication",
      subtitle: "Commitment that doesn't stop at 6 PM",
      description: "When I'm committed to a delivery or a critical production issue, I work through it — day and night — until it's done right. I don't watch the clock. I watch the system metrics until everything is green.",
      icon: <Flame className="w-6 h-6 text-amber-400" />,
      tag: "Commitment",
      accent: "border-amber-500/20 group-hover:border-amber-500/40"
    },
    {
      title: "Obsession with Craft",
      subtitle: "Clean code, clean architecture, clean documentation",
      description: "I don't ship dirty hacks. I write clean, maintainable code with proper abstractions, testable flows, and efficient database patterns — the kind of code a senior architect can read and respect.",
      icon: <Heart className="w-6 h-6 text-rose-400" />,
      tag: "Code Quality",
      accent: "border-rose-500/20 group-hover:border-rose-500/40"
    },
    {
      title: "Radical Transparency",
      subtitle: "Honest timelines, early risk flags, clear trade-offs",
      description: "No sugarcoating. I surface technical risks before they become incidents, give honest timelines, propose pragmatic trade-offs, and maintain documentation so async collaboration actually works.",
      icon: <MessageSquareCode className="w-6 h-6 text-cyan-400" />,
      tag: "Integrity",
      accent: "border-cyan-500/20 group-hover:border-cyan-500/40"
    }
  ];

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>Engineering Philosophy &amp; Work Ethic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How I Show Up, Every Single Time
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Technical skills can be learned. What you can&apos;t learn overnight is genuine ownership, relentless drive, and honesty under pressure. These aren&apos;t values I advertise — they&apos;re how I operate by default.
          </p>
        </motion.div>

        {/* 4 Core Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {principles.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-7 sm:p-8 rounded-2xl relative group border ${item.accent}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-gray-400 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <h4 className="text-sm font-medium text-emerald-400 mb-3">
                {item.subtitle}
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Spotlight: The Zero-Risk Technical Challenge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-8 sm:p-10 overflow-hidden bg-gradient-to-br from-emerald-950/40 via-[#0d1320] to-cyan-950/30 border border-emerald-500/25 shadow-[0_0_50px_rgba(52,211,153,0.10)]"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
                <span>Open Invitation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Skip the guesswork — give me a real challenge
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Resumes don&apos;t capture execution quality. If you want to see how I actually think and ship, send me a 24–48 hour technical task or architectural problem. Judge the code, the approach, and the communication — no commitment required.
              </p>
            </div>

            <div className="flex-shrink-0 w-full sm:w-auto">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-xl transition-all shadow-[0_0_25px_rgba(52,211,153,0.4)] hover:shadow-[0_0_35px_rgba(52,211,153,0.6)] transform hover:-translate-y-0.5"
              >
                <span>Send a Challenge</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
