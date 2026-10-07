import Image from "next/image";

const deviceFrameStyle =
  "h-auto w-[min(402px,86%)] p-2 pb-0 bg-white/60 rounded-t-[clamp(22px,5vw,33px)]";


export function Chat() {
  return (
    <div className="relative mt-4 lg:mt-12 w-full overflow-hidden rounded-4xl bg-[#D3C3FF]">
      

      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col  gap-2 w-full text-center my-12">
          <p className="px-6 pt-12 text-center text-2xl md:text-4xl font-bold">
            Ask questions grounded in what you saved
          </p>
          <p className="mx-auto max-w-2xl px-6 text-base md:text-lg">
            Moss is planned to answer from your sermons, Bible studies, notes, and cited Scripture, so you can return to the source.
          </p>
        </div>
        
      </div>

      <div className="relative mx-auto mt-2 flex  items-end justify-center">
        <div className="absolute top-[5%] right-[calc(53%+11.5rem)] z-20 hidden w-[min(300px,26%)] flex-col lg:flex">
          <Image
            src="/images/chats/1/chat11.svg"
            alt="What did Pastor say about forgiveness?"
            width={268}
            height={92}
            className="relative z-20 ml-auto h-auto w-[78%] rotate-[5deg]"
          />
          <Image
            src="/images/chats/1/chat12.svg"
            alt="From Sunday's sermon"
            width={386}
            height={261}
            className="relative z-10 mt-6 h-auto w-full -rotate-[3deg]"
          />
          <Image
            src="/images/chats/1/chat13.svg"
            alt="Current progress"
            width={386}
            height={180}
            className="relative z-10 mt-6 h-auto w-full rotate-[7deg]"
          />
        </div>

        <Image
          src="/images/chat01.svg"
          alt="Planned Moss chat grounded in saved sermons and Bible studies"
          width={402}
          height={587}
          className={deviceFrameStyle}
        />

        <div className="absolute top-[5%] left-[calc(53%+11.5rem)] z-20 hidden w-[min(300px,26%)] flex-col items-end lg:flex">
          <Image
            src="/images/chats/2/chat21.svg"
            alt="What did Pastor say about forgiveness?"
            width={268}
            height={92}
            className="relative z-20 mr-auto h-auto w-[78%] -rotate-[5deg]"
          />
          <Image
            src="/images/chats/2/chat22.svg"
            alt="From Sunday's sermon"
            width={386}
            height={261}
            className="relative z-10 mt-9 h-auto w-full rotate-[4deg]"
          />
          <Image
            src="/images/chats/2/chat23.svg"
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
