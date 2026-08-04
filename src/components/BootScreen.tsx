"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export function BootScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  const bootLines = [
    "> initializing_portfolio...",
    "> loading_modules [skills, projects, experience]...",
    "> system_check: security, performance, APIs OK",
    "> welcome_to_prithvi_patel_portfolio",
  ];

  useEffect(() => {
    // Check session storage to show only once per session
    const hasVisited = sessionStorage.getItem("hasVisitedPortfolio");
    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    // Progress percentage timer
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // Terminal lines sequence timer
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= bootLines.length - 1) {
          clearInterval(lineInterval);
          return bootLines.length - 1;
        }
        return prev + 1;
      });
    }, 300);

    // Auto dismiss after 1.5 seconds
    const dismissTimer = setTimeout(() => {
      handleComplete();
    }, 1600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(lineInterval);
      clearTimeout(dismissTimer);
    };
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("hasVisitedPortfolio", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onClick={handleComplete}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070c] text-cyan-400 font-mono p-4 cursor-pointer select-none"
        title="Click to skip initialization"
      >
        <div className="w-full max-w-xl p-6 rounded-xl border border-cyan-500/20 bg-slate-950/90 shadow-2xl backdrop-blur-md">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 mb-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>TERMINAL BOOT v1.4</span>
            </div>
            <div className="text-[11px] text-slate-500">CLICK TO SKIP ↵</div>
          </div>

          {/* Console Text Lines */}
          <div className="space-y-2 text-sm md:text-base min-h-[140px]">
            {bootLines.slice(0, currentLine + 1).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={index === currentLine ? "text-cyan-300 font-semibold" : "text-slate-400"}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>LOADING SYSTEM</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/20">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
