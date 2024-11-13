import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CommonBanner from "../Common/CommonBanner";
import { svgIconBannerHome } from "@/assets/images";
const Faqs = () => {
  return (
    <>
      <CommonBanner icon={svgIconBannerHome} path={["faqs"]} />

      <div className="flex justify-center flex-col items-center">
        <div className="w-[1100px] mt-10 mb-10 ">
          <span className="font-semibold text-[30px]">
            Frequently Asked Questions (FAQs)
          </span>
          <div className="mt-5">
            <Accordion
              type="single"
              collapsible
              className="lg:w-full min-w-[400px]"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Suspendisse ultrices pharetra libero sed interdum.
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Suspendisse ultrices pharetra libero sed interdum.
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Suspendisse ultrices pharetra libero sed interdum.
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
