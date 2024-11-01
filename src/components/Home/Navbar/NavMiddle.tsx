"use client";

import {
  pngIconLogo,
  svgIconBag,
  svgIconPerson,
  svgIconSupport,
  svgIconTruck,
} from "@/assets/images";
import Image from "next/image";
import React from "react";
import NavSearch from "./NavSearch";

const NavMiddle = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="  border-b border-b-[#F0F0F0]">
        <div className="container flex justify-between items-center ">
          <p className="font-semibold">
            Welcome to ZYLAX, One Stop Shop For All Your Gaming Needs!
          </p>
          <div className="flex gap-3  h-8">
            <button className="flex gap-1 items-center h-full">
              <span>
                <Image src={svgIconTruck} alt="truck" />
              </span>
              <span className="font-semibold text-xs">Truck Order</span>
            </button>
            <button className="flex gap-1 items-center h-full">
              <span>
                <Image src={svgIconPerson} alt="person" />
              </span>
              <span className="font-semibold text-xs">Signin/Register</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between container pb-2 h-[49px]">
        <div className="grid grid-cols-3 w-full">
          <div className="col-span-1">
            <Image src={pngIconLogo} alt="site logo" width={83} height={36} />
          </div>
          <div className="col-span-2 h-full items-center flex">
            <NavSearch />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="relative font-semibold ">
                <span className="text-xs">$0</span>
                <div className="absolute text-[6px] w-2 h-2 bg-primary text-secondary text-center rounded-full -top-1 -right-1">
                  <span>0</span>
                </div>
              </div>
              <Image src={svgIconBag} alt="support" />
            </div>
            <div className="flex items-center gap-2">
              <Image src={svgIconSupport} alt="support" />
              <div>
                <p className="text-xs leading-3">(+021) 345 678 910</p>
                <p className="text-xs leading-3">support@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMiddle;
