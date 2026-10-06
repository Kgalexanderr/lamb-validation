"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ButtonNotifyArrow } from "./button-notify-arrow";

const letters = [
  { char: "M", x: 0, width: 290 },
  { char: "O", x: 290, width: 264 },
  { char: "S", x: 554, width: 223 },
  { char: "S", x: 777, width: 223 },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center w-full gap-12 mb-12 h-[80vh]">
      <div className="flex flex-col justify-between h-[70vh] bg-[#21200B] text-[#FFD900] w-full rounded-4xl overflow-hidden mt-12">
        <div className="flex justify-between items-center w-full p-12 mt-6">
          <div className="flex flex-col gap-2">
            
            <Link href="https://www.linkedin.com/in/kguerrero0325/" className="underline underline-offset-4" target="_blank">Help make Moss worth it (Short survey)</Link>
            <Link href="mailto:Kguerrero0325@gmail.com"  target="_blank">Kguerrero0325@gmail.com</Link>
          </div>
          <div>
            <ButtonNotifyArrow/>
          </div>
        </div>

        <motion.svg
          viewBox="0 0 1000 210"
          className="w-full px-6 select-none"
          aria-label="Moss"
          role="img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {letters.map(({ char, x, width }, i) => (
            <motion.text
              key={i}
              x={x}
              y="270"
              textLength={width}
              lengthAdjust="spacingAndGlyphs"
              fontSize="360"
              fontWeight="800"
              fill="currentColor"
              style={{ fontFamily: "var(--font-geist-sans)" }}
              variants={{ hidden: { y: 260 }, visible: { y: 0 } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {char}
            </motion.text>
          ))}
        </motion.svg>
      </div>
      <p className="text-sm">©2026 Moss. All rights reserved.</p>
    </footer>
  );
}