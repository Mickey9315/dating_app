"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

export function MenuItem({ icon, title, description, hasArrow, titleColor, className, order }) {
  
  const router = useRouter();

  const Next = (order) => {
    switch(order) {
      case 1:
        router.push("/auth/reset1");
      case 2:
        router.push("/auth/reset1");
      case 3: 
        router.push("/auth/reset1");
    }
  }

  return (
    <div className={`flex gap-4 w-full bg-white rounded-3xl ${className}`}>
      <div className="flex flex-1 shrink gap-6 items-start h-full basis-0 min-w-[240px]">
        <img
          loading="lazy"
          src={icon}
          alt=""
          width="28"
          height="28"
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
          <div className={`text-lg font-medium tracking-tight leading-none ${titleColor || 'text-black'}`}>
            {title}
          </div>
          <div className="mt-1 text-base tracking-normal text-gray-600 text-ellipsis">
            {description}
          </div>
        </div>
      </div>
      {hasArrow && (
        <Image
          loading="lazy"
          src="/assets/images/next.svg"
          alt=""
          width="28"
          height="28"
          className="object-contain shrink-0 my-auto w-6 aspect-square"
          onClick={Next(order)}
        />
      )}
    </div>
  );
}