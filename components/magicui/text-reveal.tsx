"use client";

import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
  useRef,
} from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  text: string;
}

export const TextReveal: FC<TextRevealProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div className={cn("relative z-0 h-[200vh]", className)} ref={targetRef}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-4 py-20"
        }
      >
        <p
          className={
            "flex flex-wrap p-5 font-bold text-2xl text-foreground/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
          ref={targetRef}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={word} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

type WordProps = {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
};

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className="absolute text-foreground/20">{children}</span>
      <motion.span className="motion" style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
