import {
  pngHomeBannerBottom1,
  pngHomeBannerBottom2,
  pngHomeBannerCrousel1,
  pngHomeBannerRight1,
  pngHomeBannerRight2,
} from "@/assets/images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const Banner = ({ sliderData }: { sliderData: any }) => {
  return (
    <div className="bg-secondary py-8">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 container ">
        <div className="col-span-2 flex flex-col gap-4">
          <div>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full "
            >
              <CarouselContent>
                {sliderData?.map((item: any, index: number) => (
                  <CarouselItem key={index}>
                    <Image src={pngHomeBannerCrousel1} alt="crousel1" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex gap-4 flex-wrap md:flex-nowrap justify-between ">
            <div className="relative h-[119px] w-full lg:w-[336px]">
              <Image
                src={pngHomeBannerBottom1}
                alt="bottom1"
                className="w-full h-full"
              />
              <div className="absolute flex flex-col top-1/2 transform -translate-y-1/2 left-4">
                <p className=" font-semi-bold text-[15px] w-28">
                  Sono Playgo 5 from
                  <span className="text-primary">$569</span>
                </p>
                <Link className="font-regular text-xs  " href="#">
                  Discover Now
                </Link>
              </div>
            </div>
            <div className="relative h-[119px] w-full lg:w-[453px]">
              <Image
                src={pngHomeBannerBottom2}
                alt="bottom2"
                className="w-full h-full"
              />
              <div className="absolute flex flex-col top-1/2 left-8 transform -translate-y-1/2 text-secondary">
                <p className="font-regular text-[15px] w-[131px]">
                  Logitek Bluetooth
                  <br />
                  <span className="text-[#FFC107]">Keyboard</span>
                </p>
                <Link className="font-regular text-xs" href="#">
                  Discover Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-cols-1 flex mt-4 lg:mt-0 flex-col w-full gap-2 ">
          <Image src={pngHomeBannerRight1} className="w-full" alt="right1" />
          <Image src={pngHomeBannerRight2} alt="right2" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
