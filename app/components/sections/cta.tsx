import Image from "next/image";
import Link from "next/link";
import { AudioLines, BatteryCharging, Globe, MicOff, type LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: AudioLines,
    title: "Designed for clear sermon audio",
    description:
      "We are exploring dual microphones and noise filtering to improve recordings in rooms with voices, music, and background noise.",
  },
  {
    icon: BatteryCharging,
    title: "Targeting multi-day battery life",
    description:
      "The goal is a wearable that can go through the week between charges. Battery performance has not been validated yet.",
  },
  {
    icon: MicOff,
    title: "One press, with a visible indicator",
    description:
      "The planned button starts and stops recording, while an LED makes the recording state clear. Follow church policies and ask permission when needed.",
  },
  {
    icon: Globe,
    title: "Multilingual support is planned",
    description:
      "We want Moss to serve church communities in multiple languages. The first supported languages will be set after prototype testing.",
  },
];

export function CTA() {
  return (
    <div className="flex flex-col w-full min-h-[90vh] bg-[#E5E0DD] rounded-4xl p-4 mt-4 lg:mt-12">
      <div className="flex flex-col items-center gap-18 pt-12 h-full" >
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em]">Concept in development</p>
          <p className="text-2xl md:text-4xl font-bold">The Moss Pioneer</p>
        </div>
        <Image
          src="/ctaone.png"
          alt="Moss Pioneer wearable concept"
          width={1408}
          height={510}
          className="w-full max-w-[400px] lg:max-w-[600px] h-auto"
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-between items-center gap-14 bg-[#F7F3F1] rounded-4xl px-8 lg:py-16 py-8 text-[#21200B]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14 max-w-[920px]">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4">
              <Icon className="!size-8 lg:size-12" strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <p className="text-md md:text-lg lg:text-2xl font-medium">{title}</p>
                <p className="text-sm lg:text-md leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-3xl text-center text-sm lg:text-base leading-relaxed">
          Privacy is part of the design. Personal recordings are intended to be private by default, deletable by you, and never used to train AI. These commitments will be verified as Moss is built.
        </p>
        <Link
          href="/moss-pioneer"
          className="bg-[#21200B] text-[#FFD900] text-center text-lg px-6 py-3 rounded-full w-full md:w-fit"
        >
          Explore the Moss Pioneer concept
        </Link>
      </div>
    </div>
  );
}
