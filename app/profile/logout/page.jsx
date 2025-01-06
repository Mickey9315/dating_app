"use client"
import * as React from "react";
import { LogoutButton } from "./LogoutButton";
import { useRouter } from "next/navigation";

export default function LogoutDialog() {
  const router = useRouter(); 
  const handleLogout = () => {
    router.push("/onboard");
  };

  const handleCancel = () => {
    router.push("/profile");
  };

  return (
    <div className="relative flex flex-col animate-slide-in-right h-full items-center pt-16 mx-auto w-full bg-black bg-opacity-80 max-w-[480px]">
      <div className="flex overflow-hidden flex-col mt-52 w-full bg-white rounded-[32px_32px_0px_0px] absolute bottom-0 pb-2">
        <div className="flex flex-col px-6 mt-12 w-full">
          <img
            loading="lazy"
            src="/assets/images/logout.png"
            alt=""
            className="object-contain w-20 aspect-square"
          />
          <div className="flex flex-col mt-6 w-full">
            <div className="text-3xl font-semibold tracking-tighter leading-none text-black">
              Log out?
            </div>
            <div className="mt-2 text-lg tracking-normal leading-6 text-gray-600">
              Are you sure you want to log out of your account? Please confirm
              to proceed.
            </div>
          </div>
          <div className="flex gap-4 items-start mt-6 w-full text-base font-medium tracking-normal leading-none">
            <LogoutButton 
              text="No, Cancel" 
              variant="secondary" 
              onClick={handleCancel}
            />
            <LogoutButton 
              text="Log Out" 
              variant="primary" 
              onClick={handleLogout}
            />
          </div>
          <div className="flex -mt-px w-full bg-white" />
        </div>
      </div>
    </div>
  );
}