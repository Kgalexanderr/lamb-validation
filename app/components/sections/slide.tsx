"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const SLIDE_DURATION = 10;

const items: { title: string; description: string; image: string }[] = [
  {
    title: "Moss turns what you hear into something you can carry",
    description:
      "Moss captures your sermons and Bible studies and turns them into summaries, Scripture references, notes, reminders, and more — so the things that matter don’t get lost when you leave the room.",
    image: "/handone.png",
  },
  {
    title: "Moss remembers what matters to you",
    description:
      "As you use Moss, it connects the sermons, verses, topics, and moments you’ve saved — making it easier to look back, reflect, and continue where you left off.",
    image: "/handtwo.png",
  },
  {
    title: "Moss is there between Sundays",
    description:
      "Forgot what your pastor said last week? Want to revisit a verse from Bible study? Have a thought you don’t want to lose? Talk to Moss through the Moss Pioneer or the iOS and Android app.",
    image: "/newway5.png",
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
