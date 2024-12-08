import {
  svgIconDelevery,
  svgIconDoller,
  svgIconFanKit,
  svgIconGraphicCard,
  svgIconLeftArrow,
  svgIconMemberDiscount,
  svgIconMonitor,
  svgIconMotherBoard,
  svgIconPowerSupply,
  svgIconProcessor,
  svgIconRam,
  svgIconRightArrow,
  svgIconSupportHeadphone,
} from "@/assets/images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const Categories = () => {
  const carouselItem = [
    {
      img: svgIconGraphicCard,
      title: "Graphic Cards",
    },
    {
      img: svgIconMotherBoard,
      title: "Motherboards",
    },
    {
      img: svgIconRam,
      title: "RAMs",
    },
    {
      img: svgIconProcessor,
      title: "Processors",
    },
    {
      img: svgIconPowerSupply,
      title: "Power Supplies",
    },
    {
      img: svgIconMonitor,
      title: "Monitors",
    },
    {
      img: svgIconFanKit,
      title: "Fan Kits",
    },
  ];

  return (
    <div className="md:container  flex flex-col  lg:pt-15  p-5 h-fit relative">
      <div className="flex flex-wrap xl:flex-nowrap justify-center lg:justify-between gap-6">
        <div className="bg-secondary pl-8 w-80 rounded-lg h-[100px] flex items-center gap-6 ">
          <div>
            <Image src={svgIconDelevery} alt="" />
          </div>
          <div>
            <h4 className="font-bold">Free delivery</h4>
            <span className="font-medium">Order from all item</span>
          </div>
        </div>
        <div className=" bg-secondary pl-8 rounded-lg w-80 h-[100px] flex items-center gap-6 ">
          <div>
            <Image src={svgIconDoller} alt="" />
          </div>
          <div>
            <h4 className="font-bold">Free delivery</h4>
            <span className="font-medium">Order from all item</span>
          </div>
        </div>
        <div className="bg-secondary pl-8 rounded-lg w-80 h-[100px] flex items-center gap-6 ">
          <div>
            <Image src={svgIconMemberDiscount} alt="" />
          </div>
          <div>
            <h4 className="font-bold">Free delivery</h4>
            <span className="font-medium">Order from all item</span>
          </div>
        </div>
        <div className="bg-secondary pl-8 rounded-lg w-80 h-[100px] flex items-center gap-6 ">
          <div>
            <Image src={svgIconSupportHeadphone} alt="" />
          </div>
          <div>
            <h4 className="font-bold">Free delivery</h4>
            <span className="font-medium">Order from all item</span>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="rounded-xl my-3  relative bg-secondary top-0 w-full md:top-12"
        >
          <CarouselContent className="flex   items-center  justify-evenly h-[181px] ">
            {carouselItem.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex basis-1/2 sm:basis-1/3  md:basis-1/3 lg:basis-1/5 xl:basis-1/6 shrink-0 flex-col items-center"
              >
                <Image src={item.img} alt="" />
                <span> {item.title}</span>
              </CarouselItem>
            ))}
          </CarouselContent>
          <span className=" flex items-center justify-center w-10 h-10 rounded-full bg-white absolute -left-5 top-1/2 transform -translate-y-1/2">
            <Image src={svgIconLeftArrow} alt="" />
          </span>
          <span className="  flex items-center justify-center w-10 h-10 rounded-full bg-white absolute   -right-5 top-1/2 transform -translate-y-1/2">
            <Image src={svgIconRightArrow} alt="" />
          </span>
          <CarouselPrevious className="z-10 !opacity-0 *:opacity-0 flex items-center justify-center w-10 h-10 rounded-full bg-white absolute -left-5 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="flex z-10 !opacity-0 *:opacity-0 items-center justify-center w-10 h-10 rounded-full bg-white absolute   -right-5 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
