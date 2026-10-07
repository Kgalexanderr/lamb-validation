"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "Why make a wearable instead of only an app?",
    answer:
      "The idea is to let you start recording deliberately without taking out a phone or typing during the message. The companion app is where you would review the recording, summary, Scripture, dates, and notes afterward.",
  },
  {
    question: "How would recording work?",
    answer:
      "The planned interaction is one press to start and one press to stop, with a visible light whenever recording is active. You should always follow your church's recording policy and ask permission when needed.",
  },
  {
    question: "How would Moss handle my recordings?",
    answer:
      "Our intended direction is private-by-default recordings, deletion controls for the user, and no model training on personal content. These are design commitments that must be implemented and verified before launch.",
  },
  {
    question: "When will Moss Pioneer be available?",
    answer:
      "Moss Pioneer is a concept in development, not a finished product. Joining early access helps us measure demand and decide whether to invest in building a consumer-ready version.",
  },
];

export function Details(){
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return(
    <div className="flex flex-col w-full min-h-[50vh] bg-[#E5E0DD] rounded-4xl p-4 mt-4">
      <div className="flex flex-col items-center gap-12 py-12 h-full" >
        <p className="text-2xl md:text-4xl font-bold">Questions about the concept</p>
      </div>
      <div className="flex flex-col px-8 text-[#21200B]">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={question} className="border-b border-[#21200B]/10 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex items-center justify-between w-full py-6 text-left text-lg font-medium cursor-pointer"
              >
                {question}
                {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-[#21200B]/70">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  )
}
