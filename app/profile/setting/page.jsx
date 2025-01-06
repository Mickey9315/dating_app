"use client";
import * as React from "react";
import InterestTag from "./InterestTag";
import OnlineStatus from "./OnlineStatus";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ProfileView() {
  const interests = [
    { emoji: "🌊", label: "Music" },
    { emoji: "🚯", label: "Art" },
    { emoji: "🚽", label: "Soccer" },
    { emoji: "😲", label: "Ski" }
  ];

  const router = useRouter();

  const Back = () => {
    router.push("/profile")
  }
  return (
    <div className="flex flex-col mx-auto animate-slide-in-right w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-4 pt-8 pb-4 w-full bg-white border-b border-zinc-200">
        <div className="flex gap-10 justify-between items-center w-full">
          <div className="flex shrink-0 gap-2.5 self-stretch my-auto w-10 h-10 bg-white" />
          <div className="self-stretch my-auto text-xl font-medium tracking-tight leading-tight text-center text-black">
            My Profile
          </div>
          <button 
            className="flex gap-2.5 justify-center items-center self-stretch px-2 my-auto w-10 h-10 bg-white rounded-2xl min-h-[40px] rotate-[3.141592653589793rad]"
            aria-label="Profile settings"
          >
            <Image
              loading="lazy"
              src="/assets/images/close.svg"
              alt=""
              width="28"
              height="28"
              className="object-contain self-stretch my-auto w-6 aspect-square"
              onClick={Back}
            />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col flex-1 w-full">
        <div className="flex relative flex-col w-full min-h-[450px]">
          <img
            loading="lazy"
            src="/assets/images/temp_full.png"
            alt="Profile background"
            className="object-contain z-0 flex-1 w-full aspect-[0.53]"
          />
          <div className="flex absolute inset-x-0 bottom-0 z-0 gap-4 items-start p-6 top-[550px] w-[480px] max-sm:left-[-15px] max-sm:top-[516px]">
            <div className="flex flex-col flex-1 shrink -mt-1 mb-5 w-full basis-0 min-w-[240px]">
              <OnlineStatus />
              <div className="flex flex-col mt-2 w-full">
                <div className="flex gap-1 items-start w-full text-3xl font-semibold tracking-tighter leading-none text-white">
                  <div>Ethan Hunt</div>
                  <div>-</div>
                  <div>29</div>
                </div>
                <div className="flex gap-2 items-start mt-2 w-full text-sm tracking-normal whitespace-nowrap">
                  {interests.map((interest, index) => (
                    <InterestTag
                      key={index}
                      emoji={interest.emoji}
                      label={interest.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-10 w-full min-h-0 bg-white" />
      </div>
    </div>
  );
}

export default ProfileView;