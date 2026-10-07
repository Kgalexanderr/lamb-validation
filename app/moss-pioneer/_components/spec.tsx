import Image from "next/image";

function SpecImage(){
  return(
    <div className="flex flex-col w-full min-h-[90vh] bg-[#E5E0DD] rounded-4xl p-4 mt-4 lg:mt-12 items-center justify-center hidden md:flex">
      <div className="flex flex-col items-center gap-12 py-12 h-full" >
        <p className="text-2xl md:text-4xl font-bold">Device specifications</p>
      </div>
      <Image src="/details3.svg" alt="Device specifications" width={800} height={800} />
    </div>
  )
}

const specs = [
  "Dual microphones",
  "LED indicator",
  "Easily start and stop recording with a button press",
  "Rear USB-C Port",
];

function SpecText(){
  return(
    <div className="flex flex-col w-full  bg-[#E5E0DD] rounded-4xl p-4 mt-4 lg:mt-12 items-center justify-center flex md:hidden">
      <div className="flex flex-col items-center gap-12 py-12 h-full" >
        <p className="text-2xl md:text-4xl font-bold">Device specifications</p>
      </div>
      <Image src="/herotwo.png" alt="Device specifications" width={400} height={500} />

      <ul className="flex list-disc flex-col gap-8 p-4  text-lg text-[#21200B] w-full">
        {specs.map((item) => (
          <li key={item} className="ml-4">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function Spec(){
  return(
    <>
      <SpecImage />
      <SpecText />
    </>
  )
}