"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const active = skillCategories[activeCategory];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[#07091a]">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <span className="inline-block text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            A curated set of technologies I&apos;ve mastered and continue to grow with
          </p>
        </SectionReveal>

        {/* Category tabs */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((cat, i) => (
              <motion.button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === i
                    ? "bg-white/10 border border-white/20 text-white"
                    : "glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </motion.button>
            ))}
          </div>
        </SectionReveal>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {active.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-white text-sm">{skill.name}</span>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                  {skill.level}%
                </span>
              </div>
              {/* Progress bar */}
              <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.06 + 0.3, ease: "easeOut" }}
                  className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${active.color}`}
                />
                {/* Glow */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.06 + 0.3, ease: "easeOut" }}
                  className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${active.color} blur-sm opacity-50`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech badges floating display */}
        <SectionReveal delay={0.4} className="mt-16">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-wider">All Technologies</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => ({ ...skill, color: cat.color }))
            ).map((skill, i) => (
              <motion.span
                key={`${skill.name}-${i}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-blue-400/30 hover:text-white transition-all duration-200 cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
