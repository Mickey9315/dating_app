"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Reset() {
  const router = useRouter();
  const Next = () => {
    router.push("/auth/reset1");
  };

  return (
    <div className="relative flex-grow flex flex-col animate-slide-in-right">
      <button className="absolute left-4 top-2 bg-transparent border-none cursor-pointer p-2">
        <img
          className="w-6 h-6"
          alt="Frame"
          src="/assets/images/backbutton.svg"
        />
      </button>

      <div className="flex flex-col flex-grow px-5 mt-[27%]">
        <h1 className="text-[41px] font-semibold mb-3 text-gray-900">
          Password Reset <br />
          Email Sent!{" "}
        </h1>
        <p className="text-2xl text-gray-500 mb-8 mt-0">
          We sent a password reset email to{" "}
          <span className="text-[#5b49ef]">unflow@mail.com.</span> If you're
          unable to find the email, please check your spam folder
        </p>
        <div className="flex flex-col flex-grow justify-end">
          <button
            className="w-full bg-[#5B49EF] text-white py-4 rounded-full text-base font-medium mb-4 hover:opacity-90 transition-opacity duration-200"
            onClick={Next}
          >
            Open email app
          </button>
          <button className="w-full border-2 border-[#5B49EF] text-[#5B49EF] py-4 rounded-full text-base font-medium hover:bg-[#5B49EF] hover:text-white transition-all duration-200">
            I did not get an email, Resend
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reset;
