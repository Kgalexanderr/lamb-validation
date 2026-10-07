import Image from "next/image";
import { ButtonNotifyArrow } from "../button-notify-arrow";
export function Hero(){
  return(
    <div className="flex flex-col items-center justify-center w-full h-[80vh] relative p-4 lg:p-8 ">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden rounded-4xl">
        <Image 
          src="/images/heroimg.png" 
          alt="Churchgoer reading the Bible while wearing the Moss Pioneer concept"
          fill
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.65'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
        />
      </div>
      <div className="flex flex-col justify-end items-start gap-4 lg:flex-row lg:justify-between lg:items-end w-full h-full z-10">

        <div className="flex flex-col gap-4">
          <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white">Moss • Concept in development</p>
          <p className="text-4xl md:text-5xl lg:text-8xl font-bold leading-none text-white">
            Stay present for the sermon. Revisit what mattered later.
          </p>
          <p className="max-w-3xl text-base md:text-xl text-white">
            A wearable and companion app concept designed to record sermons and Bible studies, organize key points and Scripture, and help you return to them during the week.
          </p>
        </div>
        <div className="shrink-0">
          <ButtonNotifyArrow/>
        </div>
      </div>
    </div>
  )
}