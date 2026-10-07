import Link from "next/link";
import { ButtonNotify } from "./button-notify";


export function Header(){
  return(
    <div className="flex flex-row justify-between items-center w-full  py-4 ">

      <div className="flex flex-row justify-between items-center w-full h-[60px] lg:h-[86px]">
        <div>
          <Link href="/" className="text-2xl lg:text-4xl font-bold select-none">Moss</Link>
        </div>

        <div className="flex flex-row gap-6 items-center">
          <Link href="/moss-pioneer" className="text-base lg:text-lg cursor-pointer font-medium">
            Moss Pioneer
          </Link>
          <ButtonNotify theme="light"/>
        </div>
      </div>

    </div>
  )
}