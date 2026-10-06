import Image from "next/image";
import { cn } from "@/lib/utils";

function Title({title, className}: {title: string; className?: string}) {

  return(
    <div className="flex flex-col gap-2 w-full text-center my-12">
      <p className={cn("text-4xl font-bold", className)}>{title}</p>
    </div>
  )
}

const frame = "border-6 border-b-0 border-gray-100 rounded-t-[50px]";

function GalleryImage({
  src,
  alt,
  width,
  height,
  crop = "bottom",
  fit = "width",
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  crop?: "top" | "bottom";
  fit?: "width" | "contain";
  className?: string;
}) {
  if (fit === "contain") {
    return (
      <div className="flex flex-1 min-h-0 w-full justify-center items-end">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="35vw"
          className={cn("h-full w-auto", className)}
        />
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col flex-1 min-h-0 w-[50%] overflow-hidden", crop === "top" && "justify-end")}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="35vw"
        className={cn("w-full h-auto shrink-0", crop === "bottom" && "mt-auto", className)}
      />
    </div>
  )
}

export function Gallery(){
  return(
    <div className="flex flex-row gap-4 justify-between items-center w-full h-[150vh] mt-12">
      
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="flex-1/6 flex flex-col justify-between items-center w-full bg-[#D3C3FF] rounded-4xl overflow-hidden">
          <Title title="Summaries and takeaways"/>
          <GalleryImage src="/summ.svg" alt="Summaries and takeaways" width={402} height={587} crop="top" className={frame} />
        </div>
        <div className="flex-1 flex flex-col justify-between items-center w-full bg-[#E5E0DD] rounded-4xl overflow-hidden">
          <Title title="Upcoming from church"/>
          <div className="relative flex-1 w-[50%] overflow-hidden">
            <Image
              src="/action2.svg"
              alt="Upcoming from church"
              fill
              sizes="70vw"
              className="object-contain rounded-b-none border-b-0 mt-18"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full h-full">
        <div className="flex-1 flex flex-col justify-between items-center w-full bg-[#E5E0DD] rounded-4xl overflow-hidden">
          <Title title="Patterns and insights"/>
          <GalleryImage src="/Mobile4.svg" alt="Patterns and insights" width={402} height={874} className={frame} />
        </div>
        <div className="flex-1/6 flex flex-col justify-between items-center w-full bg-[#21200B] rounded-4xl overflow-hidden">
          <Title title="Voice notes" className="text-[#FFD900]"/>
          <GalleryImage src="/sc.svg" alt="Voice notes" width={402} height={874} fit="contain" className={frame} />
        </div>
      </div>

    </div>
  )
}
