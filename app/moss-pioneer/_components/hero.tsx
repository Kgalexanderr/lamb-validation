"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { ButtonNotifyArrow } from "../../components/button-notify-arrow";

export function Hero(){
  return(
    <div className="flex min-h-[80vh] flex-col items-center justify-between gap-12 pt-12" >
      <div className="flex h-full max-w-5xl flex-col items-center justify-center gap-8 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em]">Concept in development</p>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-8xl">One press. Phone away.</h1>
        <p className="max-w-3xl text-lg leading-relaxed md:text-2xl">
          Moss Pioneer is a wearable concept designed to record a sermon or Bible study deliberately, so you can stay present and revisit the message later in the Moss app.
        </p>
        <Image
          src="/herotwo.png"
          alt="Moss Pioneer wearable concept"
          width={1408}
          height={510}
          className="w-full max-w-[590px] h-auto"
        />
        <ButtonNotifyArrow />
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
