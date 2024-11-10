import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import profile from "../../assets/images/png/profile.png";
import { Edit3 } from "lucide-react";
const MyProfile = () => {
  return (
    <div>
      <div className="border-b border-[#E4E7E9]">
        <span className="font-bold text-[30px]">My Profile</span>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="relative inline-block">
          <Image
            src={profile}
            alt="profile photo"
            className="rounded-full w-[81px] h-[81px]"
          />
          <button
            className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-lg"
            aria-label="Edit profile photo"
          >
            <Pencil className="w-4 h-4 text-gray-600" color="#EB4227" />
          </button>
        </div>
        <button className="bg-[#EB4227] w-[172px] h-[54px] rounded text-white flex justify-center items-center gap-2 font-bold text-[16px]">
          <Pencil />
          Edit Profile
        </button>
      </div>
      <div className="mt-5 flex justify-between items-center ">
        <div className="">
          <label className="font-semibold">First Name</label>
          <br />
          <input
            className="border-[#CCCCCC] border w-[470px]  h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
            placeholder="First Name"
          />
        </div>
        <div className="">
          <label className="font-semibold">Last Name</label>
          <br />
          <input
            className="border-[#CCCCCC] border w-[470px]  h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center ">
        <div className="">
          <label className="font-semibold">Mail ID</label>
          <br />
          <input
            className="border-[#CCCCCC] border w-[470px]  h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
            placeholder="Mail ID"
          />
        </div>
        <div className="">
          <label className="font-semibold">Phone Number</label>
          <br />
          <input
            className="border-[#CCCCCC] border w-[470px]  h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center ">
        <div className="">
          <label className="font-semibold">Country/Region</label>
          <br />
          <input
            className="border-[#CCCCCC] border w-[300px]  h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
            placeholder="Country/Region"
          />
        </div>
        <div className="">
          <label className="font-semibold">Country/Region</label>
          <br />
          <input
            className="border-[#CCCCCC] border w-[300px]  h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
            placeholder="Country/Region"
          />
        </div>
        <div className="">
          <label className="font-semibold">Pin Code</label>
          <br />
          <input
            className="border-[#CCCCCC] border w-[300px]  h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
            placeholder="Pin Code"
          />
        </div>
      </div>
      <button className="mt-10 w-[194px] h-[43px] bg-[#D30200] rounded text-white font-bold">
        Save Changes
      </button>
    </div>
  );
};

export default MyProfile;
