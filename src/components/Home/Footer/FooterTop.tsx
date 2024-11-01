import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const FooterTop = () => {
  return (
    <div className="bg-[#FF2220] text-white py-4">
      <div className="container flex justify-between">
        <h1 className="font-bold text-[40px] leading-[48px]">
          Newsletter Sign UP
        </h1>
        <div className="flex gap-4 ">
          <Input
            placeholder="Email Address"
            className="w-[308px] h-10 rounded-[6px]"
          />
          <Button className="bg-white text-black font-semibold px-8 rounded-[6px] h-10">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
