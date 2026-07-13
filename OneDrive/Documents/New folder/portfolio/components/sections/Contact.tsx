"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, Loader } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionReveal from "@/components/ui/SectionReveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@yourusername",
      href: personalInfo.github,
      color: "from-gray-500 to-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Demilade Isaac",
      href: personalInfo.linkedin,
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-600/8 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-600/8 blur-3xl" />
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a message
            and let&apos;s create something amazing.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <SectionReveal direction="left" className="lg:col-span-2">
            <div className="space-y-5 h-full">
              {/* Intro card */}
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Let&apos;s Build Something Amazing
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  I&apos;m currently available for freelance work, full-time positions,
                  and interesting collaborations. My response time is usually within
                  24 hours.
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Contact links */}
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="flex items-center gap-4 glass rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <link.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">{link.label}</div>
                      <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Contact form */}
          <SectionReveal direction="right" delay={0.2} className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 border border-white/10">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-16 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle size={60} className="text-green-400 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <motion.button
                    onClick={() => setStatus("idle")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm"
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors ${
                          errors.name ? "border-red-500/50" : "border-white/10"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors ${
                          errors.email ? "border-red-500/50" : "border-white/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-2">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Project Collaboration, Freelance Work, etc."
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors ${
                        errors.subject ? "border-red-500/50" : "border-white/10"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none ${
                        errors.message ? "border-red-500/50" : "border-white/10"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: status !== "loading" ? 1.02 : 1 }}
                    whileTap={{ scale: status !== "loading" ? 0.98 : 1 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
