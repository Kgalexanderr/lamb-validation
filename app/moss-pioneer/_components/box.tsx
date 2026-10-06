import { BookOpen, Smartphone, Watch, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const items: { icon: LucideIcon; title: string; description: string; dark: boolean }[] = [
  { icon: Smartphone, title: "Moss Pioneer", description: "The standalone device", dark: false },
  { icon: Watch, title: "Wristband", description: "To wear Moss on either wrist", dark: true },
  { icon: BookOpen, title: "Start Guide", description: "Details to set up and personalize Moss", dark: false },
];

export function Box(){
  return(
    <div className="flex flex-col w-full min-h-[50vh] bg-[#E5E0DD] rounded-4xl p-4 mt-4">
      <div className="flex flex-col items-center gap-12 py-12 h-full" >
        <p className="text-6xl font-bold">What&apos;s in the box?</p>
      </div>
      <div className="flex flex-1 justify-center items-center bg-[#F7F3F1] rounded-4xl px-8 py-16 text-[#21200B]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-10">
          {items.map(({ icon: Icon, title, description, dark }) => (
            <div key={title} className="flex items-center gap-4">
              <div
                className={cn(
                  "flex items-center justify-center size-18 shrink-0 rounded-full",
                  dark ? "bg-[#21200B] text-[#FFD900]" : "bg-[#FFD900] text-[#21200B]"
                )}
              >
                <Icon size={44} strokeWidth={1.75} />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-medium">{title}</p>
                <p className="text-md text-[#21200B]/60">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
