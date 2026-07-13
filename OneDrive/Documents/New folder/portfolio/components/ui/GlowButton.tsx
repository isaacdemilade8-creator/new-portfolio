"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export default function GlowButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  external = false,
}: GlowButtonProps) {
  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50",
    secondary:
      "bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50",
    outline:
      "border border-white/20 text-white hover:border-blue-400/50 hover:bg-white/5",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant !== "outline" && (
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      )}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}
