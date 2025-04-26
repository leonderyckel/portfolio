"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, RefObject } from "react";

export const Card3D = ({
  children,
  className,
  containerClassName,
  rotationIntensity = 15,
  borderRadius = "1.5rem",
  glareOpacity = 0.35,
  hasGlare = true,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  rotationIntensity?: number;
  borderRadius?: string;
  glareOpacity?: number;
  hasGlare?: boolean;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [elevation, setElevation] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    setIsHovered(true);
    
    const rect = divRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const posX = e.clientX - centerX;
    const posY = e.clientY - centerY;
    
    const x = (posY / rect.height) * rotationIntensity;
    const y = (posX / rect.width) * rotationIntensity;

    setRotateX(-x);
    setRotateY(y);
    setElevation(20);
    
    // For glare effect
    const glareX = (posX / rect.width) * 100;
    const glareY = (posY / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setElevation(0);
  };

  return (
    <div
      ref={divRef}
      className={cn("relative w-full h-full", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          borderRadius,
          transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${elevation}px)`,
          transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: `0 ${5 + elevation/2}px ${20 + elevation}px rgba(0, 0, 0, 0.2), 0 ${2 + elevation/5}px ${10 + elevation/2}px rgba(0, 0, 0, 0.15)`,
          background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
        }}
        className={cn("w-full h-full", className)}
      >
        {children}
        {hasGlare && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius,
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glareOpacity}), transparent)`,
              pointerEvents: "none",
              zIndex: 1,
              transition: "opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}
      </div>
    </div>
  );
}; 