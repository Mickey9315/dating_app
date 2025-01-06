"use client";
import { useState } from "react";
import ProgressBar from "../../../components/ProgressBar";
import { useRouter } from "next/navigation";

function SetAccount2() {
  const router = useRouter();
  const [birthday, setBirthday] = useState({
    day: "",
    month: "",
    year: "",
  });
  return (
    <>
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
            onChange={(e) => setBirthday({ ...birthday, day: e.target.value })}
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
            onChange={(e) => setBirthday({ ...birthday, year: e.target.value })}
            maxLength="2"
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5B49EF]"
          />
        </div>
      </div>

      <button
        className="w-full py-3 px-4 rounded-full bg-[#5B49EF] text-white font-medium hover:opacity-90 flex items-end justify-center"
        onClick={() => router.push("/setup/3")}
      >
        Continue
      </button>
    </>
  );
}

export default SetAccount2;
