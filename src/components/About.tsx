"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cpu, GraduationCap, Languages } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Frontend Engineering",
      description: "Building responsive, highly-interactive, and accessible user interfaces using React.js, Next.js, and Tailwind CSS.",
      icon: <Code2 className="w-8 h-8 text-accent" />,
    },
    {
      title: "Backend & Architecture",
      description: "Designing scalable microservices, REST & GraphQL APIs using Node.js, NestJS, PostgreSQL, and event-driven patterns.",
      icon: <Server className="w-8 h-8 text-accent-secondary" />,
    },
    {
      title: "AI Integration",
      description: "Embedding LLMs (Claude, OpenAI, Gemini) and vector databases (pgvector) to build intelligent, autonomous systems.",
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I am a passionate Full-Stack Engineer based in Ahmedabad, Gujarat, with <span className="text-white font-medium">4+ years of professional experience</span> building scalable web applications and AI-integrated systems. I excel at architecting robust microservices, designing event-driven backends, and shipping LLM-powered features across production environments.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass glass-hover p-8 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="p-4 bg-white/5 rounded-2xl mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-accent/15 rounded-xl text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="border-l border-white/15 pl-4 ml-2 space-y-4">
              <div>
                <h4 className="text-lg font-bold text-white">Parul Institute of Technology</h4>
                <p className="text-accent text-sm font-semibold">B.Tech in Computer Science and Engineering</p>
                <div className="flex justify-between items-center text-gray-400 text-sm mt-1">
                  <span>Graduated: 2019 -- 2023</span>
                  <span className="font-mono text-accent-secondary">CGPA: 8.2</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-accent-secondary/15 rounded-xl text-accent-secondary">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {["English", "Gujarati", "Hindi"].map((lang) => (
                <span 
                  key={lang}
                  className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-xl hover:border-accent-secondary/50 transition-colors duration-300 cursor-default"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
