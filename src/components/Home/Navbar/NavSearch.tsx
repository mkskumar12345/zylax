import React from "react";
import { Input } from "../../ui/input";
import { svgIconSearch } from "@/assets/images";
import Image from "next/image";

const NavSearch = () => {
  return (
    <div className="flex items-center border w-full rounded h-[38px] bg-secondary">
      <div className="flex items-center flex-grow px-2">
        <Input
          className="border-none p-2 h-full rounded-full bg-transparent flex-grow"
          placeholder="Search For Products, Categories..."
        />
        <div className="flex-shrink-0 ml-2">
          <Image src={svgIconSearch} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default NavSearch;
