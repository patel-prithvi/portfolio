"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Code2, Heart, Coffee } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function Footer() {
  useEffect(() => {
    // Hidden Developer Easter Egg log in Browser Console
    console.log(
      "%c🚀 Hey curious developer! %cBuilt with ☕ and questionable sleep by Prithvi Patel.",
      "color: #0ea5e9; font-size: 14px; font-weight: bold;",
      "color: #94a3b8; font-size: 12px;"
    );
    console.log(
      "%cCheck out my GitHub repos at: https://github.com/patel-prithvi",
      "color: #38bdf8; font-size: 11px; font-style: italic;"
    );
  }, []);

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="font-mono font-bold text-sm text-slate-200">
              PRITHVI PATEL
            </span>
          </div>

          {/* Developer Humor Easter Egg Tooltip Line */}
          <div className="group relative cursor-pointer select-none">
            <p className="text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <span>built with</span>
              <Coffee className="w-3.5 h-3.5 text-amber-500 animate-bounce" />
              <span>and questionable sleep</span>
            </p>
            {/* Tooltip Popup */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-3 py-1.5 rounded-md bg-slate-900 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 whitespace-nowrap shadow-xl">
              👾 Easter Egg: Press F12 to check out dev console!
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs font-mono text-slate-500">
            © {new Date().getFullYear()} Prithvi Patel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
