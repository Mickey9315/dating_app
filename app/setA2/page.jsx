"use client";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { useRouter } from "next/navigation";

function SetAccount2() {
  const router = useRouter();
  const [birthday, setBirthday] = useState({
    day: "",
    month: "",
    year: "",
  });
  return (
    <div className="relative flex flex-col flex-grow animate-slide-in-right">
      <div className="max-w-2xl w-full mx-auto py-8 h-full flex flex-col flex-grow">
        <button
          className="w-7 h-8 rounded-full hover:bg-gray-100"
          onClick={() => router.push("/setA1")}
        >
          <img
            className="w-6 h-6"
            alt="Frame"
            src="/assets/images/backbutton.svg"
          />
        </button>

        <ProgressBar totalSteps={9} currentStep={2} />

        <div className="mt-8 h-full space-y-6 flex flex-col flex-grow">
          <h1 className="text-3xl font-bold">When is your birthday?</h1>
          <p className="text-gray-600">
            Please enter your birthday to help us personalize your experience!
          </p>

          <div className="grid grid-cols-3 gap-4 flex flex-col flex-grow">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">Day</label>
              <input
                type="text"
                placeholder="DD"
                value={birthday.day}
                onChange={(e) =>
                  setBirthday({ ...birthday, day: e.target.value })
                }
                maxLength="2"
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5B49EF]"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">Month</label>
              <input
                type="text"
                placeholder="MM"
                value={birthday.month}
                onChange={(e) =>
                  setBirthday({ ...birthday, month: e.target.value })
                }
                maxLength="2"
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5B49EF]"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">Year</label>
              <input
                type="text"
                placeholder="YY"
                value={birthday.year}
                onChange={(e) =>
                  setBirthday({ ...birthday, year: e.target.value })
                }
                maxLength="2"
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5B49EF]"
              />
            </div>
          </div>

          <button
            className="w-full py-3 px-4 rounded-full bg-[#5B49EF] text-white font-medium hover:opacity-90 flex items-end justify-center"
            onClick={() => router.push("/setA3")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetAccount2;
