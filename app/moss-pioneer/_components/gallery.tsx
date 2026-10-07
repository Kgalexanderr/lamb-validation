import Image from "next/image";
import { cn } from "@/lib/utils";
import { AudioLines, BatteryCharging, Languages, MicOff } from "lucide-react";

const deviceFrameStyle = "p-2 pb-0 bg-white/60 rounded-t-[33px]";

function Title({title, className}: {title: string; className?: string}) {

  return(
    <div className="flex flex-col items-center gap-2 w-full text-center my-12">
      <p className={cn("text-2xl md:text-4xl font-bold", className)}>{title}</p>
    </div>
  )
}
export function GalleryThree(){
  return(
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-center w-full min-h-[80vh] mt-12">
      
      <div className="grid grid-row-2 gap-4 w-full h-full">
        <div className="col-span-1 flex flex-col justify-center items-center bg-[#21200B] rounded-4xl overflow-hidden py-12 pb-0">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <AudioLines className="w-10 h-10 text-[#FFD900]" />
            <Title title="Dual microphones with advanced noise filtering" className="text-[#FFD900] max-w-[70%]" />
          </div>
          <Image src="/angelcut.svg" alt="Gallery 1" width={300} height={300}  />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center bg-[#D3C3FF] rounded-4xl overflow-hidden py-12">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <BatteryCharging className="w-10 h-10 text-[#150A45]" />
            <Title title="7 days of battery life per charge" className="text-[#150A45] max-w-[70%]" />
          </div>
          <Image src="/angel.svg" alt="Gallery 1" width={300} height={300}  />
        </div>
      </div>

      <div className="grid grid-row-2 gap-4 w-full h-full">
        
        <div className="col-span-1 flex flex-col justify-center items-center bg-[#FFD900] rounded-4xl overflow-hidden py-12 pb-0">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <MicOff className="w-10 h-10 text-[##000000]" />
            <Title title="Easily start and stop with a button press" className="text-[##000000] max-w-[70%]" />
          </div>

          <Image src="/ctaone.png" alt="Gallery 1" width={300} height={300} />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center bg-[#150A45] rounded-4xl overflow-hidden py-12">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Languages className="w-10 h-10 text-[#D3C3FF]" />
            <Title title="Understands up to 40 different languages" className="text-[#D3C3FF] max-w-[70%]" />
          </div>
        </div>
      </div>

    </div>
  )
}
