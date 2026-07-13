"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Zap, Trophy } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

const timeline = [
  {
    year: "2024 – Present",
    title: "Software Engineer",
    company: "Freelance & Personal Projects",
    description:
      "Building full-stack web applications, AI-powered tools, mobile apps, and delivering high-quality software solutions for clients and personal ventures.",
    highlights: [
      "Developed 8+ production-ready applications",
      "Integrated AI/ML APIs into mobile and web apps",
      "Built scalable full-stack platforms with React + Laravel",
      "Delivered cross-platform mobile apps with React Native",
    ],
    icon: Briefcase,
    color: "from-blue-500 to-cyan-400",
    badge: "Current",
  },
  {
    year: "2023 – 2024",
    title: "Frontend Developer",
    company: "Self-Learning & Open Source",
    description:
      "Mastered modern frontend technologies including React, Next.js, TypeScript, and Tailwind CSS through intensive practice and real-world projects.",
    highlights: [
      "Built 10+ responsive web interfaces",
      "Learned TypeScript and Next.js ecosystem",
      "Contributed to open-source projects",
      "Developed UI/UX design skills",
    ],
    icon: Code2,
    color: "from-purple-500 to-violet-400",
    badge: "Foundation",
  },
  {
    year: "2022 – 2023",
    title: "Web Development Journey",
    company: "Student & Self-Taught",
    description:
      "Started the journey into web development with HTML, CSS, JavaScript, and PHP. Built foundational projects and developed a passion for problem-solving through code.",
    highlights: [
      "Mastered HTML5, CSS3 & JavaScript fundamentals",
      "Built first full-stack projects with PHP",
      "Learned database design with MySQL",
      "Developed CBT and Library Management systems",
    ],
    icon: Zap,
    color: "from-green-500 to-emerald-400",
    badge: "Beginning",
  },
];

const achievements = [
  { icon: "🎯", title: "8+ Projects", desc: "Delivered" },
  { icon: "⚡", title: "15+ Technologies", desc: "Mastered" },
  { icon: "🤖", title: "AI Integration", desc: "Specialist" },
  { icon: "🌍", title: "Africa-Based", desc: "Global Impact" },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-[#07091a]">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <span className="inline-block text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience &{" "}
            <span className="gradient-text">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-400 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            My professional journey in software engineering
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <SectionReveal key={item.title} delay={i * 0.15}>
                    <div className="relative pl-16">
                      {/* Icon */}
                      <div
                        className={`absolute left-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                      >
                        <item.icon size={20} className="text-white" />
                      </div>

                      {/* Card */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h3 className="font-bold text-white text-lg">
                              {item.title}
                            </h3>
                            <p className={`text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                              {item.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 font-medium">
                              {item.year}
                            </span>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}>
                              {item.badge}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <ul className="space-y-1.5">
                          {item.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-gray-400 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            {/* Achievement cards */}
            <SectionReveal direction="right">
              <div className="glass rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-5">
                  <Trophy size={18} className="text-yellow-400" />
                  <h3 className="font-bold text-white">Key Achievements</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((a) => (
                    <div
                      key={a.title}
                      className="glass rounded-xl p-4 border border-white/5 text-center hover:border-blue-500/20 transition-colors"
                    >
                      <div className="text-2xl mb-2">{a.icon}</div>
                      <div className="font-bold text-white text-sm">{a.title}</div>
                      <div className="text-xs text-gray-500">{a.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* Tech expertise */}
            <SectionReveal direction="right" delay={0.15}>
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-5">Core Expertise</h3>
                <div className="space-y-3">
                  {[
                    { label: "AI Integration", value: 82, color: "from-blue-500 to-cyan-400" },
                    { label: "React / Next.js", value: 92, color: "from-purple-500 to-violet-400" },
                    { label: "Full-Stack Dev", value: 85, color: "from-green-500 to-emerald-400" },
                    { label: "Mobile Dev", value: 80, color: "from-orange-500 to-amber-400" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* CTA */}
            <SectionReveal direction="right" delay={0.3}>
              <div className="glass rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="font-bold text-white mb-2">Open to Opportunities</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Looking for exciting projects and collaborations
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="block w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold text-center"
                >
                  Get In Touch
                </motion.a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
