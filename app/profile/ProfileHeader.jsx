import Image from "next/image";
import * as React from "react";

export function ProfileHeader() {
  return (
    <div className="flex overflow-hidden relative flex-col px-6 pt-16 pb-6 w-full bg-white border-b border-zinc-200">
      <div className="flex overflow-hidden absolute top-0 right-0 z-0 flex-col h-[114px] w-[100%]">
        <div className="flex w-full bg-violet-100 min-h-[214px]" />
      </div>
      <div className="flex z-0 flex-col justify-center items-center w-full font-medium">
        <img
          loading="lazy"
          src="/assets/images/temp.png"
          width="28"
          height="28"
          alt="Profile picture of Ethan Hunt"
          className="object-contain max-w-full shadow-sm aspect-square rounded-[999px] w-[100px]"
        />
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="text-xl tracking-tight leading-tight text-black">
            Ethan Hunt
          </div>
          <button className="flex items-center mt-1 text-base tracking-normal leading-none text-indigo-600">
            <div className="gap-2 self-stretch px-2 my-auto text-ellipsis">
              Preview my profile
            </div>
            <Image
              loading="lazy"
              src="/assets/images/next_profile.svg"
              width="28"
              height="28"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </button>
        </div>
      </div>
    </div>
  );
}