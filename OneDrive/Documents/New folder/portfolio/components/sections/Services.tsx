"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            From concept to deployment — I help bring your ideas to life with
            modern technology
          </p>
        </SectionReveal>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative group glass rounded-2xl p-6 border ${service.border} hover:border-white/20 transition-all duration-400 h-full cursor-default overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-white text-sm mb-3 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={16} className="text-blue-400" />
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Process section */}
        <SectionReveal className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              My <span className="gradient-text">Process</span>
            </h3>
            <p className="text-gray-400 text-sm">How I work to deliver exceptional results</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your vision, goals, and requirements through in-depth consultation.",
                icon: "🎯",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Creating a detailed roadmap with timelines, tech stack, and architecture decisions.",
                icon: "📋",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building your solution with clean code, regular updates, and iterative feedback.",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Testing, optimization, deployment, and ongoing support for your product.",
                icon: "🚀",
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}
                <div className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group text-center">
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <div className="text-xs font-bold text-blue-400 mb-1 tracking-wider">
                    STEP {step.step}
                  </div>
                  <h4 className="font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
