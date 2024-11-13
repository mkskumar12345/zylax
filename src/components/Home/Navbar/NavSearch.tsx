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
    <div className="flex items-center border w-full rounded-full h-[38px] bg-secondary ">
      <div className="flex items-center w-full px-3">
        <Input
          className="border-none p-2 h-full rounded-full bg-transparent"
          placeholder="Search anything"
        />
        <Image src={svgIconSearch} alt="search" />
      </div>
      {/* <Separator orientation="vertical" />
      <Select>
        <SelectTrigger className="border-none basis-1/3 bg-transparent">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Items 1</SelectItem>
          <SelectItem value="2">items 2</SelectItem>
          <SelectItem value="3">items 3</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
};

export default NavSearch;
