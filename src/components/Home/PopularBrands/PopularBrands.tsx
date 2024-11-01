import {
  pngPopular1,
  pngPopular2,
  pngPopular3,
  svgIconNext,
  svgIconPrev,
} from "@/assets/images";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const PopularBrands = () => {
  return (
    <div className=" container">
      <div className="bg-[#EBEEF6] rounded-2xl  my-10 py-8">
        <div className="flex justify-between py-8 items-center ">
          <h1 className="font-bold text-3xl ml-4">Popular Brands</h1>
          <button className="flex gap-2 font-semibold text-sm items-center bg-white mx-1 p-1 px-3 rounded">
            <span className=""> View All</span>
            <span>
              <MoveRight />
            </span>
          </button>
        </div>
        <div className="flex justify-evenly px-8 gap-8 relative mb-8">
          <div>
            <Image src={pngPopular1} alt="popular-brands" />
          </div>
          <div>
            <Image src={pngPopular2} alt="popular-brands" />
          </div>
          <div>
            <Image src={pngPopular3} alt="popular-brands" />
          </div>
          <button className="absolute left-0 top-1/2  -translate-y-1/2">
            <Image src={svgIconPrev} alt="popular-brands" />
          </button>
          <button className="absolute right-0 top-1/2  -translate-y-1/2">
            <Image src={svgIconNext} alt="popular-brands" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
