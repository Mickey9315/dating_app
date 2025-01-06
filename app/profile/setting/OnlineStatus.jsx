import * as React from "react";

function OnlineStatus() {
  return (
    <div className="flex justify-center items-center self-start px-1.5 text-sm font-medium tracking-normal leading-none text-white whitespace-nowrap bg-emerald-600 min-h-[24px] rounded-[800px]">
      <div className="flex items-center self-stretch my-auto">
        <img
          loading="lazy"
          src="/assets/images/online.svg"
          alt="Online status indicator"
          className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
        />
        <div className="gap-2.5 self-stretch px-1 my-auto">
          Online
        </div>
      </div>
    </div>
  );
}

export default OnlineStatus;