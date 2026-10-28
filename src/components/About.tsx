"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages, CheckCircle2, UserCheck, Layers, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            <span>4+ Years · Full-Stack Systems Engineer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            I build production-grade backends, real-time AI systems, and cloud-native architectures — and I take full ownership of every layer, from the first line of code to the last deployment.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* What I Do — full width left card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-7 sm:p-9 rounded-2xl border border-white/10 hover:border-emerald-500/25 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">What I Build</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {[
                "Scalable REST & GraphQL APIs with clean service layers",
                "Real-time voice pipelines (STT → LLM → TTS)",
                "Event-driven microservices with RabbitMQ & queues",
                "Full-stack apps with React/Next.js frontends",
                "Cloud infrastructure on AWS — EC2, S3, CloudFront, Lambda",
                "CI/CD pipelines & automated deployments",
                "AI-integrated features: RAG, embeddings, prompt engineering",
                "Third-party integrations: ATS systems, webhooks, OAuth",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-white/[0.07] flex flex-wrap gap-2">
              {["TypeScript", "Node.js", "NestJS", "React", "Next.js", "PostgreSQL", "Redis", "AWS", "Docker"].map((pill) => (
                <span key={pill} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5">
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right column — stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-7 rounded-2xl border border-white/10 hover:border-indigo-500/25 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>

              <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                <h4 className="text-base font-bold text-white">Parul Institute of Technology</h4>
                <p className="text-sm text-emerald-400 font-medium mt-0.5">B.Tech — Computer Science &amp; Engineering</p>
                <div className="flex justify-between items-center text-xs text-slate-400 font-mono mt-3 pt-2 border-t border-white/5">
                  <span>2019 – 2023</span>
                  <span className="text-cyan-400 font-semibold">CGPA: 8.2 / 10.0</span>
                </div>
              </div>
            </motion.div>

            {/* Languages & Communication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-card p-7 rounded-2xl border border-white/10 hover:border-violet-500/25 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Languages &amp; Communication</h3>
              </div>

              <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    English (Fluent)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs">
                    Gujarati (Native)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs">
                    Hindi (Fluent)
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                  <Globe className="w-3.5 h-3.5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Comfortable with async work, technical walkthroughs, and written documentation for distributed international teams.</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
