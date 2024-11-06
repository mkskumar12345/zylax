import React from "react";

import signup from "@/assets/images/svg/signup.svg";

import Image from "next/image";
import logo from "../../../assets/images/png/logo.png";
import facebook from "../../../assets/images/svg/fcbook.svg";
import google from "../../../assets/images/svg/google.svg";
import apple from "../../../assets/images/svg/apple.svg";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
const Signup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
      <div className="bg-white p-4 rounded shadow-md relative w-[850px] h-[600]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          ✕
        </button>
        {children}
        <div className="flex justify-between items-center flex-col lg:flex-row ">
          <div className="flex flex-col justify-center gap-3 w-[450px] p-5">
            <Image src={logo} alt="Logo" className="w-[100px]" />

            <div className="text-left">
              <span className="font-semibold">Sign up</span>
              <br />
              <span className="text-[#313131] text-[10px]">
                Let’s get you all st up so you can access your personal account.
              </span>
            </div>
            <div className="flex justify-between">
              <div className="text-left">
                <label className="font-semibold">First Name</label>
                <br />
                <input className="border-[#CCCCCC] border w-[200px] h-[23px] rounded" />
              </div>
              <div className="text-left">
                <label className="font-semibold">Last Name</label>
                <br />
                <input className="border-[#CCCCCC] border w-[200px] h-[23px] rounded" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-left">
                <label className="font-semibold">Email</label>
                <br />
                <input className="border-[#CCCCCC] border w-[200px] h-[23px] rounded" />
              </div>
              <div className="text-left">
                <label className="font-semibold">Phone Number</label>
                <br />
                <input className="border-[#CCCCCC] border w-[200px]  h-[23px] rounded" />
              </div>
            </div>
            <div className="text-left">
              <label className="font-semibold">Password</label>
              <br />
              <input className="border-[#CCCCCC] border w-full h-[23px] rounded" />
            </div>
            <div className="text-left">
              <label className="font-semibold">Confirm Password</label>
              <br />
              <input className="border-[#CCCCCC] border w-full h-[23px] rounded" />
            </div>
            <div className=" w-full text-left">
              <div className="flex gap-2">
                <input type="checkbox" />
                <span>
                  I agree to all the{" "}
                  <span className="text-[#FF8682]">Terms </span>and{" "}
                  <span className="text-[#FF8682]">Privacy Policies</span>{" "}
                </span>
              </div>
            </div>
            <div className="">
              <button className="text-white bg-[#D30200] w-full h-[30px] rounded font-semibold">
                Create account
              </button>
            </div>
            <div className="text-left w-full">
              Already have an account?
              <span className="text-[rgb(255,134,130)] font-semibold">Login</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-2 text-gray-500">Or Sign up with</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex justify-between w-full">
              <div className="border-[#3869EB] border rounded w-[120px] h-[22px] flex justify-center items-center">
                <Image src={facebook} alt="Login" className="" />
              </div>
              <div className="border-[#3869EB] border rounded w-[120px] h-[22px] flex justify-center items-center">
                <Image src={google} alt="Login" className="" />
              </div>
              <div className="border-[#3869EB] border rounded w-[120px] h-[22px] flex justify-center items-center">
                <Image src={apple} alt="Login" className="" />
              </div>
            </div>
          </div>

          <div className=" w-[350px] ">
            <Image src={signup} alt="signup" className="h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
