"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export function ButtonNotifyArrow() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex items-center gap-4 bg-[#FFD900] text-[#000000] text-lg font-medium h-[55px] pl-1.5 pr-6 rounded-full cursor-pointer"
    >
      <span className="flex items-center justify-center size-[43px] rounded-full bg-[#21200B] text-[#FFD900]">
        <motion.span
          variants={{ rest: { rotate: 45 }, hover: { rotate: 90 } }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex"
        >
          <ArrowUp size={20} strokeWidth={2} />
        </motion.span>
      </span>
      Get Notified
    </motion.button>
  );
}
