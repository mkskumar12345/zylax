import { pngLatestNews, svgIconReadMore } from "@/assets/images";
import allPagesRoutes from "@/constants/allPagesRoutes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogComponent = () => {
  return (
    <div className="w-full">
      <div className="flex items-center overflow-hidden rounded-xl ">
        <Image src={pngLatestNews} alt="blog" className="w-full" />
      </div>
      <div className="py-3">
        <span className="text-[#FF2220] font-regular text-sm">
          26 Nov, 2024
        </span>
        <h2 className="font-semibold text-xl">
          Buying a computer Monitor Guide
        </h2>
        <p className="text-[#7D7D7D] font-regular">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantiu…
        </p>
        <Link
          href={allPagesRoutes.BLOG_DETAILS}
          className="text-[#FF2220] font-medium text-base flex gap-2 mt-2 border-b-2 border-[#FF2220] w-fit "
        >
          <span>Read More</span> <Image src={svgIconReadMore} alt="read more" />
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;
