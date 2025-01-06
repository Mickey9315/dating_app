"use client";
import { useState } from "react";
import StyleSolidTypeRounded from "../components/StyleSolidTypeRounded";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative flex-grow flex flex-col animate-slide-in-right">
      <div className="px-5 flex flex-col flex-grow mt-[28%]">
        <h1 className="text-[41px] font-semibold mb-3 text-gray-900">Login</h1>
        <p className="text-2xl text-gray-500 mb-8 mt-0">
          Enter your account details to login to your account
        </p>

        <div className="space-y-10">
          <div>
            <label className="block font-semibold text-xl text-black mb-2">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-[17px] px-[17px] border-2 border-[#E5E5E5] rounded-[29px] text-base text-left focus:border-[#7C5CFC] focus:outline-none"
            />
            {email.length === 0 && (
              <div className="flex items-center gap-2 pl-2">
                <StyleSolidTypeRounded className="w-5 h-5" color="#EF4949" />
                <div className="text-red-500">Enter a valid email</div>
              </div>
            )}
          </div>

          <div>
            <label className="block font-semibold text-xl text-black mb-2">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-[17px] px-[17px] border-2 border-[#E5E5E5] rounded-[29px] text-base text-left focus:border-[#7C5CFC] focus:outline-none"
            />
            <p className="text-[#5f5f6c] mt-4">
              Forgot Password?{" "}
              <span className="text-[#5b49ef] cursor-pointer">
                Reset it here.
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-grow items-end">
          <button
            className="w-full bg-[#5B49EF] text-white py-4 rounded-full text-base font-medium cursor-pointer transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={email.length === 0 || password.length === 0}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
