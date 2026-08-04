"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code, Layers, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { TechIcon } from "./TechIcon";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED ENGINEERING WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Full-stack web applications, AI document indexing pipelines, and system architectures built with Flask, React, Java, and Python.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900/80 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 flex flex-col"
            >
              {/* Top Image Preview Container */}
              <div className="relative h-60 w-full bg-slate-950 overflow-hidden border-b border-slate-800/60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-40"
                />

                {/* Default Stack Badge Overlay */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5 max-w-[80%]">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-slate-400 border border-slate-800">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover Reveal Crossfade Overlay */}
                <div className="absolute inset-0 bg-slate-950/95 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center overflow-y-auto backdrop-blur-md z-20">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                    Key Highlights & Achievements
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Action Links */}
                    <div className="flex items-center gap-2 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center justify-center"
                          title="View Source on GitHub"
                        >
                          <TechIcon name="GitHub" slug="github" className="w-4 h-4" color="#ffffff" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-mono text-cyan-400/90 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips List */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
