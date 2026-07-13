"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Calendar, Code2, Zap } from "lucide-react";
import { personalInfo, interests, stats } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-600/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <SectionReveal className="text-center mb-16">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <SectionReveal direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="relative glass rounded-3xl p-8 border border-white/10 overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-30" />

                <div className="relative z-10">
                  {/* Avatar section */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-500/30">
                      DI
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">
                        {personalInfo.firstName} {personalInfo.lastName}
                      </h3>
                      <p className="text-blue-400 text-sm">
                        AI & Full-Stack Engineer
                      </p>
                    </div>
                  </div>

                  {/* Info items */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-400">
                      <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                      <span className="text-sm">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Calendar size={16} className="text-purple-400 flex-shrink-0" />
                      <span className="text-sm">1+ Year Experience</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Code2 size={16} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">8+ Projects Completed</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Zap size={16} className="text-yellow-400 flex-shrink-0" />
                      <span className="text-sm">Available for Freelance</span>
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                      Interests
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest, i) => (
                        <motion.span
                          key={interest}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300 hover:border-blue-400/30 hover:text-blue-400 transition-colors duration-200"
                        >
                          {interest}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass rounded-2xl p-4 border border-white/10 text-center group hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold gradient-text-blue mb-1">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Right: Text content */}
          <SectionReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Building the future,{" "}
                  <span className="gradient-text">one line at a time</span>
                </h3>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    I&apos;m a software engineer passionate about building{" "}
                    <span className="text-white font-medium">
                      intelligent software
                    </span>
                    , AI-powered applications, scalable web platforms, and
                    beautiful user experiences.
                  </p>
                  <p>
                    I enjoy solving real-world problems with technology and
                    I&apos;m constantly learning new tools and frameworks. Whether
                    it&apos;s building a{" "}
                    <span className="text-cyan-400 font-medium">
                      mobile-first application
                    </span>{" "}
                    or architecting a{" "}
                    <span className="text-purple-400 font-medium">
                      complex backend system
                    </span>
                    , I bring the same level of dedication and craft.
                  </p>
                  <p>
                    My long-term goal is to build products that{" "}
                    <span className="text-white font-medium">
                      impact millions of people
                    </span>{" "}
                    and eventually create a world-class technology company rooted
                    in Africa.
                  </p>
                </div>
              </div>

              {/* Core values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { icon: "🎯", title: "Problem Solver", desc: "Turning complex challenges into elegant solutions" },
                  { icon: "🚀", title: "Fast Learner", desc: "Adapting quickly to new tech and frameworks" },
                  { icon: "💎", title: "Quality First", desc: "Writing clean, maintainable, scalable code" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="glass rounded-2xl p-4 border border-white/10 hover:border-blue-500/20 transition-all duration-300 group"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all"
                >
                  View Projects →
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-blue-400/50 hover:bg-white/5 transition-all"
                >
                  Let&apos;s Talk
                </motion.a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
