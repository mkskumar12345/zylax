import { pngCommonBanner } from "@/assets/images";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const CommonBanner = ({
  icon = "",
  path = [],
}: {
  icon: string;
  path: string[];
}) => {
  return (
    <div className="relative mt-2 h-fit w-full">
      <div className="bg-black relative h-[127px]">
        <div className="absolute text-white h-full gap-2 font-regular px-3 md:container flex items-center top-0 w-full ">
          <Image className="" src={icon} alt="Banner Home Icon" />
          {path?.map((item, index) => (
            <div className="flex gap-3" key={item}>
              <span>
                <ChevronRight />
              </span>
              <span className="leading-6">{item}</span>
            </div>
          ))}
        </div>
        <Image
          src={pngCommonBanner}
          alt="banner"
          className="lg:object-fill object-cover  float-right h-full"
        />
      </div>
    </div>
  );
};

export default CommonBanner;
