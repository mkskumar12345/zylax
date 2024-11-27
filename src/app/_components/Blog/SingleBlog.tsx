"use client";
import {
  pngLatestNews,
  svgIconBannerHome,
  svgIconCalendar,
  svgIconPerson2,
} from "@/assets/images";
import CommonBanner from "@/components/Common/CommonBanner";
import Image from "next/image";
import React from "react";

const SingleBlog = () => {
  return (
    <div>
      <CommonBanner
        icon={svgIconBannerHome}
        path={[
          { title: "Blogs", href: "/blogs" },
          {
            title: "Blog Details",
            href: "/blogs/details",
          },
        ]}
      />
      <div className="container my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 sm:gap-4 lg:gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h1 className="font-semibold text-[26px]">
              Buying a computer Monitor Guide
            </h1>
            <div className="flex gap-5 mt-2">
              <div className="flex gap-2 items-center">
                <Image src={svgIconPerson2} alt="person" />
                <span className="text-base font-semibold ">Admin</span>
              </div>
              <div className="flex gap-2 items-center">
                <Image src={svgIconCalendar} alt="calendar" />
                <span className="text-base font-semibold ">Aug 07, 2024</span>
              </div>
            </div>
            <div className="flex items-center overflow-hidden rounded-xl ">
              <Image src={pngLatestNews} alt="blog" className="w-full" />
            </div>
            <div className="flex flex-col gap-2 my-2 font-regular text-[#7D7D7D]">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <h1 className="font-semibold text-[26px] text-black my-2">
                Why Should You Choose Us?
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="col-span-1">dad</div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
