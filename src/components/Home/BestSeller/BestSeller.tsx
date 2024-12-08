import {
  pngBestSellerCpu,
  pngBestSellerGamingPc,
  pngBestSellerPc,
  pngBestSellerProcessor,
  pngHomeBannerRight1,
  pngHomeBannerRight2,
  svgIcon1Star,
  svgIconCardHeart,
  svgIconLeftArrow,
  svgIconRightArrow,
} from "@/assets/images";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import allPagesRoutes from "@/constants/allPagesRoutes";
import Link from "next/link";
import {
  useAddToFavoriteMutation,
  useRemoveFromFavoriteMutation,
} from "@/store/apiServices/productsApi";
import toast from "react-hot-toast";
import { revalidateTagInCache } from "@/serverActions/cookies";
import Heart from "@/assets/images/tsx-svg/heart";
import Autoplay from "embla-carousel-autoplay";

const BestSeller = ({ bestSellerData }: { bestSellerData: any }) => {
  const [addToFavoriteMutation, { isSuccess: isSuccessFavorite }] =
    useAddToFavoriteMutation();
  const [removeFromFavorite, { isSuccess: isSuccessRemove }] =
    useRemoveFromFavoriteMutation();

  const addToFavorite = async (id: string | number) => {
    const response = await addToFavoriteMutation({ id }).unwrap();
    console.log(response);
    if (isSuccessFavorite) {
      toast.success(response.message);
      revalidateTagInCache("favorite-product");
    } else {
      toast.error(response.message);
    }
  };

  const onRemoveFromFavorite = async (id: string) => {
    const response = await removeFromFavorite({ id }).unwrap();
    if (isSuccessRemove || response?.status) {
      revalidateTagInCache("favorite-product");
    } else {
      toast.error(response.message);
    }
  };
  return (
    <div className="bg-secondary py-16">
      <div className="md:container">
        <div className="lg:grid grid-cols-12 gap-6 lg:p-0 p-5 ">
          <div className="lg:col-span-4 col-span-12 ">
            <div className="flex flex-col gap-4 mb-4">
              <p className="text-[#666666] text-xs font-medium">
                amazon award-winning monitor
              </p>
              <h1 className="font-bold text-3xl line-clamp-2">
                {bestSellerData?.[0]?.name}
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium w-24 text-[#666666]">
                  Starting at Price
                </span>
                <span className="text-[#009900] font-bold text-[26px]">
                  ${bestSellerData?.[0]?.price}
                </span>
              </div>
            </div>
            <div className="h-[291px] w-full ">
              <Image
                src={pngBestSellerGamingPc}
                className="h-full max-w-full"
                alt="best-seller-monitor"
              />
            </div>
          </div>
          <div className="lg:col-span-8 mt-4 md:col-span-12 ">
            <div id="best-seller" className="flex justify-between">
              <h1 className="font-bold text-3xl">Best Sellers</h1>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="rounded-xl relative bg-secondary top-0 w-full md:top-12"
            >
              <CarouselContent className="flex  items-center  justify-evenly  ">
                {bestSellerData?.map((item: any, index: number) => (
                  <CarouselItem
                    key={`best-seller-${item?.id}`}
                    className="flex basis-1/2 sm:basis-1/3  md:basis-1/3 lg:basis-1/3 xl:basis-1/3 shrink-0 flex-col items-center"
                  >
                    <Link
                      href={`${allPagesRoutes?.PRODUCT_DETAILS}/${item?.slug}`}
                    >
                      <div className="bg-white card w-full border border-[#99999999] rounded-xl">
                        <div className="flex p-4 justify-between items-center">
                          <span className="border-[#D30200] text-xs font-medium text-[#D30200] border-2 rounded-full py-2 px-4 ">
                            0% Installment
                          </span>
                          <span>
                            <Heart
                              favorite={item?.isFavorite}
                              onClick={async (event: any) => {
                                event.stopPropagation(); // Prevents the click from propagating to the Link
                                event.preventDefault(); // Prevents default navigation behavior
                                if (item?.isFavorite) {
                                  await onRemoveFromFavorite(item?.id);
                                } else {
                                  await addToFavorite(item?.id);
                                }
                              }}
                            />
                          </span>
                        </div>
                        <div className="flex justify-center items-center">
                          <Image
                            src={pngBestSellerCpu}
                            alt=""
                            className="w-36 h-36 "
                          />
                        </div>
                        <div className="h-20 bg-gradient-to-b !line-clamp-2 font-semibold text-lg  flex items-center p-4 pt-5 from-white from-5% via-[#a1a1a1] via-50% to-white  to-95%">
                          {item?.name}
                        </div>
                        <div className="flex gap-2 px-4">
                          <span className="flex gap-2">
                            <Image src={svgIcon1Star} alt="star" />
                            <Image src={svgIcon1Star} alt="star" />
                            <Image src={svgIcon1Star} alt="star" />
                            <Image src={svgIcon1Star} alt="star" />
                            <Image src={svgIcon1Star} alt="star" />
                          </span>
                          <span className="font-regular text-[13px]">(2)</span>
                        </div>
                        <h2 className="px-4 mt-2 font-medium text-xl mb-4">
                          ${item?.price}
                        </h2>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
