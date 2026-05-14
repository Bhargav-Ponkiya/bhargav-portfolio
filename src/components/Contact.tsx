"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "919979166390";
  const whatsappMessage = encodeURIComponent("Hi Bhargav, I visited your portfolio and would like to connect!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  const emailAddress = "bhargavponkiya7@gmail.com";
  const emailLink = `mailto:${emailAddress}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow specific to contact */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6">
            <Send className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build Something Amazing</h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind, need a full-stack developer, or just want to chat about AI integration, I&apos;m always open to discussing new opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-semibold text-lg transition-colors shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              <span>WhatsApp Me</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={emailLink}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-semibold text-lg transition-colors"
            >
              <Mail className="w-6 h-6 mr-3 text-accent" />
              <span>Email Me</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
