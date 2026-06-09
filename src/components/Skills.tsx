"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "React Query"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "tRPC", "WebSockets"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "pgvector"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS (S3, Lambda, DynamoDB)", "Docker", "CI/CD", "Render", "Vercel"],
  },
  {
    name: "Architecture",
    skills: ["Microservices", "Event-Driven Architecture", "RabbitMQ", "Nx Monorepo"],
  },
  {
    name: "AI / LLM",
    skills: ["Azure OpenAI", "Gemini", "Claude", "RAG", "Vector Embeddings", "Voice Agents", "Deepgram", "LiveKit"],
  },
  {
    name: "Tools",
    skills: ["Git", "Postman", "JMeter", "Jira", "WebRTC", "SSE"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl relative overflow-hidden group"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              
              <h3 className="text-xl font-semibold mb-4 text-white relative z-10">{category.name}</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:bg-accent/20 hover:text-white hover:border-accent/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
