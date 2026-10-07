import { BookOpen, Smartphone, Watch, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const items: { icon: LucideIcon; title: string; description: string; dark: boolean }[] = [
  { icon: Watch, title: "Comfort first", description: "Light enough to wear through a full service or study", dark: false },
  { icon: Smartphone, title: "Simple by design", description: "One deliberate action while the phone stays away", dark: true },
  { icon: BookOpen, title: "Made for church", description: "Clear recording signals, consent guidance, and a focused companion app", dark: false },
];

export function Box(){
  return(
    <div className="flex flex-col w-full min-h-[50vh] bg-[#E5E0DD] rounded-4xl p-4 mt-4">
      <div className="flex flex-col items-center gap-3 py-12 h-full text-center" >
        <p className="text-2xl md:text-4xl font-bold">Help shape the first Moss Pioneer</p>
        <p className="max-w-2xl text-base leading-relaxed text-[#21200B]/70 md:text-lg">
          The final hardware is not decided. Early-access feedback will help us prioritize the parts of the experience that matter most.
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center bg-[#F7F3F1] rounded-4xl px-8 py-16 text-[#21200B]">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-16 justify-center lg:justify-items-start">
          {items.map(({ icon: Icon, title, description, dark }) => (
            <div key={title} className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:text-left">
              <div
                className={cn(
                  "flex items-center justify-center size-18 lg:size-20 shrink-0 rounded-full",
                  dark ? "bg-[#21200B] text-[#FFD900]" : "bg-[#FFD900] text-[#21200B]"
                )}
              >
                <Icon className="!size-8 lg:size-12" strokeWidth={1.75} />
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
