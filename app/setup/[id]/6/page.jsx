"use client";
import { useState } from "react";
import ProgressBar from "../../../components/ProgressBar";
import OptionButton from "../../../components/OptionButton";
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
    <>
      <h1 className="text-3xl font-bold">Who are you interested in?</h1>
      <p className="text-gray-600">Select your preffered gender of interest.</p>

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
        onClick={() => router.push("/setup/7")}
      >
        Continue
      </button>
    </>
  );
}

export default SetAccount6;
