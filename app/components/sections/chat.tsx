import { cn } from "@/lib/utils";
import Image from "next/image";

export function Chat(){
  return(
    <div className="flex flex-col w-full min-h-[50vh] max-h-[80vh] bg-[#D3C3FF] rounded-4xl p-4 pb-0 mt-12 overflow-hidden">
      <div className="flex flex-col items-center gap-18 pt-12 h-full" >
        <p className="text-4xl font-bold">Search for and talk about anything</p>
        <div className={cn("flex flex-col flex-1 min-h-0 overflow-hidden justify-end")}>
          <Image
            src="/chatexample.svg"
            alt="Upcoming from church"
            width={600}
            height={700}
            className="object-contain w-full h-full mt-12 border-6 border-b-0 border-gray-100 rounded-t-[50px]"
          />
        </div>
        
      </div>
    </div>
  )
}