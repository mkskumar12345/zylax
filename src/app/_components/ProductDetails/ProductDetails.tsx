"use client";
import {
  pngGurentyCheckout,
  svgIconBannerHome,
  svgIconFacebook,
  svgIconFbInProductDetails,
  svgIconFreShipping,
  svgIconFreWarrenty,
  svgIconHeadphoneProdDetails,
  svgIconMoneyBackGurenty,
  svgIconPinterest,
  svgIconPinterestInProductDetails,
  svgIconSecurePayMethod,
  svgIconTwitter,
  svgIconTwitterInProductDetails,
} from "@/assets/images";
import CommonBanner from "@/components/Common/CommonBanner";
import React, { useState } from "react";
import {
  pngProductDetailsMain,
  pngProductDetails1,
  pngProductDetails2,
  pngProductDetails3,
} from "@/assets/images";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Rating from "@/components/Common/Rating";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";
import { Copy, Minus, Plus, RefreshCw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useAddToFavoriteMutation,
  useFavoriteProductMutation,
  useRemoveFromFavoriteMutation,
} from "@/store/apiServices/productsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  selectCartItems,
} from "@/store/slices/cartSlice";
import { useRouter } from "next/navigation";
import checkQuantity from "@/lib/checkQuantity";
import { revalidateTagInCache } from "@/serverActions/cookies";
import toast from "react-hot-toast";
import Heart from "@/assets/images/tsx-svg/heart";

const ProductDetails = ({ productDetails }: { productDetails: any }) => {
  const [selectedColor, setSelectedColor] = useState("#B1B5B8");
  const cartItems = useSelector(selectCartItems);
  const [favoriteProduct] = useFavoriteProductMutation();
  const [addToFavoriteMutation, { isSuccess: isSuccessFavorite }] =
    useAddToFavoriteMutation();
  const [removeFromFavorite, { isSuccess: isSuccessRemove }] =
    useRemoveFromFavoriteMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState({
    img: pngProductDetails1,
    id: 2,
  });
  const allColors = ["#B1B5B8", "#E0E1E1"];
  const allImages = [
    { img: pngProductDetailsMain, id: 1 },
    { img: pngProductDetails1, id: 2 },
    { img: pngProductDetails2, id: 3 },
    { img: pngProductDetails3, id: 4 },
    { img: pngProductDetails2, id: 5 },
    { img: pngProductDetails3, id: 6 },
  ];

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
  console.log(productDetails);
  return (
    <div>
      <CommonBanner
        icon={svgIconBannerHome}
        path={[
          { title: "Categories", href: "/products" },
          { title: "Product Details", href: "/products/product-details" },
        ]}
      />
      <div className="px-3 my-8 md:container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="">
            <div className="mb-4 w-full  h-fit min-h-96 flex justify-center items-center border border-[#cccccc] rounded-[5px] overflow-hidden m-auto">
              <Image src={selectedImage?.img} alt="product-details" />
            </div>
            <div className="flex justify-center xl:flex-nowrap flex-wrap gap-1">
              {allImages?.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "w-[88px] h-[88px] flex justify-center items-center cursor-pointer border",
                    item.id == selectedImage?.id
                      ? "border-[#EB4227] "
                      : "border-[#CCCCCC] "
                  )}
                  onClick={() => setSelectedImage(item)}
                >
                  <Image src={item?.img} alt="product-details" />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2 ">
            <div className="flex gap-2 sm:flex-row flex-col flex-wrap">
              <Rating stars={4} className="gap-1" />
              <span className="font-semibold texxt-sm">4.7 Star Rating</span>
              <span className="text-[#5F6C72] font-regular text-sm">
                (21,671 User feedback)
              </span>
            </div>
            <div className="font-medium leading-7 text-xl mt-2">
              {productDetails?.name}
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-1 mt-3 gap-2">
              <div className="flex gap-1 text-sm">
                <span className="font-regular">Sku:</span>
                <span className="font-medium">A264671</span>
              </div>
              <div className="flex gap-1  text-sm">
                <span className="text-[#5F6C72] font-regular">
                  Availablity:
                </span>
                <span className="text-[#2DB224] font-medium">In Stock</span>
              </div>
              <div className=" text-sm">
                <span className="text-[#5F6C72] font-regular">Brand:</span>
                <span className="text-[#191C1F] font-medium ">
                  {productDetails?.manufacture?.name}
                </span>
              </div>
              <div className=" text-sm">
                <span className="text-[#5F6C72] font-regular">Category:</span>
                <span className="text-[#191C1F] font-medium ">
                  Electronics Devices
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-2xl text-[#EB4227]">
                ${productDetails?.price}
              </span>
              <span className="text-[#77878F] text-lg">$1999.00</span>
              <span className="bg-[#FBAE24] ml-1 px-2 py-[6px] font-semibold text-sm">
                21% OFF
              </span>
            </div>
            {/* <Separator orientation="horizontal" className="my-4" /> */}
            <div className="grid xl:grid-cols-2 lg:grid-cols-1  gap-4">
              {/* <div className="flex flex-col gap-2">
                <div className="font-semibold text-sm">Color</div>
                <div className="flex gap-2">
                  {allColors.map((color, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-center gap-2 rounded-full p-1 cursor-pointer w-11 h-11",
                        color == selectedColor ? "border border-[#FA8232]" : ""
                      )}
                      onClick={() => setSelectedColor(color)}
                    >
                      <div
                        style={{ backgroundColor: color }}
                        className={`w-full h-full rounded-full`}
                      />
                    </div>
                  ))}
                </div>
              </div> */}
              {/* <div className="flex flex-col gap-2">
                <div className="font-semibold text-sm">Size</div>
                <Select defaultValue="1">
                  <SelectTrigger>
                    <SelectValue
                      className="h-11 border border-[#E4E7E9]"
                      placeholder="14-inch Liquid Retina XDR display"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">
                      14-inch Liquid Retina XDR display
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              {/* <div className="flex flex-col gap-2">
                <div className="font-semibold text-sm">Memory</div>
                <Select defaultValue="1">
                  <SelectTrigger>
                    <SelectValue
                      className="h-11 border border-[#E4E7E9]"
                      placeholder="16GB unified memory"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">16GB unified memory</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              {/* <div className="flex flex-col gap-2">
                <div className="font-semibold text-sm">Storage</div>
                <Select defaultValue="1">
                  <SelectTrigger>
                    <SelectValue
                      className="h-11 border border-[#E4E7E9]"
                      placeholder="1TB SSD Storage"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1TB SSD Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
            </div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 my-8 gap-4">
              {checkQuantity(cartItems, productDetails) > 0 && (
                <div className="xl:col-span-2 lg:col-span-1 grid grid-cols-2">
                  <div className="col-span-1 text-[#475156] justify-between flex items-center border border-[#E4E7E9] h-14">
                    <Button
                      onClick={() =>
                        dispatch(removeItemFromCart(productDetails?.id))
                      }
                      variant="ghost"
                      className="hover:bg-transparent"
                    >
                      <Minus />
                    </Button>
                    {checkQuantity(cartItems, productDetails)}
                    <Button
                      variant="ghost"
                      className="hover:bg-transparent"
                      onClick={() =>
                        dispatch(
                          addItemToCart({ ...productDetails, quantity: 1 })
                        )
                      }
                    >
                      <Plus />
                    </Button>
                  </div>
                </div>
              )}

              {checkQuantity(cartItems, productDetails) === 0 && (
                <div className="xl:col-span-2 lg:col-span-1">
                  <Button
                    onClick={() =>
                      dispatch(
                        addItemToCart({
                          ...productDetails,
                          quantity: 1,
                        })
                      )
                    }
                  >
                    Add to cart
                  </Button>
                </div>
              )}

              <div className="col-span-1">
                <Button
                  variant="outline"
                  className="w-full h-14 border-2 font-bold border-[#EB4227] text-[#EB4227] uppercase"
                  onClick={() => {
                    dispatch(addItemToCart({ ...productDetails, quantity: 1 }));
                    router.push("/cart");
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="flex justify-between xl:flex-nowrap flex-wrap gap-4">
              <div className="flex gap-4  ">
                <div className="flex gap-2 cursor-pointer items-center">
                  <Heart
                    favorite={productDetails?.isFavorite}
                    onClick={async (event: any) => {
                      event.stopPropagation(); // Prevents the click from propagating to the Link
                      event.preventDefault(); // Prevents default navigation behavior
                      if (productDetails?.isFavorite) {
                        await onRemoveFromFavorite(productDetails?.id);
                      } else {
                        await addToFavorite(productDetails?.id);
                      }
                    }}
                  />
                  <span className=" font-refular text-sm text-[#475156]">
                    Add to Wishlist
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <RefreshCw />
                  <span className="font-refular text-sm text-[#475156]">
                    Add to Compare
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="font-refular text-sm text-[#475156]">
                  Share product:
                </span>
                <Copy />
                <Image src={svgIconFbInProductDetails} alt="facebook" />
                <Image src={svgIconTwitterInProductDetails} alt="twitter" />
                <Image src={svgIconPinterestInProductDetails} alt="pinterest" />
              </div>
            </div>
            <div className="border border-[#E4E7E9] p-5 rounded-[4px] mt-8">
              <p className="font-semibold text-sm">
                100% Guarantee Safe Checkout
              </p>
              <div>
                <Image src={pngGurentyCheckout} alt="guarantee-checkout" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-16">
          <Tabs
            defaultValue="description"
            className="w-full border border-[#E4E7E9]"
          >
            <TabsList className="flex justify-start px-4 md:flex-nowrap flex-wrap border-b h-fit p-0 border-[#E4E7E9] w-full gap-4 md:justify-center bg-transparent ">
              <TabsTrigger
                value="description"
                className="font-semibold h-14 text-[#5F6C72] text-sm data-[state=active]:text-black data-[state=active]:border-b-2 border-[#EB4227]"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="additional-information"
                className="font-semibold text-[#5F6C72] h-14 text-sm data-[state=active]:text-black data-[state=active]:border-b-2 border-[#EB4227]"
              >
                Additional information
              </TabsTrigger>
              <TabsTrigger
                value="specification"
                className="font-semibold h-14 text-[#5F6C72] text-sm data-[state=active]:text-black data-[state=active]:border-b-2 border-[#EB4227]"
              >
                Specification
              </TabsTrigger>
              <TabsTrigger
                value="review"
                className="font-semibold h-14 text-[#5F6C72] text-sm data-[state=active]:text-black data-[state=active]:border-b-2 border-[#EB4227]"
              >
                Review
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <div
                className="p-8 gap-6"
                dangerouslySetInnerHTML={{
                  __html: productDetails?.description,
                }}
              ></div>
            </TabsContent>
            <TabsContent value="additional-information">
              <div className="p-8 gap-6 grid  grid-cols-4">
                <div className="xl:col-span-2 col-span-4">
                  <h2 className="font-semibold ">Description</h2>
                  <p className="mt-3 w-5/6 font-regular text-sm text-[#5F6C72]">
                    The most powerful MacBook Pro ever is here. With the
                    blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                    designed for pros — you get groundbreaking performance and
                    amazing battery life. Add to that a stunning Liquid Retina
                    XDR display, the best camera and audio ever in a Mac
                    notebook, and all the ports you need. The first notebook of
                    its kind, this MacBook Pro is a beast. M1 Pro takes the
                    exceptional performance of the M1 architecture to a whole
                    new level for pro users.
                  </p>
                  <p className="mt-3 w-5/6 font-regular text-sm text-[#5F6C72]">
                    Even the most ambitious projects are easily handled with up
                    to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural
                    Engine, and dedicated encode and decode media engines that
                    support H.264, HEVC, and ProRes codecs.
                  </p>
                </div>
                <div className="xl:col-span-1 md:col-span-2 col-span-4">
                  <h2 className="font-semibold">Feature</h2>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <Image src={svgIconFreWarrenty} alt="free-warrenty" />
                      <span className="text-sm font-regular">
                        Free 1 Year Warranty
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Image src={svgIconFreShipping} alt="free-shipping" />
                      <span className="text-sm font-regular">
                        Free Shipping & Fasted Delivery
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src={svgIconHeadphoneProdDetails}
                        alt="headphone-prod-details"
                      />
                      <span className="text-sm font-regular">
                        100% Money-back guarantee
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src={svgIconMoneyBackGurenty}
                        alt="money-back-gurenty"
                      />
                      <span className="text-sm font-regular">
                        24/7 Customer support
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src={svgIconSecurePayMethod}
                        alt="secure-pay-method"
                      />
                      <span className="text-sm font-regular">
                        Secure payment method
                      </span>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-1 md:col-span-2 col-span-4   md:border-l md:border-l-[#E4E7E9] py-1 px-3">
                  <h2 className="font-semibold">Shipping Information</h2>
                  <div className=" flex flex-col gap-2 mt-3">
                    <div className="flex gap-2">
                      <span className="font-medium text-sm text-[#191C1F]">
                        Courier:
                      </span>
                      <p className="font-regular text-sm tex-[#5F6C72]">
                        {" "}
                        2 - 4 days, free shipping
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-sm text-[#191C1F]">
                        Local Shipping:
                      </span>
                      <p className="font-regular text-sm tex-[#5F6C72]">
                        up to one week, $19.00
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-sm text-[#191C1F]">
                        UPS Ground Shipping:
                      </span>
                      <p className="font-regular text-sm tex-[#5F6C72]">
                        4 - 6 days, $29.00
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-sm text-[#191C1F]">
                        Unishop Global Export:
                      </span>
                      <p className="font-regular text-sm tex-[#5F6C72]">
                        3 - 4 days, $39.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="specification">
              <div
                className="p-8 "
                dangerouslySetInnerHTML={{
                  __html: productDetails?.specification,
                }}
              ></div>
            </TabsContent>
            <TabsContent value="review">
              <div className="p-8 gap-6 grid  grid-cols-4">
                <div className="xl:col-span-2 col-span-4">
                  <h2 className="font-semibold ">Description</h2>
                  <p className="mt-3 w-5/6 font-regular text-sm text-[#5F6C72]">
                    The most powerful MacBook Pro ever is here. With the
                    blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                    designed for pros — you get groundbreaking performance and
                    amazing battery life. Add to that a stunning Liquid Retina
                    XDR display, the best camera and audio ever in a Mac
                    notebook, and all the ports you need. The first notebook of
                    its kind, this MacBook Pro is a beast. M1 Pro takes the
                    exceptional performance of the M1 architecture to a whole
                    new level for pro users.
                  </p>
                  <p className="mt-3 w-5/6 font-regular text-sm text-[#5F6C72]">
                    Even the most ambitious projects are easily handled with up
                    to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural
                    Engine, and dedicated encode and decode media engines that
                    support H.264, HEVC, and ProRes codecs.
                  </p>
                </div>
                <div className="xl:col-span-1 md:col-span-2 col-span-4">
                  <h2 className="font-semibold">Feature</h2>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <Image src={svgIconFreWarrenty} alt="free-warrenty" />
                      <span className="text-sm font-regular">
                        Free 1 Year Warranty
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Image src={svgIconFreShipping} alt="free-shipping" />
                      <span className="text-sm font-regular">
                        Free Shipping & Fasted Delivery
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src={svgIconHeadphoneProdDetails}
                        alt="headphone-prod-details"
                      />
                      <span className="text-sm font-regular">
                        100% Money-back guarantee
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src={svgIconMoneyBackGurenty}
                        alt="money-back-gurenty"
                      />
                      <span className="text-sm font-regular">
                        24/7 Customer support
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src={svgIconSecurePayMethod}
                        alt="secure-pay-method"
                      />
                      <span className="text-sm font-regular">
                        Secure payment method
                      </span>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-1 md:col-span-2 col-span-4   md:border-l md:border-l-[#E4E7E9] py-1 px-3">
                  <h2 className="font-semibold">Shipping Information</h2>
                  <div className=" flex flex-col gap-2 mt-3">
                    <div className="flex gap-2">
                      <span className="font-medium text-sm text-[#191C1F]">
                        Courier:
                      </span>
                      <p className="font-regular text-sm tex-[#5F6C72]">
                        {" "}
                        2 - 4 days, free shipping
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-sm text-[#191C1F]">
                        Local Shipping:
                      </span>
                      <p className="font-regular text-sm tex-[#5F6C72]">
                        up to one week, $19.00
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-sm text-[#191C1F]">
                        UPS Ground Shipping:
                      </span>
                      <p className="font-regular text-sm tex-[#5F6C72]">
                        4 - 6 days, $29.00
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-sm text-[#191C1F]">
                        Unishop Global Export:
                      </span>
                      <p className="font-regular text-sm tex-[#5F6C72]">
                        3 - 4 days, $39.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
