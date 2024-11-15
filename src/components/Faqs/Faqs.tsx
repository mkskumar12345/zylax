"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CommonBanner from "../Common/CommonBanner";
import { svgIconBannerHome } from "@/assets/images";

interface FaqsProps {
  id: number;
  question: string;
  answer: string;
}

const Faqs = ({ data }: { data: FaqsProps[] }) => {
  return (
    <>
      <CommonBanner icon={svgIconBannerHome} path={["faqs"]} />
      <div className="flex justify-center flex-col items-center">
        <div className="w-[1100px] mt-10 mb-10 ">
          <span className="font-semibold text-[30px]">
            Frequently Asked Questions (FAQs)
          </span>
          <div className="mt-5">
            <Accordion type="single" collapsible className="w-full">
              {data?.map((item: FaqsProps) => (
                <AccordionItem key={item?.id} value={`item-${item?.id}`}>
                  <AccordionTrigger>{item?.question} </AccordionTrigger>
                  <AccordionContent>
                    <div dangerouslySetInnerHTML={{ __html: item?.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
