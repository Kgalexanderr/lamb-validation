import Image from "next/image";

export function Chat() {
  return (
    <div className="relative mt-4 lg:mt-12 w-full overflow-hidden rounded-4xl bg-[#D3C3FF]">
      

      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col  gap-2 w-full text-center my-12">
          <p className="px-6 pt-12 text-center text-2xl md:text-4xl font-bold">
            Search for and talk about anything
          </p>
        </div>
        
      </div>

      <div className="relative mx-auto mt-2 flex  items-end justify-center">
        <div className="absolute top-[5%] right-[calc(53%+11.5rem)] z-20 hidden w-[min(300px,26%)] flex-col lg:flex">
          <Image
            src="/chatme.svg"
            alt="What did Pastor say about forgiveness?"
            width={268}
            height={92}
            className="relative z-20 ml-auto h-auto w-[78%] rotate-[5deg]"
          />
          <Image
            src="/chatai1.svg"
            alt="From Sunday's sermon"
            width={386}
            height={261}
            className="relative z-10 mt-6 h-auto w-full -rotate-[3deg]"
          />
          <Image
            src="/chatai2.svg"
            alt="Current progress"
            width={386}
            height={180}
            className="relative z-10 mt-6 h-auto w-full rotate-[7deg]"
          />
        </div>

        <Image
          src="/chatexample.svg"
          alt="Search for and talk about anything"
          width={402}
          height={587}
          className="relative z-10 h-auto w-[min(402px,72vw)] rounded-t-[50px] border-6 border-b-0 border-gray-100"
        />

        <div className="absolute top-[5%] left-[calc(53%+11.5rem)] z-20 hidden w-[min(300px,26%)] flex-col items-end lg:flex">
          <Image
            src="/chatme2.svg"
            alt="What did Pastor say about forgiveness?"
            width={268}
            height={92}
            className="relative z-20 mr-auto h-auto w-[78%] -rotate-[5deg]"
          />
          <Image
            src="/chatai11.svg"
            alt="From Sunday's sermon"
            width={386}
            height={261}
            className="relative z-10 mt-9 h-auto w-full rotate-[4deg]"
          />
          <Image
            src="/chatai22.svg"
            alt="Current progress"
            width={386}
            height={180}
            className="relative z-10 mt-9 h-auto w-full -rotate-[8deg]"
          />
        </div>
      </div>
    </div>
  );
}
