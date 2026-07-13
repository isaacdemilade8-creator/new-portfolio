"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = ["Home", "About", "Skills", "Projects", "Services", "Contact"];
  const socials = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030610] to-transparent" />
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
                DI
              </div>
              <div>
                <div className="font-bold text-white">{personalInfo.firstName} {personalInfo.lastName}</div>
                <div className="text-xs text-blue-400">AI & Full-Stack Engineer</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Building intelligent software and beautiful experiences that make an impact.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 3 }}
                  className="text-gray-500 text-sm hover:text-white transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Get In Touch</h4>
            <div className="space-y-2 mb-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-gray-500 text-sm hover:text-white transition-colors"
              >
                <Mail size={13} className="text-blue-400" />
                {personalInfo.email}
              </a>
              <p className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="text-green-400">●</span>
                {personalInfo.location}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400/30 transition-all"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Oyenuga Demilade Isaac. Made with
            <Heart size={12} className="text-red-400 fill-red-400" />
            in Nigeria.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400/30 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
