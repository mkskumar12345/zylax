"use client";

import {
  pngGBMicroAtx,
  svgIcon5Star,
  svgIconBannerHome,
  svgIconBestArivalHeart,
  svgIconCategoriesFilterBtn,
  svgIconSearch,
} from "@/assets/images";
import CommonBanner from "@/components/Common/CommonBanner";
import Rating from "@/components/Common/Rating";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useGetProductsQuery } from "@/store/apiServices/productsApi";
import usePagination from "@/lib/hooks/usePagination";
import allPagesRoutes from "@/constants/allPagesRoutes";

const Products = ({ brand }: { brand?: string | number | undefined }) => {
  const [values, setValues] = useState([20, 80]);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState("");
  const { data: products, isLoading } = useGetProductsQuery({
    page: page,
    items_per_page: 10,
    search: search,
    brand: brand,
  });
  const pages = usePagination(products?.totalPages, products?.currentPage);

  console.log(products);
  return (
    <>
      <CommonBanner icon={svgIconBannerHome} path={["Categories"]} />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6  px-4 md:container my-9">
        <div className="lg:col-span-1 md:col-span-1">
          <Button className="flex gap-2 bg-[#EB4227] w-[130px] h-[47px] rounded-full ">
            <span>Filter</span>{" "}
            <Image
              className="w-[20px] h-[17px]"
              src={svgIconCategoriesFilterBtn}
              alt="filter"
            />
          </Button>
          <div className="grid grid-flow-row sm:grid-flow-dense md:grid-flow-row sm:grid-cols-2 md:grid-cols-1  gap-6 ">
            <Accordion collapsible type="single" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-xl">
                  All Categories
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-full [&>svg]:hidden" />
                    <span>Monitors (25)</span>
                    <span>(134)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-full [&>svg]:hidden" />
                    <span>Ram </span>
                    <span>(150)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-full [&>svg]:hidden" />
                    <span>Ram </span>
                    <span>(150)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-full [&>svg]:hidden" />
                    <span>Ram </span>
                    <span>(150)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-full [&>svg]:hidden" />
                    <span>Ram </span>
                    <span>(150)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-full [&>svg]:hidden" />
                    <span>Ram </span>
                    <span>(150)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-full [&>svg]:hidden" />
                    <span>Ram </span>
                    <span>(150)</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion collapsible type="single" className="w-full">
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-semibold text-xl">
                  Price
                </AccordionTrigger>
                <AccordionContent className="">
                  <div className="w-full mt-2 h-10 ">
                    <DualRangeSlider
                      //   label={(value: any) => `$${value}`}
                      //   labelPosition="bottom"
                      value={values}
                      onValueChange={setValues}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <div className="w-full flex justify-between mt-4 font-semibold text-sm">
                      {values?.map((item) => (
                        <span key={`ac-${item}`}>${item}</span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion collapsible type="single" className="w-full">
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-semibold text-xl">
                  Rating
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-[4px] [&>svg]:hidden" />
                    <Rating stars={3} />
                    <span className="font-semibold text-sm">5.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-[4px] [&>svg]:hidden" />
                    <Rating stars={3} />
                    <span className="font-semibold text-sm">4.0 & up</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-[4px] [&>svg]:hidden" />
                    <Rating stars={3} />
                    <span className="font-semibold text-sm">3.0 & up</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-[4px] [&>svg]:hidden" />
                    <Rating stars={3} />
                    <span className="font-semibold text-sm">2.0 & up</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox className="rounded-[4px] [&>svg]:hidden" />
                    <Rating stars={3} />
                    <span className="font-semibold text-sm">1.0 & up</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion collapsible type="single" className="w-full">
              {" "}
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-semibold text-xl">
                  Popular Tag
                </AccordionTrigger>
                <AccordionContent className="flex gap-3 flex-wrap">
                  <div className="border border-[#CCCCCC] py-2 px-4 font-medium text-sm rounded-full bg-[#FAFAFA]">
                    Computer
                  </div>
                  <div className="border border-[#FA8232] text-[#FA8232] py-2 px-4 font-medium text-sm rounded-full bg-[#FFF3EB]">
                    Computer
                  </div>
                  <div className="border border-[#CCCCCC] py-2 px-4 font-medium text-sm rounded-full bg-[#FAFAFA]">
                    Computer
                  </div>
                  <div className="border border-[#CCCCCC] py-2  px-4 font-medium text-sm rounded-full bg-[#FAFAFA]">
                    Computer
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-1">
          <div className="flex lg:justify-between flex-wrap  xl:flex-nowrap gap-3 w-full items-center">
            <div className="min-w-32 flex gap-1">
              <span className="font-semibold ">{products?.totalProducts}</span>
              <span className="font-regular text-nowrap text-[#666666]">
                Results Found
              </span>
            </div>
            <div className="flex items-center lg:w-full  sm:w-full md:flex-wrap lg:flex-nowrap gap-8 xl:gap-16 ">
              <div className="flex relative h-[42px] w-full  lg:w-[309px]">
                <Input
                  placeholder="Search"
                  className="h-full w-full"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Image
                  src={svgIconSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  alt="search"
                />
              </div>
              <div className="flex items-center sm:w-full  lg:w-auto gap-2 ">
                <div className="min-w-[57px] text-lg font-semibold text-[#808080]">
                  Sort by:
                </div>
                <Select>
                  <SelectTrigger className="border bg-secondary smw-full lg:w-[166px] px-4 py-2 h-full  ">
                    <SelectValue placeholder="Latest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Items 1</SelectItem>
                    <SelectItem value="2">items 2</SelectItem>
                    <SelectItem value="3">items 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="grid grid-col-1 md:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2  mt-8 w-full gap-8 mb-12 ">
            {products?.data?.map(
              (item: {
                id: number;
                name: string;
                product_img: string;
                price: number;
                ex_gst_price: number;
              }) => (
                <Link
                  href={`${allPagesRoutes.PRODUCT_DETAILS}?product=${item?.id}`}
                  key={`product-${item?.id}`}
                >
                  <div className="bg-white  card w-full border border-[#99999999] rounded-xl">
                    <div className=" leading-4 text-center  font-semibold text-lg  flex items-center p-4 ">
                      {item.name}
                    </div>
                    <div className="flex gap-2 justify-center">
                      <Image src={svgIcon5Star} className="h-3" alt="5star" />
                      <span className="font-regular text-xs">(3)</span>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image
                        width={36}
                        height={36}
                        src={pngGBMicroAtx}
                        alt="product image"
                        className="w-36 h-36 "
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 ">
                      <h2 className="text-[#EB4227] font-semibold text-lg">
                        ${item?.ex_gst_price}
                      </h2>
                      <h2 className="line-through font-semibold text-[13px] text-[#666666]">
                        ${item?.price}
                      </h2>
                      <div className="py-1 px-2 rounded-[10px] bg-[#EB4227] text-white text-xs">
                        45% OFF
                      </div>
                    </div>
                    <div className="flex justify-between p-4 items-center">
                      <div className="font-medium text-xs gap-2 flex items-center">
                        <span className="text-black">1,897</span>
                        <span className="text-[#666666]">Purchases</span>
                      </div>
                      <div>
                        <Image src={svgIconBestArivalHeart} alt="" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
          <div className="flex gap-2 justify-center items-center">
            <span
              className="w-9 h-9 rounded-full border bg-[#F2F2F2] flex justify-center cursor-pointer items-center border-[#E6E6E6]"
              onClick={() => {
                setPage((prev: number) => {
                  if (prev == 1) return prev;
                  else return prev - 1;
                });
              }}
            >
              <ChevronLeft />
            </span>
            {pages?.map((page: number) => (
              <span
                onClick={() => setPage(page)}
                key={`page-${page}`}
                className={cn(
                  "w-9 h-9 flex justify-center items-center rounded-full",
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
