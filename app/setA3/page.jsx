"use client";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { useRouter } from "next/navigation";

function SetAccount3() {
  const [firstname, setFirstName] = useState("");
  const router = useRouter();

  return (
    <div className="relative flex flex-col flex-grow animate-slide-in-right">
      <div className="max-w-2xl w-full mx-auto pt-8 h-full flex flex-col flex-grow">
        <button
          className="w-7 h-8 rounded-full hover:bg-gray-100"
          onClick={() => router.push("/setA2")}
        >
          <img
            className="w-6 h-6"
            alt="Frame"
            src="/assets/images/backbutton.svg"
          />
        </button>

        <ProgressBar totalSteps={9} currentStep={3} />

        <div className="mt-8 h-full space-y-6 flex flex-col flex-grow">
          <h1 className="text-3xl font-bold">What's your Name?</h1>
          <p className="text-gray-600">
            This is how it will appear on Ballpitt and you will not be able to
            change it.
          </p>

          <div className="space-y-4 flex flex-col flex-grow">
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="Enter your first name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5B49EF]"
              />
            </div>
          </div>

          <button
            className={`w-full py-3 px-4 rounded-full text-white font-medium flex items-end justify-center
              ${
                firstname.length > 0
                  ? "bg-[#5B49EF] hover:bg-[#5B49EF] hover:opacity-90"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            disabled={!firstname.length > 0}
            onClick={() => router.push("/setA6")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetAccount3;
