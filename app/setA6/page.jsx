"use client";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import OptionButton from "../components/OptionButton";
import { useRouter } from "next/navigation";

function SetAccount6() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "I'm interested in Men",
    "I'm interested in Women",
    "I'm interested in Both Men & Women",
  ];

  return (
    <div className="relative flex flex-col flex-grow animate-slide-in-right">
      <div className="max-w-2xl w-full mx-auto py-8 h-full flex flex-col flex-grow">
        <button
          className="w-7 h-8 rounded-full hover:bg-gray-100"
          onClick={() => router.push("/setA3")}
        >
          <img
            className="w-6 h-6"
            alt="Frame"
            src="/assets/images/backbutton.svg"
          />
        </button>

        <ProgressBar totalSteps={9} currentStep={6} />

        <div className="mt-8 h-full space-y-6 flex flex-col flex-grow">
          <h1 className="text-3xl font-bold">Who are you interested in?</h1>
          <p className="text-gray-600">
            Select your preffered gender of interest.
          </p>

          <div className="space-y-4 flex flex-col flex-grow">
            {options.map((option) => (
              <OptionButton
                key={option}
                option={option}
                selected={selectedOption}
                onChange={setSelectedOption}
              />
            ))}
          </div>

          <button
            className={`w-full py-3 px-4 rounded-full text-white font-medium flex items-end justify-center
              ${
                selectedOption
                  ? "bg-[#5B49EF] hover:opacity-90"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            disabled={!selectedOption}
            onClick={() => router.push("/setA7")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetAccount6;
