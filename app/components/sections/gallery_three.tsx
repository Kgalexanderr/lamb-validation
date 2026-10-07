import Image from "next/image";
import { cn } from "@/lib/utils";

const deviceFrameStyle =
  "h-auto w-[min(402px,86%)] p-2 pb-0 bg-white/60 rounded-t-[clamp(22px,5vw,33px)]";

function Title({title, className}: {title: string; className?: string}) {

  return(
    <div className="flex flex-col  gap-2 w-full text-center my-12 items-center justify-center">
      <p className={cn("text-2xl md:text-4xl font-bold", className)}>{title}</p>
    </div>
  )
}
export function GalleryThree(){
  return(
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-center w-full min-h-[150vh] mt-4 lg:mt-12">
      
      <div className="grid grid-row-2 gap-4 w-full h-full">
        <div className="col-span-1 row-span-4 min-h-[500px] flex flex-col justify-between items-start bg-[#21200B] rounded-4xl overflow-hidden relative">
          <div className="flex flex-col justify-center items-center h-full w-full z-10">
            <Title title="Press once. Stay present." className="text-[#FFD900] " />
          </div>
          <Image src="/images/press01.svg" alt="Moss Pioneer recording concept worn during a sermon" fill className="absolute inset-0 object-cover" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-black/30" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[2] opacity-20 mix-blend-soft-light"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.65'/%3E%3C/svg%3E\")",
              backgroundSize: "180px 180px",
            }}
          />
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-between items-center bg-[#E5E0DD] rounded-4xl overflow-hidden">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Title title="Voice notes" />
          </div>
          <Image src="/images/voicenote01.svg" alt="Planned voice notes for personal reflections" width={402} height={587} className={deviceFrameStyle} />
        </div>
        
        
      </div>

      <div className="grid grid-row-2 gap-4 w-full h-full">
        
        <div className="col-span-1 flex flex-col justify-between items-center bg-[#D3C3FF] rounded-4xl overflow-hidden">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Title title="Key points and Scripture together" className="text-[##21200B]" />
          </div>

          <Image src="/images/summary01.svg" alt="Planned sermon summary with key points and Scripture references" width={402} height={587} className={deviceFrameStyle} />
        </div>
        
        <div className="col-span-1 flex flex-col justify-between items-center bg-[#FFD900] rounded-4xl overflow-hidden">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Title title="Remember dates mentioned at church" className="w-[70%]" />
          </div>
          <Image src="/images/upcoming01.svg" alt="Planned reminders for dates mentioned during church" width={402} height={587} className="h-auto w-[min(402px,86%)]" />
        </div>
      </div>

    </div>
  )
}
