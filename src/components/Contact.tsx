"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "919979166390";
  const whatsappMessage = encodeURIComponent("Hi Bhargav, I came across your portfolio and would love to connect.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const emailAddress = "bhargavponkiya7@gmail.com";
  const emailLink = `mailto:${emailAddress}?subject=Let%27s%20Connect`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-emerald-600/8 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s Build Something Real
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you have an interesting engineering problem, want to explore a collaboration, or just want to talk tech — I&apos;m open to a direct conversation.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-base sm:text-lg rounded-xl transition-all shadow-[0_0_25px_rgba(37,211,102,0.25)] hover:shadow-[0_0_35px_rgba(37,211,102,0.45)]"
            >
              <MessageCircle className="w-5 h-5 mr-3 fill-current" />
              <span>WhatsApp</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={emailLink}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/[0.05] hover:bg-white/[0.09] text-white font-bold text-base sm:text-lg rounded-xl transition-all border border-white/10 hover:border-emerald-500/30"
            >
              <Mail className="w-5 h-5 mr-3 text-emerald-400" />
              <span>Email Me</span>
            </motion.a>
          </div>

          {/* Simple honest indicators — no availability/timezone signals */}
          <div className="glass-card p-6 rounded-2xl border border-white/[0.08] max-w-xl mx-auto text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-mono text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Typically replies within 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Open to technical challenges</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
