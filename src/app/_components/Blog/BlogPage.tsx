"use client";
import { svgIconBannerHome } from "@/assets/images";
import BlogComponent from "@/components/Blogs/Blog.Component";
import CommonBanner from "@/components/Common/CommonBanner";
import usePagination from "@/lib/hooks/usePagination";
import { cn } from "@/lib/utils";
import { useGetBlogListQuery } from "@/store/apiServices/blogApi";
import { useGetProductsQuery } from "@/store/apiServices/productsApi";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const BlogPage = () => {
  // const [page, setPage] = useState<number>(1);
  const { data: blogList, isLoading } = useGetBlogListQuery(undefined);
  // const pages = usePagination(blogList?.totalPages, blogList?.currentPage);

  console.log(blogList);
  return (
    <div>
      <CommonBanner
        icon={svgIconBannerHome}
        path={[{ title: "Blogs", href: "/blogs" }]}
      />
      <div className="container my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 sm:gap-4 lg:gap-8">
          {blogList?.data?.map((blog: any) => (
            <BlogComponent blog={blog} />
          ))}
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
