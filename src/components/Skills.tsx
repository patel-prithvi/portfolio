"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Terminal, Database, Code2, Wrench, Info } from "lucide-react";
import { skills, skillCategories, SkillCategory, Skill } from "@/data/skills";
import { TechIcon } from "./TechIcon";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-4 h-4" />;
      case "Frontend":
        return <Layers className="w-4 h-4" />;
      case "Backend":
        return <Terminal className="w-4 h-4" />;
      case "Databases":
        return <Database className="w-4 h-4" />;
      case "Tools":
        return <Wrench className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background glow background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE TECH STACK MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Explore my core technical stack. Click category pills or hover over any technology icon to view technical details.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeCategory === "All"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105"
                : "bg-slate-900/90 text-slate-400 hover:text-cyan-300 border border-slate-800"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Technologies ({skills.length})</span>
          </button>

          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105"
                  : "bg-slate-900/90 text-slate-400 hover:text-cyan-300 border border-slate-800"
              }`}
            >
              {getCategoryIcon(category)}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-5 flex flex-col items-center justify-center text-center backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                {/* Tech Icon Container with scaling effect */}
                <div className="w-14 h-14 rounded-2xl bg-slate-950/80 border border-slate-800/80 group-hover:border-cyan-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <TechIcon name={skill.name} slug={skill.slug} color={skill.color} className="w-8 h-8 transition-all duration-300" />
                </div>

                {/* Skill Name & Category */}
                <h3 className="font-semibold text-slate-100 text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-mono text-slate-400 mt-1">
                  {skill.category}
                </span>

                {/* Direct On-Card Floating Tooltip Overlay */}
                <AnimatePresence>
                  {hoveredSkill?.name === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0 z-30 bg-slate-950/95 border border-cyan-500/40 rounded-2xl p-3.5 flex flex-col justify-between backdrop-blur-md text-left shadow-2xl"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-bold text-xs text-slate-100">
                            {skill.name}
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            {skill.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug line-clamp-3">
                          {skill.description}
                        </p>
                      </div>
                      <div className="text-[9px] font-mono text-cyan-400/80 flex items-center gap-1">
                        <Info className="w-3 h-3" />
                        <span>Hover inspector</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Micro glowing border accent */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color || "#0ea5e9" }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Terminal Inspector Output Bar Below Grid */}
        <div className="mt-10 min-h-[64px]">
          <AnimatePresence mode="wait">
            {hoveredSkill ? (
              <motion.div
                key={hoveredSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="max-w-2xl mx-auto px-5 py-3 rounded-xl bg-slate-950/90 border border-cyan-500/30 shadow-xl flex items-center gap-4 backdrop-blur-md font-mono"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800">
                  <TechIcon name={hoveredSkill.name} slug={hoveredSkill.slug} color={hoveredSkill.color} className="w-5 h-5" />
                </div>
                <div className="flex-1 text-xs">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-0.5">
                    <span>&gt; TECH_INSPECTOR: {hoveredSkill.name.toUpperCase()}</span>
                    <span className="text-[10px] px-2 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {hoveredSkill.category}
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] font-sans">
                    {hoveredSkill.description}
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="text-center text-xs font-mono text-slate-500 py-3 border border-dashed border-slate-800/80 rounded-xl max-w-xl mx-auto">
                💡 Hover over any skill tile above to inspect detailed experience & technical capabilities
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
