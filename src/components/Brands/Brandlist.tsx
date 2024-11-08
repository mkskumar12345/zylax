import React from "react";
import { Search } from "lucide-react";
import brandimage from "../../assets/images/png/brandimage.png";
import Image from "next/image";
import { svgIconBannerHome } from "@/assets/images";
import CommonBanner from "../Common/CommonBanner";
const Brandlist = () => {
  return (
    <>
      <CommonBanner icon={svgIconBannerHome} path={["brands"]} />

      <div className="p-10">
        <span className="text-2xl font-semibold">Brandlist</span>

        <div className="flex items-center  mt-5 border border-gray-300 rounded px-3 py-2 w-full max-w-md">
          <Search className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search brand here..."
            className="flex-grow outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center flex-wrap gap-2 mt-5">
          <div className="border-[#006bb4] border text-[#006bb4] w-[90px] h-[40px] flex justify-center items-center rounded">
            All Brands
          </div>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            A
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            {" "}
            B
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            C
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            D
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            E
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            F
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            G
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            H
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            I
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            J
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            K
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            L
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            M
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            N
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            O
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            P
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            Q
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            R
          </span>

          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            S
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            T
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            U
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            V
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            W
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            X
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            Y
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            Z
          </span>
          <span className="border-[#CCCCCC] border  w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded">
            #
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-10">
          <div className="w-[315px] h-[170px] bg-white shadow-2xl rounded-2xl flex-col flex justify-center items-center">
            <Image src={brandimage} alt="" />
            <span>3M</span>
            <span>107 product(s)</span>
          </div>
          <div className="w-[315px] h-[170px] bg-white shadow-2xl rounded-2xl flex-col flex justify-center items-center">
            <Image src={brandimage} alt="" />
            <span>3M</span>
            <span>107 product(s)</span>
          </div>
          <div className="w-[315px] h-[170px] bg-white shadow-2xl rounded-2xl flex-col flex justify-center items-center">
            <Image src={brandimage} alt="" />
            <span>3M</span>
            <span>107 product(s)</span>
          </div>
          <div className="w-[315px] h-[170px] bg-white shadow-2xl rounded-2xl flex-col flex justify-center items-center">
            <Image src={brandimage} alt="" />
            <span>3M</span>
            <span>107 product(s)</span>
          </div>
          <div className="w-[315px] h-[170px] bg-white shadow-2xl rounded-2xl flex-col flex justify-center items-center">
            <Image src={brandimage} alt="" />
            <span>3M</span>
            <span>107 product(s)</span>
          </div>
          <div className="w-[315px] h-[170px] bg-white shadow-2xl rounded-2xl flex-col flex justify-center items-center">
            <Image src={brandimage} alt="" />
            <span>3M</span>
            <span>107 product(s)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brandlist;
