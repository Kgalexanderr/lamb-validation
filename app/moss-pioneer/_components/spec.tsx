import Image from "next/image";

const specs = [
  {
    title: "Wearable form",
    description: "A lightweight device intended to sit comfortably on either wrist during a service or Bible study.",
  },
  {
    title: "One-button control",
    description: "A deliberate press would start or stop recording without opening a phone.",
  },
  {
    title: "Visible recording state",
    description: "A clear light would show the wearer and people nearby when recording is active.",
  },
  {
    title: "Room-audio testing",
    description: "The microphone system, charging method, and battery target will be decided through functional prototypes.",
  },
];

export function Spec(){
  return(
    <div className="mt-4 flex w-full flex-col items-center justify-center rounded-4xl bg-[#E5E0DD] p-4 lg:mt-12">
      <div className="flex max-w-3xl flex-col items-center gap-3 py-12 text-center">
        <p className="text-2xl font-bold md:text-4xl">Planned hardware direction</p>
        {/* <p className="text-base leading-relaxed text-[#21200B]/70 md:text-lg">
          These are design goals, not final specifications. Prototype testing will determine what ships.
        </p> */}
      </div>
      <Image src="/herotwo.png" alt="Moss Pioneer wearable design concept" width={590} height={510} />

      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:p-8">
        {specs.map(({ title, description }) => (
          <div key={title} className="rounded-3xl bg-[#F7F3F1] p-6">
            <p className="text-xl font-medium">{title}</p>
            <p className="mt-2 leading-relaxed text-[#21200B]/70">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}