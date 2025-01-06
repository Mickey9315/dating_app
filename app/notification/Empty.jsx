import * as React from "react";

export function Empty() {
  return (
    <>
      <img
        loading="lazy"
        src="/assets/images/empty_noti.svg"
        alt="No notifications illustration"
        className="object-contain self-center mt-20 max-w-full rounded-none aspect-[0.95] w-[198px]"
      />
      <div className="flex flex-col pr-8 pl-24 mb-0 -ml-0.5 w-full">
        <div className="ml-10 text-2xl font-semibold tracking-tight leading-none text-black">
          No Notifications Yet
        </div>
        <div className="pt-2 mt-4 w-full text-lg tracking-normal leading-6 text-gray-600">
          You have no notifications yet. Stay tuned for updates and alerts that
          matter to you!
        </div>
      </div>
    </>
  );
}