import { pngCommonBanner } from "@/assets/images";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommonBanner = ({
  icon = "",
  path = [],
}: {
  icon: string;
  path: { title: string; href: string }[];
}) => {
  return (
    <div className="relative  h-fit w-full">
      <div className="bg-[#E1E8FF] relative h-12">
        <div className=" text-black h-full gap-2 font-regular container flex items-center top-0 w-full ">
          <Link href={"/"}>
            <Image
              className=""
              title="Home"
              src={icon}
              alt="Banner Home Icon"
            />
          </Link>
          {path?.map((item, index) => (
            <div className="flex gap-3" key={item.title}>
              <span>
                <ChevronRight />
              </span>
              <Link href={item.href}>
                <span className="leading-6">{item.title}</span>
              </Link>
            </div>
          ))}
        </div>
        {/* <Image
          src={pngCommonBanner}
          alt="banner"
          className="lg:object-fill object-cover  float-right h-full"
        /> */}
      </div>
    </div>
  );
};

export default CommonBanner;
