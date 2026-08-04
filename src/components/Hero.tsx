"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, ArrowRight, Download, Terminal, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { Typewriter } from "./Typewriter";
import { TechIcon } from "./TechIcon";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          {/* Left Column: Text & CTAs (order-2 on mobile, order-1 on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start gap-5">
            {/* Terminal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>AVAILABLE FOR SOFTWARE ENGINEERING ROLES</span>
            </motion.div>

            {/* Headline with adjusted font sizing and non-wrapping hand emoji */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1.5"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
                Hi, I'm{" "}
                <span className="whitespace-nowrap">
                  <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>{" "}
                  👋
                </span>
              </h1>
              <div className="text-lg sm:text-2xl lg:text-3xl font-medium text-slate-300 flex flex-wrap items-center gap-2 pt-1">
                <span>I'm a</span>
                <Typewriter words={personalInfo.roles} />
              </div>
            </motion.div>

            {/* One-Line Bio Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Prithvi_Patel_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 font-semibold text-sm transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full max-w-md"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200 flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <TechIcon name="GitHub" slug="github" className="w-4 h-4" color="#ffffff" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200 flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <TechIcon name="LinkedIn" slug="linkedin" className="w-4 h-4" color="#0A66C2" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                aria-label="Email Prithvi"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                aria-label="Call Prithvi"
              >
                <Phone className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Photo Card (order-1 on mobile, order-2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative group max-w-[320px] sm:max-w-[350px] lg:max-w-[370px] w-full">
              {/* Outer Card Frame */}
              <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md group-hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden">
                <div className="relative aspect-[4/5] max-h-[380px] w-full rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/my_photo.png"
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Know More About Me Floating Badge */}
              <div className="absolute -bottom-3 right-3 sm:right-4 bg-slate-900/95 border border-cyan-500/40 px-3.5 py-1.5 rounded-full text-[11px] font-mono text-cyan-300 shadow-xl flex items-center gap-1.5 backdrop-blur-md group-hover:scale-105 transition-transform">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Full-Stack Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
