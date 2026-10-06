"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "How does Moss's microphone work?",
    answer: "Moss uses an advanced dual-microphone system, ensuring perfect understanding no matter the environment.",
  },
  {
    question: "How do I charge Moss?",
    answer: "Moss charges via the USB-C port located on the back of the device. A USB-C cable is not included in the box.",
  },
  {
    question: "Does Moss keep capturing if I don't use the button to stop?",
    answer:
      "By default, the device stops recording after a certain time period of silence. You can change this timing by selecting from a list of options ranging from 5 minutes to 24 hours.",
  },
];

export function Details(){
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return(
    <div className="flex flex-col w-full min-h-[50vh] bg-[#E5E0DD] rounded-4xl p-4 mt-4">
      <div className="flex flex-col items-center gap-12 py-12 h-full" >
        <p className="text-6xl font-bold">Additional details</p>
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
