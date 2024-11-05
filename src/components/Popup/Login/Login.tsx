import React, { useState } from "react";
import login from "@/assets/images/svg/login.svg";

import Image from "next/image";
import logo from "../../../assets/images/png/logo.png";
import facebook from "../../../assets/images/svg/fcbook.svg";
import google from "../../../assets/images/svg/google.svg";
import apple from "../../../assets/images/svg/apple.svg";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Login: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
      <div className="bg-white p-4 rounded shadow-md relative w-[750px] h-[500px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        {children}
        <div className="flex justify-between ">
          <div className="flex flex-col justify-center gap-3 w-[350px] p-5">
            <Image src={logo} alt="Logo" className="w-[100px]" />

            <div className="text-left">
              <span className="font-semibold">Login</span>
              <br />
              <span className="text-[#313131]">
                Login to access your Zylax account
              </span>
            </div>
            <div className="text-left">
              <label className="font-semibold">Email</label>
              <br />
              <input className="border-[#CCCCCC] border w-full h-[23px] rounded-lg" />
            </div>
            <div className="text-left">
              <label className="font-semibold">Password</label>
              <br />
              <input className="border-[#CCCCCC] border w-full h-[23px] rounded-lg" />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div>
                <span className="text-[#FF8682]" onClick={openPopup}>
                  Forgot Password
                </span>
                <ForgetPassword isOpen={isPopupOpen} onClose={closePopup} />
              </div>
            </div>
            <div className="">
              <button className="text-white bg-[#D30200] w-full h-[30px] rounded-lg font-semibold">
                LOGIN
              </button>
            </div>
            <div className="text-center w-full">
              Don’t have an account?{" "}
              <span className="text-[#FF8682]">Sign up</span>
            </div>
            <div className="flex items-center justify-center gap-1">
            <hr className="flex-grow border-t border-gray-300" />
              <span>Or login with</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex justify-between w-full">
              <div className="border-[#3869EB] border rounded-lg w-[90px] h-[22px] flex justify-center items-center">
                <Image src={facebook} alt="Login" className="" />
              </div>
              <div className="border-[#3869EB] border rounded-lg w-[90px] h-[22px] flex justify-center items-center">
                <Image src={google} alt="Login" className="" />
              </div>
              <div className="border-[#3869EB] border rounded-lg w-[90px] h-[22px] flex justify-center items-center">
                <Image src={apple} alt="Login" className="" />
              </div>
            </div>
          </div>

          <div className=" w-[350px]">
            <Image src={login} alt="Login" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
