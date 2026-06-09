"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
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
  desc?: string;
  points?: string[];
  projects?: ExperienceProject[];
}

const experiences: Experience[] = [
  {
    company: "Upsquare Technologies",
    role: "Software Engineer",
    duration: "Feb 2026 – Present",
    location: "Ahmedabad, Gujarat",
    projects: [
      {
        name: "SMG (Sway Me Good) -- Influencer Marketing Platform",
        tech: "Node.js, tRPC, GraphQL, AWS Lambda, DynamoDB, Nx Monorepo, Azure OpenAI API",
        desc: "Contributed to an Nx monorepo of 25+ microservices; independently built two services end to end -- Loyalty and Campaign-Auth-Score. Built an AI authenticity scoring engine (Azure OpenAI API) that quantifies influencer-to-campaign fit and automates brand-team shortlisting via scheduled AWS Lambda jobs with results stored in DynamoDB.",
        links: [{ name: "Platform", url: "https://swaymegood.com/" }]
      },
      {
        name: "VERSYS -- Compliance & Document Management System",
        tech: "Node.js, Express.js, Claude Sonnet, Puppeteer, AWS S3, React, React Query, Tailwind CSS",
        desc: "Built a centralised compliance portal managing project records, worker lists, and certificates across multiple construction sites; implemented colour-coded certification expiry flags to surface at-risk workers instantly. Engineered an AI document generation pipeline combining Salus API with Claude Sonnet to auto-generate SSSP, EMP, and PHA safety documents; rendered to PDF via Puppeteer and stored on AWS S3. Applied React Query caching with stale-time tuning to eliminate redundant API calls across all dashboard views, reducing unnecessary network load on repeated navigations.",
      },
      {
        name: "Spinoto -- Mechanic Booking Platform",
        tech: "React, Next.js, Tailwind CSS",
        desc: "Delivered the admin panel and public landing page; led two junior developers, reviewed PRs, and drove the product to a stable production release resolving a backlog of UI issues. Improved frontend performance by splitting components into Next.js Server and Client Components, reducing client-side JS bundle size; scoped API calls to only the data each view required, eliminating overfetching.",
        links: [
          { name: "Website", url: "https://spinoto.com" },
          { name: "Admin", url: "https://admin.spinoto.com/login" }
        ]
      },
      {
        name: "SignPe -- Payments Platform Backend",
        tech: "NestJS, PostgreSQL, TypeORM",
        desc: "Architected a Role-Based Access Control (RBAC) system with a normalised PostgreSQL schema (roles, permissions, role-permission mapping) for scalable, fine-grained access management. Built reusable NestJS guards and decorators (@Roles(), @Permissions()) enabling declarative, route-level access control across all API endpoints.",
        links: [{ name: "Platform", url: "https://signpe.com/" }]
      }
    ],
  },
  {
    company: "Meditab Software",
    role: "Programmer Analyst",
    duration: "Dec 2022 – Jan 2026",
    location: "Ahmedabad, Gujarat",
    points: [
      "Developed and maintained internal web applications (Node.js, Express, PostgreSQL, React) supporting QA automation workflows, used daily by multiple engineering teams.",
      "Integrated Socket.io for real-time tracking of automation script progress and live activity feeds, improving visibility for QA teams.",
      "Optimised database throughput via connection pooling and query tuning; reduced unnecessary re-renders using React.memo and useCallback.",
      "Offloaded CPU-intensive tasks using Worker Threads; benchmarked API performance under concurrent load with JMeter to identify and resolve bottlenecks."
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
        desc: "Built core e-commerce modules -- Dashboard, SEO Management, Orders, Testimonials, and Wishlist -- across the React + Vite admin panel and Next.js storefront, backed by a TypeScript + Express + MongoDB API. Implemented Formik + Zod for form validation and MSG91 API for OTP-based auth and SMS notifications; collaborated in a 6-member agile team using Jira and ClickUp.",
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
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full mb-12"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Decorative side border */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent to-accent-secondary opacity-80"></div>
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pl-4">
                {/* Left Column: Company & Role */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                  <h4 className="text-xl font-medium text-accent mb-4">{exp.role}</h4>
                  
                  <div className="space-y-2 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-accent-secondary" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-accent-secondary" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                {/* Right Column: Description & Projects */}
                <div className="lg:w-2/3">
                  {exp.desc && (
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">{exp.desc}</p>
                  )}

                  {exp.points && (
                    <ul className="list-disc list-outside space-y-3 pl-5 text-gray-300 text-base md:text-lg">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="leading-relaxed hover:text-white transition-colors duration-200">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.projects && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {exp.projects.map((project, pIdx) => (
                        <div key={pIdx} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="text-white font-semibold text-lg">{project.name}</h5>
                            {project.links && project.links.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {project.links.map((linkObj, lIdx) => (
                                  <Link 
                                    key={lIdx}
                                    href={linkObj.url} 
                                    target="_blank"
                                    className="flex items-center text-xs px-2 py-1 bg-black/40 rounded hover:bg-accent hover:text-white text-gray-400 transition-colors border border-white/5 hover:border-transparent"
                                    title={linkObj.name}
                                  >
                                    <span className="mr-1">{linkObj.name}</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-accent-secondary mb-3 font-mono leading-relaxed">{project.tech}</p>
                          <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
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
