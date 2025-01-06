"use client";
import { useRouter } from "next/navigation";
import * as React from "react";

export function NotificationHeader() {

    const router = useRouter();

    const Back = () => {
        router.push("/");
    }

    return (
        <div className="flex flex-col px-4 pt-6 pb-4 w-full bg-white border-b border-zinc-200">
            <div className="flex gap-10 justify-between items-center w-full">
                <div className="flex gap-2.5 justify-center items-center self-stretch px-2 my-auto w-10 h-10 bg-white min-h-[40px]">
                    <button>
                        <img
                            loading="lazy"
                            src="/assets/images/backbutton.svg"
                            alt=""
                            className="object-contain self-stretch my-auto w-6 aspect-square"
                            onClick={Back}
                        />
                    </button>
                </div>
                <div className="self-stretch my-auto text-xl font-medium tracking-tight leading-tight text-black">
                    Notifications
                </div>
                <div className="flex shrink-0 gap-2.5 self-stretch my-auto w-10 h-10 bg-white" />
            </div>
        </div>
    );
}