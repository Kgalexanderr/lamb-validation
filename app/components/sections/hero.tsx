import Image from "next/image";
import { ButtonNotifyArrow } from "../button-notify-arrow";
export function Hero(){
  return(
    <div className="flex flex-col items-center justify-center w-full h-[80vh] relative px-8 py-8">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden rounded-4xl">
        <Image 
          src="/heroimg.png" 
          alt="Hero" 
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-row justify-between items-end w-full h-full z-10">

        <div className="flex flex-col gap-4">
          <p className="text-2xl font-medium text-white">Introducing Moss</p>
          <p className="text-6xl font-bold leading-none text-white">The era of forgetting <br/> ends now.</p>
        </div>
        <div>
          <ButtonNotifyArrow/>
        </div>
      </div>
    </div>
  )
}