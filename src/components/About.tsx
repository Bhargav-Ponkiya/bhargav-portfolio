"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cpu } from "lucide-react";

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
            I am a passionate Software Engineer based in Ahmedabad, Gujarat, specializing in creating high-performance web applications and intelligent AI-driven systems. With over 3 years of experience, I excel in transforming complex requirements into robust, scalable architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      </div>
    </section>
  );
}
