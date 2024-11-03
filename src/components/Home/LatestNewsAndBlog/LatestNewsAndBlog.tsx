import { pngLatestNews } from "@/assets/images";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const LatestNewsAndBlog = () => {
  return (
    <div>
      <div className="md:container px-3 md:px-0">
        <div className="flex justify-between lg:flex-nowrap flex-wrap items-center">
          <h1 className="font-semibold text-2xl lg:text-4xl xl:text-5xl lg:leading-9  xl:leading-[48px]">
            Latest news and blogs
          </h1>
          <div>
            <button className="flex gap-2 font-semibold text-sm items-center border-[#E5E7EB] border bg-white mx-1 p-1 px-3 rounded">
              <span className=""> View All</span>
              <span>
                <MoveRight />
              </span>
            </button>
          </div>
        </div>
        <div className="grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1  gap-6 my-10 ">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className=" flex flex-col gap-4">
              <div>
                <Image
                  src={pngLatestNews}
                  alt="latest-news"
                  className="rounded-xl"
                />
              </div>
              <h2 className="font-semibold text-2xl">
                We really like the product and the quality
              </h2>
              <div className="flex justify-between">
                <span className="font-semibold text-xs">November 2, 2022</span>
                <button className="flex gap-2 font-semibold text-xs">
                  <span>Visit Blog </span>
                  <MoveRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsAndBlog;
