"use client";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import OptionButton from "../components/OptionButton";
import { useRouter } from "next/navigation";

function SetAccount7() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "A relationship",
    "Something Casual",
    "I'm not sure yet",
    "Prefer not to say",
  ];

  return (
    <div className="relative flex flex-col flex-grow animate-slide-in-right">
      <div className="max-w-2xl w-full mx-auto pt-8 h-full flex flex-col flex-grow">
        <button
          className="w-7 h-8 rounded-full hover:bg-gray-100"
          onClick={() => router.push("/setA6")}
        >
          <img
            className="w-6 h-6"
            alt="Frame"
            src="/assets/images/backbutton.svg"
          />
        </button>

        <ProgressBar totalSteps={9} currentStep={7} />

        <div className="mt-8 h-full space-y-6 flex flex-col flex-grow">
          <h1 className="text-3xl font-bold">What are you hoping to find?</h1>
          <p className="text-gray-600">
            Select what kind of relationships below best suits what you're
            looking for.
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
            onClick={() => router.push("/setA9")}
            disabled={!selectedOption}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetAccount7;
