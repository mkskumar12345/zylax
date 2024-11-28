"use client";
import {
  jpgBlogImg1,
  jpgBlogImg2,
  jpgBlogImg3,
  pngBestSellerCpu,
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
            <div className="shadow-lg p-6 mt-6 rounded-xl border border-[#CCC]">
              <div className="border-b border-[#ccc]">
                <h1 className="font-bold text-3xl border-b-4 border-[#FF2220] w-fit">
                  Category
                </h1>
              </div>
              <div className="flex flex-col my-5 gap-3">
                <div className="border rounded-[8px] p-3 border-[#ccc]">
                  <div className="grid grid-cols-12 items-center justify-between gap-2">
                    <Image
                      src={pngBestSellerCpu}
                      alt=""
                      className="w-10 h-10 col-span-2 "
                    />
                    <h3 className="col-span-8 font-semibold">Computer</h3>
                    <div className="flex items-center justify-center col-span-2">
                      <span className="text-sm items-center justify-center flex  w-6 h-6 rounded-full font-semibold bg-[#D30200] text-white">
                        2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-[8px] p-3 border-[#ccc]">
                  <div className="grid grid-cols-12 items-center justify-between gap-2">
                    <Image
                      src={pngBestSellerCpu}
                      alt=""
                      className="w-10 h-10 col-span-2 "
                    />
                    <h3 className="col-span-8 font-semibold">Computer</h3>
                    <div className="flex items-center justify-center col-span-2">
                      <span className="text-sm items-center justify-center flex  w-6 h-6 rounded-full font-semibold bg-[#D30200] text-white">
                        2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-[8px] p-3 border-[#ccc]">
                  <div className="grid grid-cols-12 items-center justify-between gap-2">
                    <Image
                      src={pngBestSellerCpu}
                      alt=""
                      className="w-10 h-10 col-span-2 "
                    />
                    <h3 className="col-span-8 font-semibold">Computer</h3>
                    <div className="flex items-center justify-center col-span-2">
                      <span className="text-sm items-center justify-center flex  w-6 h-6 rounded-full font-semibold bg-[#D30200] text-white">
                        2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-[8px] p-3 border-[#ccc]">
                  <div className="grid grid-cols-12 items-center justify-between gap-2">
                    <Image
                      src={pngBestSellerCpu}
                      alt=""
                      className="w-10 h-10 col-span-2 "
                    />
                    <h3 className="col-span-8 font-semibold">Computer</h3>
                    <div className="flex items-center justify-center col-span-2">
                      <span className="text-sm items-center justify-center flex  w-6 h-6 rounded-full font-semibold bg-[#D30200] text-white">
                        2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-[8px] p-3 border-[#ccc]">
                  <div className="grid grid-cols-12 items-center justify-between gap-2">
                    <Image
                      src={pngBestSellerCpu}
                      alt=""
                      className="w-10 h-10 col-span-2 "
                    />
                    <h3 className="col-span-8 font-semibold">Computer</h3>
                    <div className="flex items-center justify-center col-span-2">
                      <span className="text-sm items-center justify-center flex  w-6 h-6 rounded-full font-semibold bg-[#D30200] text-white">
                        2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-[8px] p-3 border-[#ccc]">
                  <div className="grid grid-cols-12 items-center justify-between gap-2">
                    <Image
                      src={pngBestSellerCpu}
                      alt=""
                      className="w-10 h-10 col-span-2 "
                    />
                    <h3 className="col-span-8 font-semibold">Computer</h3>
                    <div className="flex items-center justify-center col-span-2">
                      <span className="text-sm items-center justify-center flex  w-6 h-6 rounded-full font-semibold bg-[#D30200] text-white">
                        2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-[8px] p-3 border-[#ccc]">
                  <div className="grid grid-cols-12 items-center justify-between gap-2">
                    <Image
                      src={pngBestSellerCpu}
                      alt=""
                      className="w-10 h-10 col-span-2 "
                    />
                    <h3 className="col-span-8 font-semibold">Computer</h3>
                    <div className="flex items-center justify-center col-span-2">
                      <span className="text-sm items-center justify-center flex  w-6 h-6 rounded-full font-semibold bg-[#D30200] text-white">
                        2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-lg p-6 mt-6 rounded-xl border border-[#CCC]">
              <div className="border-b border-[#ccc]">
                <h1 className="font-bold text-3xl border-b-4 border-[#FF2220] w-fit">
                  Recent Posts
                </h1>
              </div>
              <div className="flex flex-col gap-3 mt-5 ">
                <div className="flex gap-2 justify-between items-center">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={jpgBlogImg1}
                      // className="h-full w-full"
                      alt="Best Seller"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="font-medium text-lg">
                    Buying a computer Monitor Guide
                  </h3>
                </div>
                <div className="flex gap-2 justify-between items-center">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={jpgBlogImg1}
                      // className="h-full w-full"
                      alt="Best Seller"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="font-medium text-lg">
                    Buying a computer Monitor Guide
                  </h3>
                </div>
                <div className="flex gap-2 justify-between items-center">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={jpgBlogImg1}
                      // className="h-full w-full"
                      alt="Best Seller"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="font-medium text-lg">
                    Buying a computer Monitor Guide
                  </h3>
                </div>
                <div className="flex gap-2 justify-between items-center">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={jpgBlogImg1}
                      // className="h-full w-full"
                      alt="Best Seller"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="font-medium text-lg">
                    Buying a computer Monitor Guide
                  </h3>
                </div>
              </div>
            </div>
            <div className="shadow-lg p-6 mt-6 rounded-xl border border-[#CCC]">
              <div className="border-b border-[#ccc]">
                <h1 className="font-bold text-3xl border-b-4 border-[#FF2220] w-fit">
                  Popular Tag
                </h1>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <div className="font-medium text-lg px-5 py-2 border border-[#ccc] rounded-[10px]">
                  Computer
                </div>
                <div className="font-medium text-lg px-5 py-2 border border-[#ccc] rounded-[10px]">
                  Laptop
                </div>
                <div className="font-medium text-lg px-5 py-2 border border-[#ccc] rounded-[10px]">
                  Desktop
                </div>
                <div className="font-medium text-lg px-5 py-2 border border-[#ccc] rounded-[10px]">
                  Keyboard
                </div>
                <div className="font-medium text-lg px-5 py-2 border border-[#ccc] rounded-[10px]">
                  Graphic Card
                </div>
                <div className="font-medium text-lg px-5 py-2 border border-[#ccc] rounded-[10px]">
                  CPU
                </div>
                <div className="font-medium text-lg px-5 py-2 border border-[#ccc] rounded-[10px]">
                  Mouse
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
