"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

function Header({ title }) {
  const router = useRouter();
  
  const Back = () => {
    router.push("/profile");
  }

  return (
    <div className="flex z-0 flex-col px-4 pt-10 pb-4 w-full bg-white border-b border-solid border-b-zinc-200">
      <div className="flex gap-10 justify-between items-center w-full">
        <button 
          className="flex gap-2.5 justify-center items-center self-stretch p-2 my-auto w-10 min-h-[40px]"
          aria-label="Back"
        >
          <Image
            loading="lazy"
            src="/assets/images/backbutton.svg"
            className="object-contain self-stretch my-auto w-6 aspect-square"
            alt=""
            onClick={Back}
            width="28"
            height="28"
          />
        </button>
        <div className="self-stretch my-auto text-lg font-medium tracking-tight leading-none text-black">
          {title}
        </div>
        <div className="flex shrink-0 gap-2.5 self-stretch my-auto w-10 h-10 bg-white rounded-2xl rotate-[3.141592653589793rad]" />
      </div>
    </div>
  );
}

export default Header;