import React from "react";
import login from "@/assets/images/png/login.png";

import Image from "next/image";
import logo from "../../../assets/images/png/logo.png";
import facebook from "../../../assets/images/svg/fcbook.svg"
import google from "../../../assets/images/svg/google.svg"
import apple from "../../../assets/images/svg/apple.svg"

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Login: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

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
            <Image src={logo} alt="Logo" className="" />
            
            <div className="text-left">
              <span className="font-semibold">Login</span><br/>
              <span className="text-[#313131]">
                Login to access your Zylax account
              </span>
            </div>
            <div className="text-left">
              <label className="font-semibold">Email</label><br/>
              <input className="border-[#CCCCCC] border w-[330px] h-[23px] rounded-lg" />
            </div>
            <div className="text-left">
              <label className="font-semibold">Password</label><br/>
              <input className="border-[#CCCCCC] border w-[330px] h-[23px] rounded-lg" />
            </div>
            <div className="flex justify-between w-[330px]">
              <div className="flex gap-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div>
                <span className="text-[#FF8682]">Forgot Password</span>
              </div>
            </div>
            <div className="">
              <button className="text-white bg-[#D30200] w-[330px] h-[30px] rounded-lg font-semibold">
                LOGIN
              </button>
            </div>
            <div className="text-center w-[330px]">
              Don’t have an account?{" "}
              <span className="text-[#FF8682]">Sign up</span>
            </div>
            <div className="flex items-center justify-center"><hr/>
              <span>Or login with</span>
              <hr/>
            </div>
            <div className="flex justify-between w-[330px]">
              <div className="border-[#3869EB] border rounded-lg w-[100px] h-[22px] flex justify-center items-center">
              <Image src={facebook} alt="Login" className="" />
              </div>
              <div className="border-[#3869EB] border rounded-lg w-[100px] h-[22px] flex justify-center items-center">
              <Image src={google} alt="Login" className="" />
              </div>
              <div className="border-[#3869EB] border rounded-lg w-[100px] h-[22px] flex justify-center items-center">
              <Image src={apple} alt="Login" className="" />
              </div>
            </div>
          </div>

          <div className=" w-[350px]">
            <Image src={login} alt="Login" className=" h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
