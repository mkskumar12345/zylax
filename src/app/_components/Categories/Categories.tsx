"use client";

import {
  svgIconBannerHome,
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

const Categories = () => {
  const [values, setValues] = useState([20, 80]);

  return (
    <>
      <CommonBanner icon={svgIconBannerHome} path={["Categories"]} />
      <div className="grid grid-cols-4 container my-9">
        <div className="col-span-1">
          <Button className="flex gap-2 bg-[#EB4227] w-[130px] h-[47px] rounded-full ">
            <span>Filter</span>{" "}
            <Image
              className="w-[20px] h-[17px]"
              src={svgIconCategoriesFilterBtn}
              alt="filter"
            />
          </Button>
          <div>
            <Accordion type="single" collapsible className="w-full">
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
                        <span key={item}>${item}</span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
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
        <div className="col-span-3">
          <div className="flex w-full">
            <div>
              <span>52</span> <span>Results Found</span>
            </div>
            <div className="flex relative">
              <Input placeholder="Search" type="text" />
              <Image
                src={svgIconSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2"
                alt="search"
              />
            </div>
            <div className="flex items-center gap-2 ">
              <div>Sort by:</div>
              <Select>
                <SelectTrigger className="border bg-secondary px-4 py-2 h-full  ">
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
      </div>
    </>
  );
};

export default Categories;
