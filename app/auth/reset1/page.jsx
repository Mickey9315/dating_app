"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Reset() {
  const router = useRouter();
  const before = () => {
    router.back();
  };

  const [password, setPassword] = useState("");
  const [Newpassword, setNewPassword] = useState("");

  return (
    <div className="relative flex-grow flex flex-col animate-slide-in-right">
      <div className="flex flex-col flex-grow px-5 mt-[28%]">
        <button
          className="absolute left-4 top-2 bg-transparent border-none cursor-pointer p-2"
          onClick={before}
        >
          <img
            className="w-6 h-6"
            alt="Frame"
            src="/assets/images/backbutton.svg"
          />
        </button>

        <div className="space-y-8 flex flex-col flex-grow">
          <h1 className="text-[41px] font-semibold mb-3 text-gray-900">
            Reset Password
          </h1>
          <p className="text-2xl text-gray-500 mb-8">
            Reset your password by entering a new one in the fields below
          </p>

          <div className="space-y-10">
            <div>
              <label className="block font-semibold text-xl text-black mb-2">
                Old Password:
              </label>
              <input
                type="password"
                placeholder="Enter old Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-[17px] px-[17px] border-2 border-[#E5E5E5] rounded-[29px] text-base text-left focus:border-[#7C5CFC] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-xl text-black mb-2">
                New Password:
              </label>
              <input
                type="password"
                placeholder="Enter new Password"
                value={Newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full py-[17px] px-[17px] border-2 border-[#E5E5E5] rounded-[29px] text-base text-left focus:border-[#7C5CFC] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-grow items-end">
            <button
              className="w-full bg-[#5B49EF] text-white py-4 rounded-full text-base font-medium cursor-pointer transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              // onClick={Next}
              disabled={!Newpassword.length > 0 || !password.length > 0}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
