"use client";
import { useState } from "react";
import ProgressBar from "../../../components/ProgressBar";
import OptionButton from "../../../components/OptionButton";
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
    <>
      <h1 className="text-3xl font-bold">What are you hoping to find?</h1>
      <p className="text-gray-600">
        Select what kind of relationships below best suits what you're looking
        for.
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
        onClick={() => router.push("/setup/9")}
        disabled={!selectedOption}
      >
        Continue
      </button>
    </>
  );
}

export default SetAccount7;
