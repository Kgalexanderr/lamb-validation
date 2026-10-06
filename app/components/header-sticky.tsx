"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ButtonNotify } from "./button-notify";

const SHOW_AFTER = 118;

export function HeaderSticky() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > SHOW_AFTER));

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center w-full py-4 px-8 bg-[#21200B]"
        >
          <div className="flex flex-row justify-between items-center w-full h-[86px]">
            <Link href="/" className="text-4xl font-bold text-[#FFD900] select-none">Moss</Link>
            <div className="flex flex-row gap-6 items-center">
              <Link href="/moss-pioneer" className="text-lg cursor-pointer font-medium text-[#FFD900]">
                Moss Pioneer
              </Link>
              <ButtonNotify theme="dark" />
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
