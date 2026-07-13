"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { personalInfo } from "@/lib/data";

const roles = personalInfo.title;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting && displayed === current) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
        return;
      }
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <ParticleBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 z-0" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl z-0 animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-600/5 blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg mb-3 font-medium"
          >
            Hi there, I&apos;m 👋
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="text-white">Oyenuga </span>
            <br />
            <span className="gradient-text">Demilade Isaac</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-3 justify-center lg:justify-start mb-6"
          >
            <span className="text-gray-400 text-xl font-light">I&apos;m a </span>
            <span className="text-xl font-semibold text-cyan-400 min-w-[220px]">
              {displayed}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Passionate about building{" "}
            <span className="text-white font-medium">intelligent software</span>,
            AI-powered applications, and{" "}
            <span className="text-white font-medium">beautiful user experiences</span> that
            make an impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(0,212,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:border-blue-400/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <span className="text-gray-500 text-sm">Follow me:</span>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400/40 transition-all duration-300"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-shrink-0 relative"
        >
          {/* Outer ring */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Animated border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #00d4ff, #7c3aed, #06b6d4, transparent, #00d4ff)",
                padding: "2px",
                borderRadius: "9999px",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#050816]" />
            </motion.div>

            {/* Inner glow ring */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10" />

            {/* Profile image placeholder */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#0d1225] to-[#050816] flex items-center justify-center overflow-hidden border border-white/5">
              <div className="text-center">
                <div className="text-6xl md:text-7xl mb-2">👨‍💻</div>
                <p className="text-xs text-gray-500">Your Photo Here</p>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-4 glass border border-blue-500/20 rounded-xl px-3 py-2 text-xs font-medium text-blue-400 shadow-lg"
            >
              🤖 AI Engineer
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-4 glass border border-purple-500/20 rounded-xl px-3 py-2 text-xs font-medium text-purple-400 shadow-lg"
            >
              ⚡ Full-Stack Dev
            </motion.div>
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-12 glass border border-cyan-500/20 rounded-xl px-3 py-2 text-xs font-medium text-cyan-400 shadow-lg"
            >
              🎨 UI/UX
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
