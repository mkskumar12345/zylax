import {
  pngGamingMonitor,
  pngMouse,
  pngWifyAms,
  svgIcon5Star,
  svgIconAddToBag,
} from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import allPagesRoutes from "@/constants/allPagesRoutes";
import checkQuantity from "@/lib/checkQuantity";
import { revalidateTagInCache } from "@/serverActions/cookies";
import toast from "react-hot-toast";
import {
  useAddToFavoriteMutation,
  useRemoveFromFavoriteMutation,
} from "@/store/apiServices/productsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  selectCartItems,
} from "@/store/slices/cartSlice";
import Heart from "@/assets/images/tsx-svg/heart";

const DealsOfTheDay = ({ dealOfTheDayData }: { dealOfTheDayData: any }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
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
    <div className="">
      <div className=" bg-[linear-gradient(180deg,_#d30200_50%,_white_50%)] pt-12 px-3 md:px-0">
        <h1 className="text-secondary md:container mt-10 font-semibold md:text-3xl text-2xl lg:text-4xl mb-8">
          Best Deals of The Days
        </h1>
        <div className="grid grid-cols-3 gap-x-4  md:container pb-10 ">
          {dealOfTheDayData?.slice(0, 6)?.map((item: any, index: number) => (
            <div
              key={`deal-of-the-day-${item?.id}`}
              className="bg-white border-secondary border flex-col w-full flex gap-2 "
            >
              <div className="  p-8 flex gap-2 flex-col border-b-1 border-secondary">
                <div className=" flex-wrap sm:flex-nowrap flex gap-8">
                  <div className="sm:basis-1/2  flex relative justify-center items-center">
                    <Image src={pngGamingMonitor} alt="gamingMonitor" />
                    <Heart
                      className="absolute top-0 right-0 cursor-pointer "
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
                    <div className="absolute top-0 left-0 rounded-full text-white bg-primary w-8 flex justify-center items-center p-1 text-[10px] font-extrabold	tracking-tight">
                      <span>75%</span>
                    </div>
                  </div>
                  <div className="sm:basis-1/2 flex flex-col gap-4">
                    <Link
                      href={`${allPagesRoutes?.PRODUCT_DETAILS}/${item?.slug}`}
                    >
                      <p className="font-semibold text-sm line-clamp-3">
                        {item?.name}
                      </p>
                    </Link>
                    <div className="flex gap-2">
                      <Image src={svgIcon5Star} alt="5star" />
                      <span className="font-regular text-xs">3</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-primary text-2xl">
                        ${Number(item?.price) - Number(item?.discount_price)}
                      </span>
                      <span className="line-through font-medium text-[#111827]">
                        ${item?.price}
                      </span>
                    </div>
                    {checkQuantity(cartItems, item) === 0 && (
                      <Button
                        onClick={() =>
                          dispatch(
                            addItemToCart({
                              ...item,
                              image: item?.product_img,
                              quantity: 1,
                            })
                          )
                        }
                        variant={"outline"}
                        className="border-primary hover:bg-transparent w-full d-flex justify-between text-primary font-medium"
                      >
                        <span>Add to Cart</span>
                        <Plus />
                      </Button>
                    )}
                    {checkQuantity(cartItems, item) > 0 && (
                      <div className="flex border-primary w-full d-flex justify-between text-primary font-medium items-center border border-[#E4E7E9] ">
                        <Button
                          onClick={() => dispatch(removeItemFromCart(item?.id))}
                          variant="ghost"
                          className="hover:bg-transparent p-2"
                        >
                          <Minus />
                        </Button>
                        {checkQuantity(cartItems, item)}
                        <Button
                          variant="ghost"
                          className="hover:bg-transparent p-2"
                          onClick={() =>
                            dispatch(
                              addItemToCart({
                                ...item,
                                image: item?.product_img,
                                quantity: 1,
                              })
                            )
                          }
                        >
                          <Plus />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDay;
