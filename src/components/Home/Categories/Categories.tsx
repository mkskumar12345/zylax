import {
  svgIconDelevery,
  svgIconDoller,
  svgIconFanKit,
  svgIconGraphicCard,
  svgIconLeftArrow,
  svgIconMemberDiscount,
  svgIconMonitor,
  svgIconMotherBoard,
  svgIconPowerSupply,
  svgIconProcessor,
  svgIconRam,
  svgIconRightArrow,
  svgIconSupportHeadphone,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="container flex flex-col  pt-10 h-fit relative">
      <div className="flex justify-between gap-6">
        <div className="bg-secondary pl-8 w-80 rounded-lg h-[100px] flex items-center gap-6 ">
          <div>
            <Image src={svgIconDelevery} alt="" />
          </div>
          <div>
            <h4 className="font-bold">Free delivery</h4>
            <span className="font-medium">Order from all item</span>
          </div>
        </div>
        <div className=" bg-secondary pl-8 rounded-lg w-80 h-[100px] flex items-center gap-6 ">
          <div>
            <Image src={svgIconDoller} alt="" />
          </div>
          <div>
            <h4 className="font-bold">Free delivery</h4>
            <span className="font-medium">Order from all item</span>
          </div>
        </div>
        <div className="bg-secondary pl-8 rounded-lg w-80 h-[100px] flex items-center gap-6 ">
          <div>
            <Image src={svgIconMemberDiscount} alt="" />
          </div>
          <div>
            <h4 className="font-bold">Free delivery</h4>
            <span className="font-medium">Order from all item</span>
          </div>
        </div>
        <div className="bg-secondary pl-8 rounded-lg w-80 h-[100px] flex items-center gap-6 ">
          <div>
            <Image src={svgIconSupportHeadphone} alt="" />
          </div>
          <div>
            <h4 className="font-bold">Free delivery</h4>
            <span className="font-medium">Order from all item</span>
          </div>
        </div>
      </div>
      <div className="relative flex flex-wrap items-center top-12  bg-secondary justify-evenly h-[181px] rounded-xl">
        <div className="flex flex-col items-center">
          <Image src={svgIconGraphicCard} alt="" />
          <span> Graphic Cards</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={svgIconMotherBoard} alt="" />
          <span>Motherboards</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={svgIconRam} alt="" />
          <span>RAMs</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={svgIconProcessor} alt="" />
          <span>Processors</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={svgIconPowerSupply} alt="" />
          <span>Power Supplies</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={svgIconMonitor} alt="" />
          <span>Monitors</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={svgIconFanKit} alt="" />
          <span>Fan Kits</span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white absolute -left-5 top-1/2 transform -translate-y-1/2">
            <Image src={svgIconLeftArrow} alt="" />
          </span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white absolute   -right-5 top-1/2 transform -translate-y-1/2">
            <Image src={svgIconRightArrow} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
