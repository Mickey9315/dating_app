import Image from "next/image";
import * as React from "react";

const menuItems = [
  { icon: "/assets/images/profile_active.svg" },
  { icon: "/assets/images/search.svg" },
  { icon: "/assets/images/swipe.svg" },
  { icon: "/assets/images/like.svg" },
  {
    icon: "/assets/images/chat.svg",
    hasNotification: true
  }
];

export function MenuBar() {
  return (
    <div className="flex gap-2 justify-center items-start pb-5 -mt-1 w-full bg-white border-t border-zinc-200">
      <div className="flex flex-1 shrink gap-2 items-center px-4 w-full basis-0 min-w-[240px]">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col flex-1 shrink justify-center items-center self-stretch py-5 my-auto basis-0 min-h-[64px]"
          >
            <div className="flex relative gap-2.5 items-start w-7">
              <Image
                loading="lazy"
                src={item.icon}
                alt=""
                className="object-contain shrink-0 my-auto w-7 aspect-square"
                width="28"
                height="28"
              />
              {item.hasNotification && (
                <div className="flex absolute top-0 right-0 z-0 gap-2.5 items-center self-start p-0.5 w-3">
                  <div className="flex self-stretch my-auto w-2 h-2 bg-red-500 rounded-full border-2 border-white border-solid min-h-[8px]" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}