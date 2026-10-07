"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function Hero(){
  return(
    <div className="flex flex-col justify-between items-center gap-12 pt-12 h-[80vh]" >
      <div className="flex flex-col  h-full justify-center items-center gap-12">
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold">Moss Pioneer</h1>
        <Image
          src="/herotwo.png"
          alt="Moss Pioneer device"
          width={1408}
          height={510}
          className="w-full max-w-[590px] h-auto"
        />
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
        className="opacity-50"
      >
        <ChevronDown size={40} />
      </motion.div>
    </div>
  )
}
