"use client";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CircleX,
  Minus,
  Plus,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cpu from "../../assets/images/png/cpu.png";
import CommonBanner from "../Common/CommonBanner";
import { webpEmptyCart, svgIconBannerHome } from "@/assets/images";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearCart,
  removeItemCompletely,
  removeItemFromCart,
  selectCartItems,
} from "@/store/slices/cartSlice";
import allPagesRoutes from "@/constants/allPagesRoutes";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(cartItems);

  const subTotal = () => {
    let subtotal = 0;
    cartItems?.forEach((item) => {
      subtotal += (item.ex_gst_price || 0) * item.quantity;
    });
    return subtotal;
  };

  const total = () => {
    let total = 0;
    cartItems?.forEach((item) => {
      total += item.price * item.quantity - (item.discount_price || 0);
    });
    return total;
  };

  const taxTotal = () => {
    let taxTotal = 0;
    cartItems?.forEach((item) => {
      taxTotal +=
        item.price * item.quantity - (item.ex_gst_price || 0) * item.quantity;
    });
    return taxTotal;
  };

  const totalDiscount = () => {
    let totalDiscount = 0;
    cartItems?.forEach((item) => {
      totalDiscount += item.discount_price || 0;
    });
    return totalDiscount;
  };
  return (
    <>
      <CommonBanner
        icon={svgIconBannerHome}
        path={[{ title: "Shopping Cart", href: allPagesRoutes.CART }]}
      />

      <div className="flex lg:justify-center lg:flex-row flex-col  gap-5 mt-5 mb-5">
        <div>
          <div className="overflow-x-auto">
            <div className="text-[30px] w-[800px] font-bold border-[#E4E7E9] border-l border-r border-t pl-3 h-[64px] flex justify-start items-center">
              Shopping Cart
            </div>
            <div className="border-[#E4E7E9] border w-[800px] ">
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
                <div className="text-[#475156] font-medium  col-span-2">
                  <h3 className="w-full text-center">Quantity</h3>
                </div>
                <div className="text-[#475156] font-medium col-span-1">
                  <h3 className="w-full">Sub-Total</h3>
                </div>
                <div className="text-[#475156] w-full font-medium col-span-1"></div>
              </div>
              {/* Table data for cart */}
              {cartItems?.map((item) => (
                <div
                  className="grid grid-cols-12 bg-white p-2"
                  key={`cart-item-${item?.id}`}
                >
                  <div className=" flex col-span-5 items-center gap-2  pl-2">
                    <Image src={cpu} alt="product" className="w-[50px] " />
                    <Link
                      href={`${allPagesRoutes.PRODUCT_DETAILS}/${item?.slug}`}
                      key={`product-${item?.id}`}
                      title="Go to Product Details"
                    >
                      <div className="pr-3 line-clamp-2 font-medium">
                        {item?.name}
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center col-span-2 font-medium">
                    ${item?.model}
                  </div>
                  <div className="flex items-center col-span-1 font-medium">
                    ${item?.price}
                  </div>
                  <div className="col-span-2 flex justify-center items-center  ">
                    {/* <div className="flex justify-center items-center">
                      <div className="border border-[#E4E7E9] rounded  h-[48px] flex justify-center items-center ">
                        <span className="text-[18px] w-10 font-medium text-center">
                          {item?.quantity}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <Button
                          variant={"ghost"}
                          className="cursor-pointer p-1 h-full"
                          onClick={() =>
                            dispatch(
                              addItemToCart({
                                ...item,
                                quantity: 1,
                              })
                            )
                          }
                        >
                          <ChevronUp />
                        </Button>
                        <Button
                          variant={"ghost"}
                          className="cursor-pointer p-1 h-full"
                          onClick={() => dispatch(removeItemFromCart(item?.id))}
                        >
                          <ChevronDown />
                        </Button>
                      </div>
                    </div> */}
                    <div className="flex  items-center border  border-[#E4E7E9] ">
                      <Button
                        onClick={() => dispatch(removeItemFromCart(item?.id))}
                        variant="ghost"
                        className="cursor-pointer p-2 h-full"
                      >
                        <Minus />
                      </Button>
                      {item.quantity}
                      <Button
                        variant="ghost"
                        className="cursor-pointer p-2 h-full"
                        onClick={() =>
                          dispatch(
                            addItemToCart({
                              ...item,
                              quantity: 1,
                            })
                          )
                        }
                      >
                        <Plus />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center font-medium col-span-1">
                    ${item?.price * item?.quantity}
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <CircleX
                      className="cursor-pointer text-primary hover:text-[#929FA5]"
                      onClick={() => dispatch(removeItemCompletely(item?.id))}
                    />
                  </div>
                </div>
              ))}
              {cartItems?.length === 0 && (
                <div className="flex justify-center flex-col items-center">
                  <div className="w-[120px] h-[120px] flex justify-center items-center">
                    <Image src={webpEmptyCart} alt="empty-cart" />
                  </div>
                  <div className="text-center mb-5 text-[#929FA5] font-semibold">
                    Your cart is empty.
                  </div>
                </div>
              )}
            </div>
            <div className="w-[800px] border-[#E4E7E9] border-l border-r border-b  flex justify-between p-4  ">
              <button
                className="text-[#EB4227] border border-[#EB4227] font-bold w-[200px] h-[48px] flex justify-center items-center gap-2 "
                onClick={() => router.push(allPagesRoutes?.PRODUCTS)}
              >
                {" "}
                <ArrowLeft />
                Continue Shopping
              </button>
              {/* <button className="text-[#EB4227] border border-[#EB4227] font-bold w-[149px] h-[48px]  ">
                Update cart
              </button> */}
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <div className="border-[#E4E7E9] border p-5 flex flex-col gap-2">
            <span className="text-[30px] font-bold">Cart Total</span>

            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Sub-total</span>
              <span className="text-black font-semibold">${subTotal()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Shipping</span>
              <span className="text-black font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Discount</span>
              <span className="text-black font-semibold">
                ${totalDiscount()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Tax</span>
              <span className="text-black font-semibold">${taxTotal()}</span>
            </div>
            <hr />

            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Total</span>
              <span className="font-semibold text-[20px]">${total()} USD</span>
            </div>

            <Button
              disabled={cartItems?.length === 0}
              className="bg-[#EB4227] text-white font-bold  h-[56px] flex justify-center items-center gap-2 rounded uppercase"
              onClick={() => router.push(allPagesRoutes?.BILLING_CARD)}
            >
              Proceed to Checkout <ArrowRight />
            </Button>
          </div>
          <div className="border-[#E4E7E9] border mt-5 flex flex-col gap-5 p-5">
            <div className="text-[30px] font-bold border-b ">Coupon Code</div>
            <input
              type="email"
              className="w-full h-[44px] border-[#E4E7E9] border pl-4"
              placeholder="Email address"
            />
            <button className="bg-[#EB4227] text-white font-bold  h-[48px] w-[161px] rounded uppercase">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
