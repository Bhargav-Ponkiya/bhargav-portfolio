"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Cpu, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const metrics = [
  { label: "Production Experience", value: "4+ Years", desc: "Full-stack systems & architecture" },
  { label: "Engineering Leadership", value: "Tech Lead", desc: "End-to-end technical ownership" },
  { label: "Real-Time Systems", value: "Voice AI", desc: "Sub-second streaming pipelines" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-left"
          >
            {/* Role Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6 text-xs sm:text-sm font-mono backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Full-Stack &amp; Voice AI Engineer · 4+ Years</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              I Build Systems.{" "}
              <span className="text-gradient-ai">
                I Own the Outcome.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-4 max-w-xl leading-relaxed">
              Hi, I&apos;m <span className="text-white font-semibold">Bhargav Ponkiya</span>. I design and ship scalable backends, real-time AI pipelines, and cloud-native architectures — end to end, without hand-holding.
            </p>

            <p className="text-base text-slate-400 mb-10 max-w-xl leading-relaxed">
              When I commit to something,{" "}
              <span className="text-emerald-400 font-medium">I work like a machine</span> — no clock-watching, no half-measures. I take full ownership and see every challenge through to production.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="#philosophy"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-xl transition-all border border-white/10 hover:border-emerald-500/30 transform hover:-translate-y-0.5"
              >
                <Cpu className="w-4 h-4 mr-2 text-emerald-400" />
                <span>How I Work</span>
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm sm:text-base font-medium text-slate-400 hover:text-white rounded-xl transition-colors hover:bg-white/5"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column — Clean Value Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="w-full max-w-md space-y-4">

              {/* Profile card */}
              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-emerald-400 via-cyan-400 to-violet-500 flex-shrink-0">
                    <img
                      src="/profile.jpg"
                      alt="Bhargav Ponkiya"
                      className="w-full h-full object-cover rounded-[10px]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://ui-avatars.com/api/?name=Bhargav+Ponkiya&size=256&background=34d399&color=0a0e1a";
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">Bhargav Ponkiya</h3>
                    <p className="text-emerald-400 text-xs font-mono mt-0.5">Full-Stack Engineer · Voice AI · Cloud</p>
                    <p className="text-slate-400 text-xs mt-1">Gujarat, India — Remote</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    { label: "Specialization", value: "Backend · AI Systems · Cloud" },
                    { label: "Approach", value: "Full ownership, end-to-end" },
                    { label: "Open to", value: "Interesting engineering problems" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center text-xs font-mono py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-slate-400">{row.label}</span>
                      <span className="text-slate-200">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack chip cloud */}
              <div className="glass-card p-5 rounded-2xl border border-white/[0.08]">
                <p className="text-xs font-mono text-slate-400 mb-3">Core stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "TypeScript", "React", "Next.js", "NestJS", "OpenAI", "LiveKit", "AWS", "PostgreSQL", "Redis"].map((tech) => (
                    <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-emerald-500/30 hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Assessment invite — minimal */}
              <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-emerald-500/8 border border-emerald-500/20 text-xs font-mono text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Open to technical assessment tasks based on my experience</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 pt-8 border-t border-white/[0.07]"
        >
          {metrics.map((item, idx) => (
            <div key={idx} className="glass-panel p-4 sm:p-5 text-left border border-white/[0.06] hover:border-emerald-500/20 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-emerald-400 mb-0.5">
                {item.label}
              </div>
              <div className="text-xs text-slate-400">
                {item.desc}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
