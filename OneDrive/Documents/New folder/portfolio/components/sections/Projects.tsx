"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";

const categories = ["All", "AI / Mobile", "FinTech / Web", "Web App", "EdTech / Web", "Web", "HealthTech / Web"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-600/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I&apos;ve Built
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of my recent work — from AI applications to full-stack platforms
          </p>
        </SectionReveal>

        {/* Featured projects */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featured.map((project, i) => (
            <SectionReveal key={project.id} delay={i * 0.1}>
              <motion.div
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                className="group relative glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col"
                whileHover={{ y: -8 }}
              >
                {/* Preview area */}
                <div
                  className={`relative h-52 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                >
                  {/* Grid pattern */}
                  <div className="absolute inset-0 grid-overlay opacity-30" />

                  {/* Animated circles */}
                  <motion.div
                    animate={hovered === project.id ? { scale: 1.3 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-32 h-32 rounded-full bg-white/5 absolute" />
                    <div className="w-48 h-48 rounded-full bg-white/3 absolute" />
                  </motion.div>

                  <motion.div
                    animate={hovered === project.id ? { scale: 1.2, y: -5 } : { scale: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 text-6xl"
                  >
                    {project.icon}
                  </motion.div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 text-sm font-medium transition-all"
                    >
                      <Github size={14} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 hover:text-white hover:from-blue-500 hover:to-cyan-500 text-sm font-medium transition-all"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* More projects */}
        <SectionReveal className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">All Projects</h3>
            {/* Filter tabs */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto">
              {categories.slice(0, 4).map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    filter === cat
                      ? "bg-blue-500 text-white"
                      : "glass border border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl`}>
                      {project.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        <Github size={15} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>

                  <h4 className="font-bold text-white text-sm mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs bg-white/5 text-gray-500 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="px-2 py-0.5 rounded-md text-xs bg-white/5 text-gray-500 border border-white/5">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </SectionReveal>

        {/* View all CTA */}
        <SectionReveal className="text-center mt-8">
          <motion.a
            href={`https://github.com/yourusername`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 text-gray-300 hover:text-white hover:border-blue-400/40 font-medium text-sm transition-all"
          >
            <Github size={16} />
            View All on GitHub
            <ChevronRight size={16} />
          </motion.a>
        </SectionReveal>
      </div>
    </section>
  );
}
