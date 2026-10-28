"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Layers, 
  Mic, 
  BrainCircuit, 
  Wrench,
  Sparkles
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  accent: string;
  pillHover: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Voice & Real-Time AI",
    icon: <Mic className="w-5 h-5 text-emerald-400" />,
    accent: "border-emerald-500/20 hover:border-emerald-500/40",
    pillHover: "hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-white",
    skills: ["OpenAI Realtime API", "LiveKit (WebRTC)", "Deepgram STT/TTS", "ElevenLabs", "Simli (POC)", "Voice Agents"],
  },
  {
    name: "AI & LLM Integration",
    icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
    accent: "border-cyan-500/20 hover:border-cyan-500/40",
    pillHover: "hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-white",
    skills: ["OpenAI API", "Claude", "Gemini", "n8n (HITL Orchestration)", "RAG Pipelines", "Vector Embeddings", "Prompt Engineering"],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-indigo-400" />,
    accent: "border-indigo-500/20 hover:border-indigo-500/40",
    pillHover: "hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white",
    skills: ["AWS (EC2, S3, CloudFront, CloudWatch, Lambda)", "LiveKit Cloud", "Docker", "GitHub Actions CI/CD", "Render", "Vercel"],
  },
  {
    name: "Languages",
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    accent: "border-emerald-500/20 hover:border-emerald-500/40",
    pillHover: "hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-white",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    name: "Backend Architecture",
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    accent: "border-cyan-500/20 hover:border-cyan-500/40",
    pillHover: "hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-white",
    skills: ["Node.js", "Express.js", "NestJS", "Python", "REST APIs", "GraphQL", "tRPC", "WebSockets"],
  },
  {
    name: "Frontend Engineering",
    icon: <Layout className="w-5 h-5 text-indigo-400" />,
    accent: "border-indigo-500/20 hover:border-indigo-500/40",
    pillHover: "hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "React Query"],
  },
  {
    name: "Databases & Caching",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    accent: "border-emerald-500/20 hover:border-emerald-500/40",
    pillHover: "hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-white",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis", "pgvector"],
  },
  {
    name: "Architecture & Queues",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    accent: "border-cyan-500/20 hover:border-cyan-500/40",
    pillHover: "hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-white",
    skills: ["Microservices", "Event-Driven Architecture", "RabbitMQ", "Nx Monorepo", "Connection Pooling"],
  },
  {
    name: "Tools & Integrations",
    icon: <Wrench className="w-5 h-5 text-indigo-400" />,
    accent: "border-indigo-500/20 hover:border-indigo-500/40",
    pillHover: "hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white",
    skills: ["Git", "Postman", "JMeter", "Jira", "Odoo ATS", "Recruit ATS", "Video Proctoring"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Technologies and frameworks I use to engineer low-latency AI pipelines, resilient distributed systems, and modern web applications.
          </p>
        </motion.div>

        {/* 3x3 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`glass-card p-6 sm:p-7 rounded-2xl relative border ${category.accent} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center space-x-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs font-mono font-medium text-gray-300 bg-white/[0.03] border border-white/[0.08] rounded-lg transition-all duration-200 cursor-default ${category.pillHover}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
