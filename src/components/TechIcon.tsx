"use client";

import React from "react";
import * as SimpleIcons from "simple-icons";
import {
  Code,
  Database,
  Terminal,
  Cpu,
  Layers,
  Wrench,
  Globe,
  FileCode,
  Box,
  Server,
  Zap,
} from "lucide-react";

interface TechIconProps {
  name: string;
  slug?: string;
  className?: string;
  color?: string;
}

export function TechIcon({ name, slug, className = "w-6 h-6", color }: TechIconProps) {
  // Try retrieving from simple-icons
  let iconData = null;
  
  if (slug) {
    // Map common slug formats
    const simpleIconKey = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
    iconData = (SimpleIcons as Record<string, { path: string; hex: string }>)[simpleIconKey];
  }

  if (iconData) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill={color || `#${iconData.hex}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={iconData.path} />
      </svg>
    );
  }

  // Fallback to Lucide React icons
  const lowercaseName = name.toLowerCase();
  if (lowercaseName.includes("sql") || lowercaseName.includes("data")) {
    return <Database className={className} style={{ color: color || "#38bdf8" }} />;
  }
  if (lowercaseName.includes("code") || lowercaseName.includes("script")) {
    return <Code className={className} style={{ color: color || "#38bdf8" }} />;
  }
  if (lowercaseName.includes("api") || lowercaseName.includes("server")) {
    return <Server className={className} style={{ color: color || "#38bdf8" }} />;
  }

  return <Box className={className} style={{ color: color || "#38bdf8" }} />;
}
