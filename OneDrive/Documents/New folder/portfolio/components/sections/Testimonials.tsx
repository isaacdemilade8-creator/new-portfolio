"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-[#07091a]">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <span className="inline-block text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Kind Words
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            What clients and collaborators say about working with me
          </p>
        </SectionReveal>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-7 border border-white/10 hover:border-yellow-500/20 transition-all duration-400 relative group"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={40} className="text-yellow-400" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal className="text-center mt-12">
          <div className="glass rounded-3xl p-10 border border-white/10 max-w-3xl mx-auto">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Let&apos;s Build Something Great Together
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              I&apos;m always open to new projects, interesting collaborations, and
              exciting opportunities.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              Start a Project
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
