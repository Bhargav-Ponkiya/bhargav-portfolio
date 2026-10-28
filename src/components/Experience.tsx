"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ExperienceProject {
  name: string;
  tech: string;
  desc: string;
  links?: { name: string; url: string }[];
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  current?: boolean;
  desc?: string;
  points?: string[];
  projects?: ExperienceProject[];
}

const experiences: Experience[] = [
  {
    company: "GRAIXL",
    role: "Tech Lead",
    duration: "July 2026 – Present",
    location: "Remote",
    current: true,
    points: [
      "Technical leadership driving end-to-end architecture, development, and system deployments across web applications and real-time AI services.",
      "Built a real-time multilingual voice interview pipeline integrating OpenAI Realtime API, ElevenLabs, Deepgram STT/TTS, and LiveKit Cloud (WebRTC), achieving approximately 1 second end-to-end perceived latency.",
      "Implemented interview video proctoring with periodic random face-frame capture to verify candidate presence without continuous recording.",
      "Researched and prototyped video AI avatar integration; developed working proof-of-concepts with Simli and ProtoFace for conversational video synthesis.",
      "Decoupled resume parsing and ranking against job descriptions using OpenAI API and RabbitMQ queues for fully asynchronous background processing.",
      "Managed AWS infrastructure (S3, CloudFront, EC2, CloudWatch); set up GitHub Actions CI/CD for the frontend and implemented CloudWatch alerts for CPU, RAM, and disk usage. Cleaned up legacy EC2 instances and cache data, saving approximately $150/month.",
      "Integrated Odoo ATS and Recruitee ATS via webhooks and REST APIs; conducted direct technical walkthroughs and onboarding for international client teams."
    ]
  },
  {
    company: "Upsquare Technologies",
    role: "Software Engineer",
    duration: "Feb 2026 – Jul 2026",
    location: "Ahmedabad, Gujarat",
    projects: [
      {
        name: "SMG (Sway Me Good) -- Influencer Marketing Platform",
        tech: "Node.js, tRPC, GraphQL, AWS Lambda, DynamoDB, Nx Monorepo, Azure OpenAI API",
        desc: "Built Loyalty and Campaign-Auth-Score microservices in an Nx monorepo of 25+ services. Built an AI authenticity scoring pipeline using Azure OpenAI API with scheduled AWS Lambda jobs storing results in DynamoDB.",
        links: [{ name: "Platform", url: "https://swaymegood.com/" }]
      },
      {
        name: "VERSYS -- Compliance & Document Management System",
        tech: "Node.js, Express.js, Claude Sonnet, Puppeteer, AWS S3, React, React Query, Tailwind CSS",
        desc: "Engineered a compliance document generation pipeline combining Salus API and Claude Sonnet to generate safety PDFs (SSSP, EMP, PHA) via Puppeteer to AWS S3. Applied React Query caching to eliminate redundant API requests.",
      },
      {
        name: "Spinoto -- Mechanic Booking Platform",
        tech: "React, Next.js, Tailwind CSS",
        desc: "Delivered the Next.js admin panel and landing page; split components into Server and Client components to reduce bundle size and scoped API calls to avoid data overfetching.",
        links: [
          { name: "Website", url: "https://spinoto.com" },
          { name: "Admin", url: "https://admin.spinoto.com/login" }
        ]
      },
      {
        name: "SignPe -- Payments Platform Backend",
        tech: "NestJS, PostgreSQL, TypeORM",
        desc: "Architected Role-Based Access Control (RBAC) in NestJS with normalized PostgreSQL schema and custom guards/decorators (@Roles(), @Permissions()) for declarative endpoint authorization.",
        links: [{ name: "Platform", url: "https://signpe.com/" }]
      }
    ]
  },
  {
    company: "Meditab Software",
    role: "Programmer Analyst",
    duration: "Dec 2022 – Jan 2026",
    location: "Ahmedabad, Gujarat",
    points: [
      "Maintained internal web applications (Node.js, Express, PostgreSQL, React) supporting QA automation workflows used by engineering teams.",
      "Integrated Socket.io for live tracking of automation script progress and real-time activity feeds.",
      "Optimised database throughput via connection pooling and query tuning; reduced redundant re-renders using React.memo and useCallback.",
      "Offloaded CPU-intensive tasks using Worker Threads; benchmarked API endpoints under concurrent load using JMeter to identify bottlenecks."
    ]
  },
  {
    company: "Codient Tech",
    role: "Full-Stack Developer",
    duration: "May 2022 – Oct 2022",
    location: "Remote",
    projects: [
      {
        name: "Dausto -- E-Commerce Platform",
        tech: "TypeScript, Express.js, MongoDB, React + Vite (Admin), Next.js (Storefront), Formik, Zod, MSG91",
        desc: "Built core e-commerce modules (Dashboard, SEO, Orders, Testimonials, Wishlist) across a React + Vite admin panel and Next.js storefront backed by an Express and MongoDB API. Implemented Formik and Zod validation, and integrated MSG91 for OTP-based authentication and SMS notifications in a 6-member agile team.",
        links: [
          { name: "Storefront", url: "https://dausto.com" },
          { name: "Admin", url: "https://admin.dausto.com" }
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Journey &amp; Impact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            4+ years of hands-on software development and technical leadership across B2B SaaS, enterprise QA automation, and e-commerce platforms.
          </p>
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-7 sm:p-9 rounded-2xl relative border ${
                exp.current 
                  ? "border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.08)]" 
                  : "border-white/10"
              }`}
            >
              {/* Active Milestone Tag if Current */}
              {exp.current && (
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500 text-black shadow-lg">
                    Current Tech Lead Role
                  </span>
                </div>
              )}

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* Left Column: Company, Role & Meta */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <h3 className="text-2xl font-bold text-white mb-1.5">{exp.company}</h3>
                  <h4 className="text-lg font-semibold text-emerald-400 mb-4">{exp.role}</h4>
                  
                  <div className="space-y-2 text-gray-400 text-xs sm:text-sm font-mono">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Column: Achievements & Projects */}
                <div className="lg:w-2/3">
                  {exp.points && (
                    <ul className="space-y-3.5">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start text-gray-300 text-sm sm:text-base leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.projects && (
                    <div className="space-y-4">
                      {exp.projects.map((project, pIdx) => (
                        <div key={pIdx} className="bg-black/40 border border-white/5 p-5 rounded-xl hover:border-white/15 transition-all">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                            <h5 className="text-white font-semibold text-base sm:text-lg">{project.name}</h5>
                            {project.links && project.links.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {project.links.map((linkObj, lIdx) => (
                                  <Link 
                                    key={lIdx}
                                    href={linkObj.url} 
                                    target="_blank"
                                    className="inline-flex items-center text-xs font-mono px-2.5 py-1 bg-white/5 hover:bg-emerald-500 hover:text-black text-gray-300 rounded-lg transition-colors border border-white/10"
                                    title={linkObj.name}
                                  >
                                    <span className="mr-1">{linkObj.name}</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.tech.split(", ").map((t) => (
                              <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-cyan-400 border border-white/5">
                                {t}
                              </span>
                            ))}
                          </div>
                          
                          <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
