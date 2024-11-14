import React from "react";
import signup from "@/assets/images/svg/signup.svg";
import Image from "next/image";
import logo from "../../../assets/images/png/logo.png";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Signup = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="font-semibold text-xs">Register</span>
      </DialogTrigger>
      <DialogContent>
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
          <div className="bg-white lg:p-4  rounded shadow-md relative lg:w-[850px] w-[350px] h-[600]">
            <DialogClose
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 curser-pointer"
              asChild
            >
              <button>✕</button>
            </DialogClose>

            <div className="flex justify-between items-center flex-col lg:flex-row ">
              <div className="flex flex-col justify-center gap-3 lg:w-[450px] p-5">
                <Image src={logo} alt="Logo" className="w-[100px]" />

                <div className="text-left">
                  <span className="font-semibold">Sign up</span>
                  <br />
                  <span className="text-[#313131] text-[10px]">
                    Let’s get you all st up so you can access your personal
                    account.
                  </span>
                </div>
                <div className="flex lg:justify-between lg:flex-row flex-col gap-2">
                  <div className="text-left">
                    <label className="font-semibold">First Name</label>
                    <br />
                    <input
                      placeholder="First Name"
                      className="border-[#CCCCCC] border lg:w-[200px] w-[300px]   h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                    />
                  </div>
                  <div className="text-left">
                    <label className="font-semibold">Last Name</label>
                    <br />
                    <input
                      placeholder="Last Name"
                      className="border-[#CCCCCC] border lg:w-[200px] w-[300px]  h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                    />
                  </div>
                </div>
                <div className="flex lg:justify-between lg:flex-row flex-col gap-2">
                  <div className="text-left">
                    <label className="font-semibold">Email</label>
                    <br />
                    <input
                      placeholder="Email"
                      className="border-[#CCCCCC] border lg:w-[200px] w-[300px] h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                    />
                  </div>
                  <div className="text-left">
                    <label className="font-semibold">Phone Number</label>
                    <br />
                    <input
                      placeholder="Phone Number"
                      className="border-[#CCCCCC] border lg:w-[200px] w-[300px] h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label className="font-semibold">Password</label>
                  <br />
                  <input
                    placeholder="Password"
                    className="border-[#CCCCCC] border lg:w-full w-[300px]  h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                  />
                </div>
                <div className="text-left">
                  <label className="font-semibold">Confirm Password</label>
                  <br />
                  <input
                    placeholder="Confirm Password"
                    className="border-[#CCCCCC] border lg:w-full w-[300px]  h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                  />
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
                  <button className="text-white bg-[#D30200] lg:w-full w-[300px] h-[30px] rounded font-semibold">
                    Create account
                  </button>
                </div>
                <div className="text-left w-full">
                  Already have an account?
                  <span className="text-[rgb(255,134,130)] font-semibold">
                    Login
                  </span>
                </div>
              </div>

              <div className=" w-[350px] hidden md:block">
                <Image src={signup} alt="signup" className="" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
