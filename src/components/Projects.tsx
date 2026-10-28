"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles, Terminal } from "lucide-react";
import { GithubIcon } from "./Icons";
import Link from "next/link";

interface Project {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink: string;
  accentGlow: string;
  badgeColor: string;
}

const projects: Project[] = [
  {
    title: "NovaTel",
    subtitle: "Real-Time AI Voice Agent",
    tagline: "~1.3s Perceived Latency • Self-Healing Prompt Loop",
    description: "A real-time AI voice agent for telecom billing support built with Deepgram STT, Gemini LLM, and Deepgram Aura TTS over LiveKit WebRTC with Socket.IO. Features an autonomous self-healing prompt loop: post-call QA evaluates the call; scores below 90 trigger a meta-prompt generating surgical prompt patches stored in MongoDB and auto-loaded for the next call.",
    tech: ["Node.js", "React", "TypeScript", "LiveKit", "WebRTC", "Deepgram STT/TTS", "Gemini API", "MongoDB"],
    liveLink: "https://voice-agent-bhargavp.vercel.app",
    githubLink: "https://github.com/Bhargav-Ponkiya/voice_agent",
    accentGlow: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    badgeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
  },
  {
    title: "Enterprise AI Agent (HITL)",
    subtitle: "Autonomous Support Pipeline",
    tagline: "Cryptographic Human-in-the-Loop Governance",
    description: "A self-hosted, zero-API-cost AI orchestration pipeline built in n8n. Automates high-risk Tier-2 customer support actions (refunds, discounts) using local LLMs while strictly enforcing a cryptographic HMAC-signed Human-in-the-Loop (HITL) approval gate to prevent unauthorized financial transactions or AI hallucinations.",
    tech: ["n8n", "Local LLMs", "HMAC Auth", "Webhooks", "HITL Governance", "Docker", "REST APIs"],
    githubLink: "https://github.com/Bhargav-Ponkiya/n8n-hitl-ai-agent",
    accentGlow: "from-amber-500/20 via-rose-500/10 to-transparent",
    badgeColor: "text-amber-400 border-amber-500/20 bg-amber-500/10"
  },
  {
    title: "SkillBridge",
    subtitle: "AI Skill Exchange Platform",
    tagline: "Gemini pgvector Semantic Matching • $0/mo Deploy",
    description: "Peer-to-peer skill-trading platform designed with a modular NestJS monolith backend featuring GraphQL subscriptions, Google OAuth, and cursor-based pagination. Features semantic skill matching via Gemini text-embedding-004 + pgvector cosine similarity, real-time chats over WebSockets + Redis pub/sub, and async queues via RabbitMQ.",
    tech: ["NestJS", "Next.js", "GraphQL", "PostgreSQL", "pgvector", "Redis", "RabbitMQ", "Gemini API"],
    liveLink: "https://skill-bridge-bhargavp.vercel.app/",
    githubLink: "https://github.com/Bhargav-Ponkiya/Skill-Bridge",
    accentGlow: "from-cyan-500/20 via-blue-500/10 to-transparent",
    badgeColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10"
  },
  {
    title: "PulseBoard",
    subtitle: "Developer Observability Platform",
    tagline: "4-Service Microservices Monorepo • Automated SRE",
    description: "An open-source Datadog alternative correlating downtime with GitHub commits and error logs, automatically generating root-cause incident reports via Gemini Flash. Built as a 4-service NestJS microservices monorepo over RabbitMQ with semantic log search via MongoDB Atlas Vector Search (HNSW) and Redis SETNX alert debouncing.",
    tech: ["NestJS Microservices", "Next.js", "MongoDB", "PostgreSQL", "Redis", "RabbitMQ", "SSE", "Gemini API"],
    liveLink: "https://pulse-board-bhargavp.vercel.app/",
    githubLink: "https://github.com/Bhargav-Ponkiya/PulseBoard",
    accentGlow: "from-indigo-500/20 via-purple-500/10 to-transparent",
    badgeColor: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
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
            <Terminal className="w-3.5 h-3.5" />
            <span>Real-World Systems &amp; Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects &amp; Architectures
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Full-stack architectures demonstrating real-time voice transport, self-healing LLM pipelines, cryptographic safety, and distributed queues.
          </p>
        </motion.div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-7 sm:p-9 rounded-2xl relative flex flex-col justify-between overflow-hidden border border-white/10 group"
            >
              {/* Subtle Ambient Glow */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${project.accentGlow} pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity`}></div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <h4 className="text-sm font-semibold text-emerald-400 mb-4">
                  {project.subtitle}
                </h4>
                
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-xs font-mono text-gray-300 bg-white/[0.03] rounded-md border border-white/[0.07]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/[0.07]">
                {project.liveLink ? (
                  <>
                    <Link 
                      href={project.liveLink}
                      target="_blank"
                      className="inline-flex items-center justify-center w-full sm:w-1/2 py-3 px-4 bg-emerald-400 hover:bg-emerald-300 text-black text-sm font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                    >
                      <span>View Live Demo</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                    
                    <Link 
                      href={project.githubLink}
                      target="_blank"
                      className="inline-flex items-center justify-center w-full sm:w-1/2 py-3 px-4 bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-semibold rounded-xl transition-all border border-white/10 hover:border-white/20"
                    >
                      <GithubIcon className="w-4 h-4 mr-2" />
                      <span>View Repository</span>
                    </Link>
                  </>
                ) : (
                  <Link 
                    href={project.githubLink}
                    target="_blank"
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-amber-400 to-rose-400 hover:from-amber-300 hover:to-rose-300 text-black text-sm font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                  >
                    <GithubIcon className="w-4 h-4 mr-2" />
                    <span>View Repository &amp; Architecture</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Render cold-start notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-white/[0.02] border border-white/[0.05] px-4 py-2 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-400/70 flex-shrink-0" />
            Live backends hosted on Render free tier — may take 20–30s to cold-start on first load.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
