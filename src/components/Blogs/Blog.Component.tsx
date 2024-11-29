import { pngLatestNews, svgIconReadMore } from "@/assets/images";
import allPagesRoutes from "@/constants/allPagesRoutes";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

interface Blog {
  short_description: string;
  add_date: string;
  name: string;
  slug: string;
}

const BlogComponent = ({ blog }: { blog: Blog }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full animate-pulse">
        <div className="flex items-center overflow-hidden rounded-xl bg-gray-200 h-48"></div>
        <div className="py-3 space-y-2">
          <div className="bg-gray-200 w-1/4 h-4 rounded"></div>
          <div className="bg-gray-300 w-3/4 h-6 rounded"></div>
          <div className="bg-gray-200 w-full h-4 rounded"></div>
          <div className="bg-gray-200 w-2/3 h-4 rounded"></div>
          <div className="bg-gray-200 w-1/4 h-6 mt-2 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center overflow-hidden rounded-xl">
        <Image src={pngLatestNews} alt="blog" className="w-full" />
      </div>
      <div className="py-3">
        <span className="text-[#FF2220] font-regular text-sm">
          {blog?.add_date && moment(blog?.add_date).format("DD MMM YYYY")}
        </span>
        <h2 className="font-semibold text-xl">{blog?.name}</h2>
        <p className="text-[#7D7D7D] font-regular line-clamp-2">
          {blog?.short_description}
        </p>
        <Link
          href={`${allPagesRoutes.BLOG_DETAILS}/${blog?.slug}`}
          className="text-[#FF2220] font-medium text-base flex gap-2 mt-2 border-b-2 border-[#FF2220] w-fit"
        >
          <span>Read More</span>
          <Image src={svgIconReadMore} alt="read more" />
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;
