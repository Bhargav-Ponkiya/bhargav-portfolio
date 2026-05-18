"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import Link from "next/link";

const projects = [
  {
    title: "SkillBridge",
    subtitle: "AI-Powered Skill Exchange Platform",
    description: "Peer-to-peer skill-trading platform designed with a modular NestJS monolith backend featuring GraphQL subscriptions, Google OAuth, and cursor-based pagination. Incorporates semantic skill matching via Gemini text-embedding-004 + pgvector cosine similarity, real-time chats powered by WebSockets + Redis pub/sub, and async workflows using RabbitMQ. Deployed entirely at $0/month with AI summaries streamed via Gemini Flash + SSE.",
    tech: ["NestJS", "Next.js", "GraphQL", "PostgreSQL", "pgvector", "Redis", "RabbitMQ", "Gemini API", "WebSockets"],
    liveLink: "https://skill-bridge-bhargavp.vercel.app/",
    githubLink: "https://github.com/Bhargav-Ponkiya/Skill-Bridge",
    color: "from-accent to-blue-600"
  },
  {
    title: "PulseBoard",
    subtitle: "AI-Powered Developer Observability Platform",
    description: "An open-source Datadog alternative that correlates service downtime with GitHub commits and error logs, automatically generating detailed AI incident reports via Gemini Flash. Built as a 4-service NestJS microservices monorepo over RabbitMQ. Features semantic log search using Google Embeddings + MongoDB Atlas Vector Search (HNSW), a Redis SETNX debounce to prevent alert spam, and automated polling with historical data persisted in PostgreSQL.",
    tech: ["NestJS Microservices", "Next.js", "MongoDB", "PostgreSQL", "Redis", "RabbitMQ", "SSE", "Gemini API"],
    liveLink: "https://pulse-board-bhargavp.vercel.app/",
    githubLink: "https://github.com/Bhargav-Ponkiya/PulseBoard",
    color: "from-accent-secondary to-purple-600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500 z-0"></div>
              
              <div className="glass p-8 md:p-10 rounded-3xl relative z-10 h-full flex flex-col group-hover:bg-white/5 transition-colors duration-500 border border-white/10 group-hover:border-white/20">
                {/* Decorative Icon */}
                <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${project.color} shadow-lg`}>
                  <Code2 className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <h4 className="text-accent font-medium mb-6">{project.subtitle}</h4>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium text-gray-300 bg-black/40 rounded-full border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                  <Link 
                    href={project.liveLink}
                    target="_blank"
                    className="flex items-center justify-center w-full py-3 bg-accent hover:bg-accent-hover text-white rounded-xl transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] group/btn font-medium"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center justify-center w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors border border-white/10 group/btn"
                  >
                    <GithubIcon className="w-5 h-5 mr-2" />
                    <span>View Code</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
