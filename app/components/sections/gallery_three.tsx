import Image from "next/image";
import { cn } from "@/lib/utils";

const deviceFrameStyle =
  "h-auto w-[min(402px,86%)] p-2 pb-0 bg-white/60 rounded-t-[clamp(22px,5vw,33px)]";

function Title({title, className}: {title: string; className?: string}) {

  return(
    <div className="flex flex-col  gap-2 w-full text-center my-12">
      <p className={cn("text-2xl md:text-4xl font-bold", className)}>{title}</p>
    </div>
  )
}
export function GalleryThree(){
  return(
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-center w-full min-h-[150vh] mt-4 lg:mt-12">
      
      <div className="grid grid-row-2 gap-4 w-full h-full">
       <div className="col-span-1 flex flex-col justify-between items-center bg-[#D3C3FF] rounded-4xl overflow-hidden">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Title title="Gallery 1" className="text-[#FFFFFF]" />
          </div>
          <Image src="/summ.svg" alt="Gallery 1" width={402} height={587} className={deviceFrameStyle} />
        </div>
        <div className="col-span-1 flex flex-col justify-between items-center bg-[#E5E0DD] rounded-4xl overflow-hidden">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Title title="Upcoming from church"/>
          </div>
          <Image src="/notv2.svg" alt="Upcoming from church" width={402} height={587} className="h-auto w-[min(402px,86%)]" />
        </div>
      </div>

      <div className="grid grid-row-2 gap-4 w-full h-full">
        
        <div className="col-span-1 flex flex-col justify-between items-center bg-[#E5E0DD] rounded-4xl overflow-hidden">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Title title="Instant summaries" />
          </div>

          <Image src="/summ.svg" alt="Gallery 1" width={402} height={587} className={deviceFrameStyle} />
        </div>
        <div className="col-span-1 flex flex-col justify-between items-center bg-[#21200B] rounded-4xl overflow-hidden">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Title title="Voice notes" className="text-[#FFD900]" />
          </div>
          <Image src="/memov3.svg" alt="Gallery 1" width={402} height={587} className={deviceFrameStyle} />
        </div>
      </div>

    </div>
  )
}
