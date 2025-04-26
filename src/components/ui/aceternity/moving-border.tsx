"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderRadius = "1.75rem",
  offset = 32,
  borderColor = "from-purple-600 via-blue-500 to-purple-600",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  offset?: number;
  borderColor?: string;
}) => {
  return (
    <div
      className={cn(
        "relative p-[3px] overflow-hidden group",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <motion.div
        className={cn(
          "absolute inset-0 rounded-[inherit] z-0 opacity-90 group-hover:opacity-100 blur-sm group-hover:blur-none transition-all duration-500",
          `bg-gradient-to-r ${borderColor}`
        )}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: "300% 300%",
        }}
      />

      <div
        className={cn(
          "relative bg-white dark:bg-slate-950 h-full w-full",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.95)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}; 