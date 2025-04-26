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
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  offset?: number;
}) => {
  return (
    <div
      className={cn(
        "relative p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        <div className="absolute inset-[-100%]">
          <div className="absolute w-[50%] h-[200%] top-0 overflow-hidden">
            <motion.div
              initial={{ rotate: "0deg" }}
              animate={{ rotate: "360deg" }}
              transition={{
                duration: duration / 1000,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: `calc(100% + ${offset}px)`,
                height: `calc(100% + ${offset}px)`,
                borderRadius: `calc(${borderRadius} * 0.96)`,
              }}
              className="absolute inset-0 bg-gradient-to-tr from-purple-600/90 via-blue-500/90 to-purple-600/90"
            ></motion.div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "relative bg-white h-full w-full",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}; 