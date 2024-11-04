import {
  pngGamingMonitor,
  pngMouse,
  pngWifyAms,
  svgIcon5Star,
  svgIconAddToBag,
} from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Heart, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";

const DealsOfTheDay = () => {
  return (
    <div className="">
      <div className=" bg-[linear-gradient(180deg,_#d30200_50%,_white_50%)] pt-12 px-3 md:px-0">
        <h1 className="text-secondary md:container  font-semibold md:text-3xl text-2xl lg:text-5xl mb-8">
          Best Deals of The Days
        </h1>
        <div className="flex gap-4 md:container pb-10 ">
          <div className="bg-white border-secondary border flex-col w-full rounded-xl flex gap-2 ">
            <div className="  p-8 flex gap-2 flex-col border-b-2 border-secondary">
              <div className=" flex gap-8">
                <div className=" basis-1/2 flex relative justify-center items-center">
                  <Image src={pngGamingMonitor} alt="gamingMonitor" />
                  <Heart className="absolute top-0 right-0 " />
                  <div className="absolute top-0 left-0 rounded-full text-white bg-primary w-8 flex justify-center items-center p-1 text-[10px] font-extrabold	tracking-tight">
                    <span>75%</span>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-col gap-4">
                  <p className="font-semibold text-sm">
                    LG 29UB67-B 29 Inch QHD Flat Gaming Monitor (29UB67-B)
                  </p>
                  <div className="flex gap-2">
                    <Image src={svgIcon5Star} alt="5star" />
                    <span className="font-regular text-xs">3</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-primary text-2xl">
                      $0.50
                    </span>
                    <span className="line-through font-medium text-[#111827]">
                      $1.99
                    </span>
                  </div>
                  <Button
                    variant={"outline"}
                    className="border-primary w-full d-flex justify-between text-primary font-medium"
                  >
                    <span>Add to Cart</span>
                    <Plus />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-secondary rounded-lg flex items-center justify-center font-semibold text-xs p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  84
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  06
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  57
                </span>

                <span className=" font-semibold  text-xs flex items-center justify-center   text-[#4B5563] w-3">
                  :
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  08
                </span>
                <p className="font-regular text-[#9CA3AF] text-xs">
                  Remains until the end of the offer
                </p>
              </div>
            </div>
            <div className="  p-8 flex gap-2 flex-col border-b-2 border-secondary">
              <div className=" flex gap-8">
                <div className=" basis-1/2 flex relative justify-center items-center">
                  <Image src={pngWifyAms} alt="gamingMonitor" />
                  <Heart className="absolute top-0 right-0 " />
                  <div className="absolute top-0 left-0 rounded-full text-white bg-primary w-8 flex justify-center items-center p-1 text-[10px] font-extrabold	tracking-tight">
                    <span>75%</span>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-col gap-4">
                  <p className="font-semibold text-sm">
                    LG 29UB67-B 29 Inch QHD Flat Gaming Monitor (29UB67-B)
                  </p>
                  <div className="flex gap-2">
                    <Image src={svgIcon5Star} alt="5star" />
                    <span className="font-regular text-xs">3</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-primary text-2xl">
                      $0.50
                    </span>
                    <span className="line-through font-medium text-[#111827]">
                      $1.99
                    </span>
                  </div>
                  <Button
                    variant={"outline"}
                    className="border-primary w-full d-flex justify-between text-primary font-medium"
                  >
                    <span>Add to Cart</span>
                    <Plus />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-secondary rounded-lg flex items-center justify-center font-semibold text-xs p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  84
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  06
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  57
                </span>

                <span className=" font-semibold  text-xs flex items-center justify-center   text-[#4B5563] w-3">
                  :
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  08
                </span>
                <p className="font-regular text-[#9CA3AF] text-xs">
                  Remains until the end of the offer
                </p>
              </div>
            </div>
            <div className="  p-8 flex gap-2 flex-col ">
              <div className=" flex gap-8">
                <div className=" basis-1/2 flex relative justify-center items-center">
                  <Image src={pngMouse} alt="gamingMonitor" />
                  <Heart className="absolute top-0 right-0 " />
                  <div className="absolute top-0 left-0 rounded-full text-white bg-primary w-8 flex justify-center items-center p-1 text-[10px] font-extrabold	tracking-tight">
                    <span>75%</span>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-col gap-4">
                  <p className="font-semibold text-sm">
                    LG 29UB67-B 29 Inch QHD Flat Gaming Monitor (29UB67-B)
                  </p>
                  <div className="flex gap-2">
                    <Image src={svgIcon5Star} alt="5star" />
                    <span className="font-regular text-xs">3</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-primary text-2xl">
                      $0.50
                    </span>
                    <span className="line-through font-medium text-[#111827]">
                      $1.99
                    </span>
                  </div>
                  <Button
                    variant={"outline"}
                    className="border-primary w-full d-flex justify-between text-primary font-medium"
                  >
                    <span>Add to Cart</span>
                    <Plus />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-secondary rounded-lg flex items-center justify-center font-semibold text-xs p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  84
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  06
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  57
                </span>

                <span className=" font-semibold  text-xs flex items-center justify-center   text-[#4B5563] w-3">
                  :
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  08
                </span>
                <p className="font-regular text-[#9CA3AF] text-xs">
                  Remains until the end of the offer
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white  border-primary border-4 w-full flex-col rounded-xl hidden lg:flex gap-2 ">
            <div className="  p-8 flex gap-2 flex-col ">
              <div className=" flex flex-col gap-8">
                <div className=" basis-1/2 flex relative justify-center items-center">
                  <Image src={pngGamingMonitor} alt="gamingMonitor" />
                  <Heart className="absolute top-0 right-0 " />
                  <div className="absolute top-0 left-0 rounded-full text-white bg-primary w-8 flex justify-center items-center p-1 text-[10px] font-extrabold	tracking-tight">
                    <span>75%</span>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <Image src={svgIcon5Star} alt="5star" />
                      <span className="font-regular text-xs">3</span>
                    </div>
                    <p className="font-semibold text-sm">
                      LG 29UB67-B 29 Inch QHD Flat Gaming Monitor (29UB67-B)
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-primary text-2xl">
                      $0.50
                    </span>
                    <span className="line-through font-medium text-[#111827]">
                      $1.99
                    </span>
                  </div>
                  <div className="text-[13px] font-regular text-[#4B5563]">
                    The DeepCool CC360 ARGB Micro-ATX case offers outstanding
                    value with spacious component compatibility, a...
                  </div>
                  <Separator orientation="horizontal" />
                  <p className="text-[#9CA3AF] font-regular text-xs">
                    This product is about to run out
                  </p>
                  <div className="w-full h-2 bg-gradient-to-r from-[#FACC15] to-primary"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#6B7280] text-xs font-regular">
                      available only:
                    </span>
                    <span className="font-bold ">38</span>
                  </div>
                  <button className="w-full bg-primary h-11 text-secondary font-bold text-sm rounded-[10px] flex items-center justify-center gap-2 py-2">
                    <span>
                      <Image src={svgIconAddToBag} alt="add-to-bag" />
                    </span>
                    <span>Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-secondary border  flex-col w-full rounded-xl hidden xl:flex gap-2 ">
            <div className="p-8 flex gap-2 flex-col border-b-2 border-secondary">
              <div className=" flex gap-8">
                <div className=" basis-1/2 flex relative justify-center items-center">
                  <Image src={pngGamingMonitor} alt="gamingMonitor" />
                  <Heart className="absolute top-0 right-0 " />
                  <div className="absolute top-0 left-0 rounded-full text-white bg-primary w-8 flex justify-center items-center p-1 text-[10px] font-extrabold	tracking-tight">
                    <span>75%</span>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-col gap-4">
                  <p className="font-semibold text-sm">
                    LG 29UB67-B 29 Inch QHD Flat Gaming Monitor (29UB67-B)
                  </p>
                  <div className="flex gap-2">
                    <Image src={svgIcon5Star} alt="5star" />
                    <span className="font-regular text-xs">3</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-primary text-2xl">
                      $0.50
                    </span>
                    <span className="line-through font-medium text-[#111827]">
                      $1.99
                    </span>
                  </div>
                  <Button
                    variant={"outline"}
                    className="border-primary w-full d-flex justify-between text-primary font-medium"
                  >
                    <span>Add to Cart</span>
                    <Plus />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-secondary rounded-lg flex items-center justify-center font-semibold text-xs p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  84
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  06
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  57
                </span>

                <span className=" font-semibold  text-xs flex items-center justify-center   text-[#4B5563] w-3">
                  :
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  08
                </span>
                <p className="font-regular text-[#9CA3AF] text-xs">
                  Remains until the end of the offer
                </p>
              </div>
            </div>
            <div className="  p-8 flex gap-2 flex-col border-b-2 border-secondary">
              <div className=" flex gap-8">
                <div className=" basis-1/2 flex relative justify-center items-center">
                  <Image src={pngWifyAms} alt="gamingMonitor" />
                  <Heart className="absolute top-0 right-0 " />
                  <div className="absolute top-0 left-0 rounded-full text-white bg-primary w-8 flex justify-center items-center p-1 text-[10px] font-extrabold	tracking-tight">
                    <span>75%</span>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-col gap-4">
                  <p className="font-semibold text-sm">
                    LG 29UB67-B 29 Inch QHD Flat Gaming Monitor (29UB67-B)
                  </p>
                  <div className="flex gap-2">
                    <Image src={svgIcon5Star} alt="5star" />
                    <span className="font-regular text-xs">3</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-primary text-2xl">
                      $0.50
                    </span>
                    <span className="line-through font-medium text-[#111827]">
                      $1.99
                    </span>
                  </div>
                  <Button
                    variant={"outline"}
                    className="border-primary w-full d-flex justify-between text-primary font-medium"
                  >
                    <span>Add to Cart</span>
                    <Plus />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-secondary rounded-lg flex items-center justify-center font-semibold text-xs p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  84
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  06
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  57
                </span>

                <span className=" font-semibold  text-xs flex items-center justify-center   text-[#4B5563] w-3">
                  :
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  08
                </span>
                <p className="font-regular text-[#9CA3AF] text-xs">
                  Remains until the end of the offer
                </p>
              </div>
            </div>
            <div className="  p-8 flex gap-2 flex-col ">
              <div className=" flex gap-8">
                <div className=" basis-1/2 flex relative justify-center items-center">
                  <Image src={pngMouse} alt="gamingMonitor" />
                  <Heart className="absolute top-0 right-0 " />
                  <div className="absolute top-0 left-0 rounded-full text-white bg-primary w-8 flex justify-center items-center p-1 text-[10px] font-extrabold	tracking-tight">
                    <span>75%</span>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-col gap-4">
                  <p className="font-semibold text-sm">
                    LG 29UB67-B 29 Inch QHD Flat Gaming Monitor (29UB67-B)
                  </p>
                  <div className="flex gap-2">
                    <Image src={svgIcon5Star} alt="5star" />
                    <span className="font-regular text-xs">3</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-primary text-2xl">
                      $0.50
                    </span>
                    <span className="line-through font-medium text-[#111827]">
                      $1.99
                    </span>
                  </div>
                  <Button
                    variant={"outline"}
                    className="border-primary w-full d-flex justify-between text-primary font-medium"
                  >
                    <span>Add to Cart</span>
                    <Plus />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-secondary rounded-lg flex items-center justify-center font-semibold text-xs p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  84
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  06
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  57
                </span>

                <span className=" font-semibold  text-xs flex items-center justify-center   text-[#4B5563] w-3">
                  :
                </span>
                <span className="bg-secondary rounded-lg font-semibold text-xs flex items-center justify-center p-1 border-[#E5E7EB] border text-[#4B5563] w-[26px] h-[26px]">
                  08
                </span>
                <p className="font-regular text-[#9CA3AF] text-xs">
                  Remains until the end of the offer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" h-screen"></div> */}
    </div>
  );
};

export default DealsOfTheDay;
