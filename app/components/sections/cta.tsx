import Image from "next/image";
import Link from "next/link";
import { AudioLines, BatteryCharging, Globe, MicOff, type LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: AudioLines,
    title: "Advanced noise filtering",
    description:
      "Dual microphones and advanced noise filtering ensure clear comprehension and transcriptions.",
  },
  {
    icon: BatteryCharging,
    title: "Up to 7 days of battery life",
    description: "Features a battery that can last up to 160 hours on a single charge.",
  },
  {
    icon: MicOff,
    title: "Easily start and stop",
    description:
      "A single press of the button starts and stops capturing. Your device's LED will be green when Moss is capturing and off when it is not.",
  },
  {
    icon: Globe,
    title: "40 languages",
    description:
      "Moss understands up to 40 different languages. Train it with the language you use most often.",
  },
];

export function CTA() {
  return (
    <div className="flex flex-col w-full min-h-[90vh] bg-[#E5E0DD] rounded-4xl p-4 mt-12">
      <div className="flex flex-col items-center gap-18 pt-12 h-full" >
        <p className="text-6xl font-bold">The Moss Pioneer</p>
        <Image
          src="/ctaone.png"
          alt="Moss Pioneer device"
          width={1408}
          height={510}
          className="w-full max-w-[600px] h-auto"
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-between items-center gap-14 bg-[#F7F3F1] rounded-4xl px-8 py-16 text-[#21200B]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14 max-w-[920px]">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4">
              <Icon size={44} strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-medium">{title}</p>
                <p className="text-md leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/moss-pioneer"
          className="bg-[#21200B] text-[#FFD900] text-lg px-5 py-3 rounded-full"
        >
          Learn more about Moss Pioneer
        </Link>
      </div>
    </div>
  );
}
