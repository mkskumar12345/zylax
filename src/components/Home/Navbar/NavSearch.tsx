import React from "react";
import { Input } from "../../ui/input";
import { Separator } from "../../ui/separator";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { SelectItem } from "@radix-ui/react-select";
import { svgIconSearch } from "@/assets/images";
import Image from "next/image";

const NavSearch = () => {
  return (
    // <div className="flex items-center border w-full rounded-full h-[38px] bg-secondary ">
    //   <div className="flex items-center basis-2/3 px-2">
    //     <Input
    //       className="border-none p-2 h-full rounded-full bg-transparent"
    //       placeholder="Search anything"
    //     />
    //     <Image src={svgIconSearch} alt="search" />
    //   </div>
    //   {/* <Separator orientation="vertical" /> */}
    //   {/* <Select>
    //     <SelectTrigger className="border-none basis-1/3 bg-transparent">
    //       <SelectValue placeholder="Select" />
    //     </SelectTrigger>
    //     <SelectContent>
    //       <SelectItem value="1">Items 1</SelectItem>
    //       <SelectItem value="2">items 2</SelectItem>
    //       <SelectItem value="3">items 3</SelectItem>
    //     </SelectContent>
    //   </Select> */}
    // </div>
    <div className="flex items-center border w-[300px] rounded-full h-[38px] bg-secondary">
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
