import Image from "next/image";
import { cn } from "@/lib/utils";
import { AudioLines, BatteryCharging, Languages, MicOff } from "lucide-react";

function Title({title, description, className}: {title: string; description: string; className?: string}) {

  return(
    <div className="flex flex-col items-center gap-3 w-full text-center my-12">
      <p className={cn("text-2xl md:text-4xl font-bold w-[70%]", className)}>{title}</p>
      {/* <p className={cn("max-w-md px-6 text-base leading-relaxed opacity-80", className)}>{description}</p> */}
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
            <Title
              title="Exploring clearer audio in church"
              description="We plan to prototype a microphone system for spoken messages in rooms with music, movement, and background noise."
              className="text-[#FFD900]"
            />
          </div>
          <Image src="/angelcut.svg" alt="Moss Pioneer microphone design concept" width={300} height={300} />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center bg-[#D3C3FF] rounded-4xl overflow-hidden py-12">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <BatteryCharging className="w-10 h-10 text-[#150A45]" />
            <Title
              title="Targeting battery life that lasts through the week"
              description="Multi-day battery life is a design goal. The final target will be set after hardware testing."
              className="text-[#150A45]"
            />
          </div>
          <Image src="/angel.svg" alt="Moss Pioneer battery design concept" width={300} height={300} />
        </div>
      </div>

      <div className="grid grid-row-2 gap-4 w-full h-full">
        
        <div className="col-span-1 flex flex-col justify-center items-center bg-[#FFD900] rounded-4xl overflow-hidden py-12 pb-0">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <MicOff className="w-10 h-10 text-black" />
            <Title
              title="Deliberate recording with one press"
              description="The planned button starts and stops recording, while a visible light makes the recording state clear."
              className="text-black"
            />
          </div>

          <Image src="/ctaone.png" alt="Moss Pioneer one-button recording concept" width={300} height={300} />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center bg-[#150A45] rounded-4xl overflow-hidden py-12">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Languages className="w-10 h-10 text-[#D3C3FF]" />
            <Title
              title="Multilingual support is part of the plan"
              description="We want Moss to serve more church communities. Supported languages will be chosen and validated during prototyping."
              className="text-[#D3C3FF]"
            />
          </div>
        </div>
      </div>

    </div>
  )
}
