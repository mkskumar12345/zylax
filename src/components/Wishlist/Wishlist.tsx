"use client";

import { CircleX, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import cpu from "../../assets/images/png/cpu.png";
import { svgIconBannerHome, webpEmptyCart } from "@/assets/images";
import CommonBanner from "../Common/CommonBanner";
import {
  useFavoriteProductsListQuery,
  useRemoveFromFavoriteMutation,
} from "@/store/apiServices/productsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemCompletely,
  removeItemFromCart,
  selectCartItems,
} from "@/store/slices/cartSlice";
import { Button } from "../ui/button";
import { revalidateTagInCache } from "@/serverActions/cookies";
import toast from "react-hot-toast";
import checkQuantity from "@/lib/checkQuantity";
import Link from "next/link";
import allPagesRoutes from "@/constants/allPagesRoutes";

const isInCart = (cartItems: any[], id: string | number) => {
  return cartItems?.find((item: any) => item?.id === id);
};

const Wishlist = ({ wishlist }: { wishlist: any }) => {
  const cartItem = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [removeFromFavorite, { isSuccess }] = useRemoveFromFavoriteMutation();

  const onRemoveFromFavorite = async (id: string) => {
    const response = await removeFromFavorite({ id }).unwrap();
    if (isSuccess || response?.status) {
      revalidateTagInCache("favorite-product");
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    isInCart(cartItem, id) && dispatch(removeItemCompletely(id));
  };

  return (
    <>
      <div className="">
        <div className="grid place-items-center">
          <div className="w-full ">
            <div className="font-bold  pl-2  text-left border-[#E4E7E9]  border-t lg:border-l lg:border-r  text-[30px]">
              My Wishlist
            </div>
            <div className="min-w-full max-w-full overflow-x-auto ">
              <div className="lg:border-[#E4E7E9] w-full lg:border mb-5">
                {/* Table heading for cart */}
                <div className="grid grid-cols-12 bg-[#F2F4F5] items-center h-[38px]">
                  <div className="col-span-5 text-[#475156] font-medium pl-3">
                    <h3>Products</h3>
                  </div>
                  <div className="text-[#475156] font-medium text-center col-span-2">
                    <h3 className="w-full">Model</h3>
                  </div>
                  <div className="text-[#475156] font-medium col-span-1">
                    <h3 className="w-full">Price</h3>
                  </div>
                  <div className="text-[#475156] font-medium  col-span-3">
                    <h3 className="w-full text-center">Quantity</h3>
                  </div>
                  <div className="text-[#475156] w-full font-medium col-span-1"></div>
                </div>
                {/* Table data for cart */}
                {wishlist?.favorites?.map((item: any) => (
                  <div
                    className="grid grid-cols-12  bg-white p-2"
                    key={`cart-item-${item?.id}`}
                  >
                    <div className=" flex col-span-5 items-center gap-2  pl-2">
                      <Image src={cpu} alt="product" className="w-[50px] " />
                      <Link
                        href={`${allPagesRoutes.PRODUCT_DETAILS}/${item?.slug}`}
                        key={`product-${item?.id}`}
                        title="Go to Product Details"
                      >
                        <div
                          className="pr-3 line-clamp-2 font-medium"
                          title={item?.products_shri?.name}
                        >
                          {item?.products_shri?.name}
                        </div>
                      </Link>
                    </div>
                    <div className="flex items-center justify-center col-span-2 font-medium">
                      ${item?.products_shri?.model}
                    </div>
                    <div className="flex items-center col-span-1 font-medium">
                      ${item?.products_shri?.price}
                    </div>
                    <div className="col-span-3 flex justify-center items-center  ">
                      {checkQuantity(cartItem, {
                        ...item,
                        id: item?.productId,
                      }) === 0 && (
                        <Button
                          onClick={() =>
                            dispatch(
                              addItemToCart({
                                ...item,
                                ...item?.products_shri,
                                quantity: 1,
                              })
                            )
                          }
                          className=" lg:h-[48px] h-[30px] w-[120px]  text-[12px] rounded bg-[#EB4227] uppercase text-white font-semibold flex justify-center items-center gap-2 "
                        >
                          add to cart <ShoppingCart size={16} />
                        </Button>
                      )}
                      {checkQuantity(cartItem, {
                        ...item,
                        id: item?.productId,
                      }) > 0 && (
                        <div className="flex justify-evenly lg:h-[48px] h-[30px]  items-center border  border-[#E4E7E9] w-[120px]">
                          <Button
                            onClick={() =>
                              dispatch(removeItemFromCart(item?.productId))
                            }
                            variant="ghost"
                            className="cursor-pointer hover:bg-transparent p-2 h-full"
                          >
                            <Minus />
                          </Button>
                          {checkQuantity(cartItem, {
                            ...item,
                            ...item?.products_shri,
                          })}
                          <Button
                            variant="ghost"
                            className="cursor-pointer hover:bg-transparent p-2 h-full"
                            onClick={() =>
                              dispatch(
                                addItemToCart({
                                  ...item,
                                  ...item?.products_shri,
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

                    <div
                      className="col-span-1 flex items-center justify-center "
                      title="remove from wishlist"
                    >
                      <CircleX
                        className="cursor-pointer text-primary hover:text-[#929FA5]"
                        onClick={() => {
                          onRemoveFromFavorite(item?.productId);
                        }}
                      />
                    </div>
                  </div>
                ))}
                {wishlist?.favorites?.length === 0 && (
                  <div className="flex justify-center flex-col items-center">
                    <div className="w-[120px] h-[120px] flex justify-center items-center">
                      <Image src={webpEmptyCart} alt="empty-cart" />
                    </div>
                    <div className="text-center mb-5 text-[#929FA5] font-semibold">
                      Nothing is in your wishlist.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
