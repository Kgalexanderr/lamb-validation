"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const SLIDE_DURATION = 10;

const items: { title: string; description: string; image: string }[] = [
  {
    title: "Keep your phone away and stay present",
    description:
      "Moss Pioneer is being designed for deliberate, one-press recording, so you can listen without typing notes on your phone. A visible light would show when recording is active.",
    image: "/images/handone.png",
  },
  {
    title: "Come back to an organized message",
    description:
      "The companion app is planned to turn each recording into a transcript, concise summary, Scripture references, notes, dates, and reminders you can review after church.",
    image: "/images/handtwo.png",
  },
  {
    title: "Return to the message between Sundays",
    description:
      "Ask questions grounded in your saved sermons, Bible studies, and cited Scripture. You can also add a voice reflection when a thought is worth keeping.",
    image: "/images/image01.svg",
  },
];

function ActiveItem({ title, description, onComplete }: { title: string; description: string; onComplete: () => void }) {
  return (
    <div className="flex flex-col gap-4 py-8 relative">
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold"
        >
          {title}
        </motion.p>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg text-black"
      >
        {description}
      </motion.p>
      <div className="h-px w-full bg-black opacity-10 absolute bottom-0 left-0" />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: SLIDE_DURATION, ease: "linear" }}
        onAnimationComplete={onComplete}
        className="h-px w-full bg-black absolute bottom-0 left-0 origin-left"
      />
    </div>
  );
}

function InactiveItem({ title, onSelect }: { title: string; onSelect: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="flex items-center gap-4 w-full py-8 relative text-left cursor-pointer"
    >
      <p className="text-2xl font-bold w-full">{title}</p>
      <motion.span
        variants={{ rest: { opacity: 0, x: -12 }, hover: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex"
      >
        <ArrowRight className="w-6 h-6" />
      </motion.span>
      <div className="h-px w-full bg-black opacity-10 absolute bottom-0 left-0" />
    </motion.button>
  );
}

export function Slide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => setActiveIndex((i) => (i + 1) % items.length);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:h-[90vh]  bg-[#FFD900] rounded-4xl mt-4 lg:mt-12 overflow-hidden">
      <div className="flex-1 w-full h-full p-8 flex flex-col">
        {items.map((item, index) =>
          index === activeIndex ? (
            <ActiveItem key={index} title={item.title} description={item.description} onComplete={next} />
          ) : (
            <InactiveItem key={index} title={item.title} onSelect={() => setActiveIndex(index)} />
          )
        )}
      </div>
      <div className="flex-1 relative w-full h-full aspect-square lg:aspect-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={item.image} alt={item.title} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
