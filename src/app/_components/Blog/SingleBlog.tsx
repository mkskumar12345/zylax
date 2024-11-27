"use client";
import {
  pngLatestNews,
  svgIconBannerHome,
  svgIconCalendar,
  svgIconPerson2,
} from "@/assets/images";
import CommonBanner from "@/components/Common/CommonBanner";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const SingleBlog = ({ blogData }: { blogData: any }) => {
  console.log(blogData);
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
            <h1 className="font-semibold text-3xl">{blogData?.name}</h1>
            <div
              className="font-normal my-6"
              dangerouslySetInnerHTML={{ __html: blogData?.description }}
            />
          </div>
          <div className="col-span-1">
            <h1 className="font-semibold text-3xl my-2">Search</h1>
            <Input placeholder="Search" className="w-full h-14 rounded-xl" />
            <div className="shadow-lg p-4 mt-6 rounded-xl border border-[#CCC]">
              <div className="border-b border-[#ccc]">
                <h1 className="font-bold text-3xl border-b-4 border-[#FF2220] w-fit">
                  Category
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
