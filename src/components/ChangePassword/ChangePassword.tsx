"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <div>
      <span className="font-bold text-[30px]">Change Password</span>
      <div className="w-[300px] text-[15px]">
        Create a New Password. Ensure it differs from previous ones for
        security.
      </div>
      <div>
        <div className="flex flex-col gap-4 mt-5">
          <div className="">
            <label className="font-semibold">Password</label>
            <br />
            <div className="relative w-[500px]">
              <input
                type={showPassword ? "text" : "password"}
                className="border-[#CCCCCC] border w-full h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 pr-10"
                placeholder="Password"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </div>
            </div>
          </div>

          <div className="">
            <label className="font-semibold">Confirm Password</label>
            <br />
            <div className="relative w-[500px]">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="border-[#CCCCCC] border w-full h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 pr-10"
                placeholder="Confirm Password"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </div>
            </div>
          </div>

          <div className="">
            <label className="font-semibold">New Password</label>
            <br />
            <div className="relative w-[500px]">
              <input
                type={showNewPassword ? "text" : "password"}
                className="border-[#CCCCCC] border w-full h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 pr-10"
                placeholder="New Password"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </div>
            </div>
          </div>
        </div>

        <button className="mt-5 w-[227px] h-[43px] bg-[#D30200] text-white font-semibold text-[14px] rounded">
          UPDATE PASSWORD
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
