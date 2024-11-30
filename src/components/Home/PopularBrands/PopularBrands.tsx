import {
  pngPopular1,
  pngPopular2,
  pngPopular3,
  svgIconNext,
  svgIconPrev,
} from "@/assets/images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import allPagesRoutes from "@/constants/allPagesRoutes";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularBrands = ({ popularBrandData }: { popularBrandData: any }) => {
  const popularBrand = [
    { img: pngPopular1, title: "Gaming PC" },
    { img: pngPopular2, title: "Gaming PC" },
    { img: pngPopular3, title: "Gaming PC" },
  ];

  return (
    <div className="md:container">
      <div className="bg-[#EBEEF6] rounded-2xl  my-10 py-8">
        <div className="flex justify-between py-8 items-center ">
          <h1 className="font-bold text-3xl ml-4">Popular Brands</h1>
          <Link
            href={allPagesRoutes?.BRANDS}
            className="flex gap-2 font-semibold text-sm items-center bg-white mx-1 p-1 px-3 rounded"
          >
            <span className=""> View All</span>
            <span>
              <MoveRight />
            </span>
          </Link>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="  px-8 gap-8 relative mb-8"
        >
          <CarouselContent className="flex justify-evenly">
            {popularBrandData?.map((item: any, index: number) => (
              <CarouselItem
                key={item?.id}
                className="lg:basis-1/3 md:basis-1/2"
              >
                <Link href={`${allPagesRoutes?.PRODUCTS}?brand=${item?.slug}`}>
                  <Image
                    src={popularBrand?.[index % 3]?.img}
                    alt="popular-brands"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-10 !opacity-0  left-0 top-1/2  -translate-y-1/2" />
          <CarouselNext className=" z-10 !opacity-0  right-0 top-1/2  -translate-y-1/2" />
          <button className="absolute left-0 top-1/2  -translate-y-1/2">
            <Image src={svgIconPrev} alt="popular-brands" />
          </button>
          <button className="absolute right-0 top-1/2  -translate-y-1/2">
            <Image src={svgIconNext} alt="popular-brands" />
          </button>
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBrands;
