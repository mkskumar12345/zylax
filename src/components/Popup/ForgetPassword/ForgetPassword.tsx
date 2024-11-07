import React from "react";
import forgetpassword from "@/assets/images/svg/forgetpassword.svg";
import Image from "next/image";
import logo from "../../../assets/images/png/logo.png";
import facebook from "../../../assets/images/svg/fcbook.svg";
import google from "../../../assets/images/svg/google.svg";
import apple from "../../../assets/images/svg/apple.svg";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const ForgetPassword: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
      <div className="bg-white p-4 rounded shadow-md relative w-[750px] h-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 curser-pointer"
        >
          ✕
        </button>
        {children}
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="flex flex-col justify-center gap-3 w-[350px] p-5">
            <Image src={logo} alt="Logo" className="w-[100px]" />
            <div className="text-left font-semibold" onClick={onClose}>
              Back to Login
            </div>
            <div className="text-left">
              <span className="font-semibold">Forgot your password?</span>
              <br />
              <span className="text-[#313131]">
                Don’t worry, happens to all of us. Enter your email below to
                recover your password
              </span>
            </div>
            <div className="text-left">
              <label className="font-semibold">Email</label>
              <br />
              <input className="border-[#CCCCCC] border w-full h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2" />
            </div>

            <div className="">
              <button className="text-white bg-[#D30200] w-full h-[30px] rounded font-semibold">
                SUBMIT
              </button>
            </div>

            {/* <div className="flex items-center justify-center gap-1">
              <hr className="flex-grow border-t border-gray-300" />
              <span>Or login with</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex justify-between w-full">
              <div className="border-[#3869EB] border rounded w-[90px] h-[22px] flex justify-center items-center">
                <Image src={facebook} alt="Login" className="" />
              </div>
              <div className="border-[#3869EB] border rounded w-[90px] h-[22px] flex justify-center items-center">
                <Image src={google} alt="Login" className="" />
              </div>
              <div className="border-[#3869EB] border rounded w-[90px] h-[22px] flex justify-center items-center">
                <Image src={apple} alt="Login" className="" />
              </div>
            </div> */}
          </div>

          <div className=" w-[350px] hidden md:block">
            <Image src={forgetpassword} alt="forgetpassword" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
