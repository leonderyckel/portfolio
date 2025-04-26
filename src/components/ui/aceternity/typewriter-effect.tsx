"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsLength = words.length;

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 0.1,
        delay: stagger(0.05),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <div className="inline">
        {words.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.split("").map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  key={`char-${index}`}
                  className={cn("opacity-0 inline-block", word.className)}
                >
                  {char}
                </motion.span>
              ))}
              {idx < wordsLength - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="inline" ref={scope}>
        {renderWords()}
      </div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block bg-primary h-5 w-[2px] ml-1",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
}; 