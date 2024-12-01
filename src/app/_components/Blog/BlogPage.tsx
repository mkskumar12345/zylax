"use client";
import { svgIconBannerHome } from "@/assets/images";
import BlogComponent from "@/components/Blogs/Blog.Component";
import CommonBanner from "@/components/Common/CommonBanner";
import { useGetBlogListQuery } from "@/store/apiServices/blogApi";
import React from "react";

const BlogPage = () => {
  const { data: blogList, isLoading } = useGetBlogListQuery(undefined);

  return (
    <div>
      <CommonBanner
        icon={svgIconBannerHome}
        path={[{ title: "Blogs", href: "/blogs" }]}
      />
      <div className="container my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 sm:gap-4 lg:gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div className="w-full animate-pulse" key={index}>
                  <div className="flex items-center overflow-hidden rounded-xl bg-gray-200 h-48"></div>
                  <div className="py-3 space-y-2">
                    <div className="bg-gray-200 w-1/4 h-4 rounded"></div>
                    <div className="bg-gray-300 w-3/4 h-6 rounded"></div>
                    <div className="bg-gray-200 w-full h-4 rounded"></div>
                    <div className="bg-gray-200 w-2/3 h-4 rounded"></div>
                    <div className="bg-gray-200 w-1/4 h-6 mt-2 rounded"></div>
                  </div>
                </div>
              ))
            : blogList?.data?.map((blog: any) => <BlogComponent blog={blog} />)}
        </div>
        {/* <div className="flex w-full justify-center items-center gap-2">
          {pages?.map((page: number) => (
            <span
              onClick={() => setPage(page)}
              key={`page-${page}`}
              className={cn(
                "w-9 h-9 flex justify-center items-center rounded-full cursor-pointer",
                page == products?.currentPage && "bg-[#EB4227] text-white"
              )}
            >
              {page}
            </span>
          ))}
          <span
            className="w-9 h-9 rounded-full cursor-pointer border flex justify-center items-center border-[#E6E6E6]"
            onClick={() => {
              if (!products?.totalPages) return;
              setPage((prev: number) => {
                if (prev == products?.totalPages) return prev;
                else return prev + 1;
              });
            }}
          >
            <ChevronRight />
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default BlogPage;
