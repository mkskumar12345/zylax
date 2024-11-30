"use client";

import Image from "next/image";
import React from "react";
import cod from "../../assets/images/svg/cod.svg";
import paypal from "../../assets/images/svg/paypal.svg";
import card from "../../assets/images/svg/CreditCard.svg";
import { ArrowRight } from "lucide-react";
import ordersumm from "../../assets/images/svg/ordersummary.svg";
import { svgIconBannerHome } from "@/assets/images";
import CommonBanner from "../Common/CommonBanner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import allPagesRoutes from "@/constants/allPagesRoutes";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { clearCart, selectCartItems } from "@/store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { useOnCheckoutMutation } from "@/store/apiServices/cartApi";
import toast from "react-hot-toast";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const checkoutSchema = z
  .object({
    billingAddress: z.object({
      firstName: z.string().min(1, { message: "Please enter your first name" }),
      lastName: z.string().min(1, { message: "Please enter your last name" }),
      email: z.string().min(1, { message: "Please enter your email" }),
      phone: z.string().min(1, { message: "Please enter your phone number." }),
      address: z.string().min(1, { message: "Please enter your address." }),
      companyName: z.string().optional(),
      country: z
        .string()
        .min(1, { message: "Please enter your country name." }),
      state: z.string().min(1, { message: "Please enter your state." }),
      zip: z.string().min(1, { message: "Please enter your zip code." }),
      city: z.string().min(1, { message: "Please enter your city." }),
    }),
    shippingAddress: z
      .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
        companyName: z.string().optional(),
        country: z.string().optional(),
        state: z.string().optional(),
        zip: z.string().optional(),
        city: z.string().optional(),
      })
      .partial(), // Mark all fields as optional initially
    payBy: z.enum(["BANK", "PAYPAL", "NAB"]),
    isShippingAddressDifferent: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.isShippingAddressDifferent) {
      // Fields that must be validated
      const requiredFields: (keyof (typeof data)["shippingAddress"])[] = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "address",
        "companyName",
        "country",
        "state",
        "zip",
        "city",
      ];

      // Validate each required field
      requiredFields.forEach((field) => {
        if (
          !data.shippingAddress?.[field] ||
          data.shippingAddress[field]?.trim() === ""
        ) {
          ctx.addIssue({
            code: "custom", // Specify the issue type
            path: ["shippingAddress", field], // Path to the field
            message: `Please enter your ${field
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()}.`,
          });
        }
      });
    }
  });

const BillingCard = ({
  profileData,
  stateList,
}: {
  profileData: any;
  stateList: any;
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [onCheckout, { isSuccess: isSuccessCheckout }] =
    useOnCheckoutMutation();

  console.log(profileData);
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      billingAddress: {
        firstName: profileData?.name?.split(" ")[0] || "",
        lastName:
          profileData?.name?.replace(profileData?.name?.split(" ")[0], "") ||
          "",
        email: profileData?.email || "",
        phone: profileData?.phone || "",
        address: profileData?.address || "",
        companyName: profileData?.companyName || "",
        country: profileData?.country || "",
        state: profileData?.state || "",
        zip: profileData?.postcode || "",
        city: profileData?.city || "",
      },
      shippingAddress: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        country: "",
        address: "",
        state: "",
        zip: "",
        city: "",
      },
      payBy: "BANK",
      isShippingAddressDifferent: false,
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    const payload = {
      cart: cartItems?.map((item) => ({
        productId: item.id,
        qty: item.quantity,
        shipping: 2,
        price: item.price,
        ex_gst_price: item.ex_gst_price,
      })),
      billingAddress: {
        ...data?.billingAddress,
      },
      shippingAddress: form.watch("isShippingAddressDifferent")
        ? {
            ...data?.shippingAddress,
          }
        : {
            ...data?.billingAddress,
          },
      payBy: data?.payBy,
    };

    const response = await onCheckout(payload).unwrap();
    if (isSuccessCheckout || response?.success) {
      toast.success(response.message);
      dispatch(clearCart());
      router.push(allPagesRoutes.SUCCESSFULLY_PURCHASED);
    } else {
      toast.error(response.message);
    }
  };

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
        path={[{ title: "Billing", href: allPagesRoutes.BILLING_CARD }]}
      />

      <div className="mt-5 mb-20 container">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Form {...form}>
            <div className="grid grid-cols-12 gap-5 ">
              <div className="lg:col-span-8 col-span-12">
                <div className="">
                  <h2 className="font-semibold text-xl">Billing Information</h2>

                  <div className="flex flex-col gap-2 -mt-3">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-3">
                      <FormField
                        control={form.control}
                        name="billingAddress.firstName"
                        render={({ field }) => (
                          <FormItem className="mt-5">
                            <Label className="font-semibold required">
                              First Name
                            </Label>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="First Name"
                                className="border-[#CCCCCC] border rounded h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="billingAddress.lastName"
                        render={({ field }) => (
                          <FormItem className="mt-5">
                            <Label className="font-semibold required">
                              Last Name
                            </Label>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Last Name"
                                className="border-[#CCCCCC] border rounded  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="billingAddress.companyName"
                        render={({ field }) => (
                          <FormItem className="mt-5 sm:col-span-2 md:col-span-1">
                            <Label className="font-semibold optional">
                              Company Name
                            </Label>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Company Name"
                                className="border-[#CCCCCC] border rounded  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div>
                      <FormField
                        control={form.control}
                        name="billingAddress.address"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="font-semibold required">
                              Address
                            </Label>
                            <Input
                              {...field}
                              className="border-[#CCCCCC] border rounded w-full h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=" gap-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="billingAddress.country"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold required">
                                Country
                              </Label>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue
                                    placeholder="Select Country"
                                    className="border-[#CCCCCC] border rounded lg:w-[210px] w-[350px] h-[44px] outline-none focus:border-[#CCCCCC]"
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Australia">
                                    Australia
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="billingAddress.state"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold required">
                                Region/State
                              </Label>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue
                                    placeholder="Select State"
                                    className="border-[#CCCCCC] border rounded lg:w-[210px] w-[350px] h-[44px] outline-none focus:border-[#CCCCCC]"
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  {stateList?.data?.map(
                                    (item: {
                                      state_id: string;
                                      state_title: string;
                                    }) => (
                                      <SelectItem
                                        key={item.state_id}
                                        value={item.state_title}
                                      >
                                        {item.state_title}
                                      </SelectItem>
                                    )
                                  )}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5 mt-2">
                        <FormField
                          control={form.control}
                          name="billingAddress.city"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold required">
                                City
                              </Label>
                              <Input
                                placeholder="City"
                                {...field}
                                className="border-[#CCCCCC] border rounded     h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="billingAddress.zip"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold required">
                                Zipcode
                              </Label>
                              <Input
                                placeholder="Zipcode"
                                {...field}
                                className="border-[#CCCCCC] border rounded     h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="billingAddress.email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <Label className="font-semibold required">
                              Email
                            </Label>
                            <Input
                              {...field}
                              placeholder="Email"
                              className="border-[#CCCCCC] border rounded w-full  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="billingAddress.phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <Label className="font-semibold required">
                              Phone Number
                            </Label>
                            <Input
                              {...field}
                              placeholder="Phone Number"
                              className="border-[#CCCCCC] border rounded   h-[44px] pl-2 outline-none focus:border-[#CCCCCC] w-full"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <FormField
                      control={form.control}
                      name="isShippingAddressDifferent"
                      render={({ field }) => (
                        <FormItem className="w-full flex items-center gap-2">
                          <Checkbox
                            id="isShippingAddressDifferent"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <Label
                            htmlFor="isShippingAddressDifferent"
                            className="font-semibold cursor-pointer !mt-0  "
                          >
                            Ship into different address
                          </Label>
                        </FormItem>
                      )}
                    />
                  </div>
                  {form.watch("isShippingAddressDifferent") ? (
                    <div>
                      <h2 className="font-semibold text-xl mt-5">
                        Shipping Address
                      </h2>
                      <div className="flex flex-col gap-2 -mt-3 ">
                        <div className="lg:grid grid-cols-3 gap-3 ">
                          <FormField
                            control={form.control}
                            name="shippingAddress.firstName"
                            render={({ field }) => (
                              <FormItem className="mt-5">
                                <Label className="font-semibold required">
                                  First Name
                                </Label>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="First Name"
                                    className="border-[#CCCCCC] border rounded  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="shippingAddress.lastName"
                            render={({ field }) => (
                              <FormItem className="mt-5">
                                <Label className="font-semibold required">
                                  Last Name
                                </Label>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Last Name"
                                    className="border-[#CCCCCC] border rounded  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="shippingAddress.companyName"
                            render={({ field }) => (
                              <FormItem className="mt-5">
                                <Label className="font-semibold optional">
                                  Company Name
                                </Label>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Company Name"
                                    className="border-[#CCCCCC] border rounded  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>

                        <div>
                          <FormField
                            control={form.control}
                            name="shippingAddress.address"
                            render={({ field }) => (
                              <FormItem>
                                <Label className="font-semibold required">
                                  Address
                                </Label>
                                <Input
                                  placeholder="Address"
                                  {...field}
                                  className="border-[#CCCCCC] border rounded lg:w-full w-[350px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className=" gap-5">
                          <div className="grid grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="shippingAddress.country"
                              render={({ field }) => (
                                <FormItem>
                                  <Label className="font-semibold required">
                                    Country
                                  </Label>
                                  <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                  >
                                    <SelectTrigger>
                                      <SelectValue
                                        placeholder="Select Country"
                                        className="border-[#CCCCCC] border rounded lg:w-[210px] w-[350px] h-[44px] outline-none focus:border-[#CCCCCC]"
                                      />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Australia">
                                        Australia
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="shippingAddress.state"
                              render={({ field }) => (
                                <FormItem>
                                  <Label className="font-semibold required">
                                    Region/State
                                  </Label>
                                  <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                  >
                                    <SelectTrigger>
                                      <SelectValue
                                        placeholder="Select"
                                        className="border-[#CCCCCC] border rounded lg:w-[210px] w-[350px] h-[44px] outline-none focus:border-[#CCCCCC]"
                                      />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {stateList?.data?.map(
                                        (item: {
                                          state_id: string;
                                          state_title: string;
                                        }) => (
                                          <SelectItem
                                            key={item.state_id}
                                            value={item.state_title}
                                          >
                                            {item.state_title}
                                          </SelectItem>
                                        )
                                      )}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-5 mt-2">
                            <FormField
                              control={form.control}
                              name="shippingAddress.city"
                              render={({ field }) => (
                                <FormItem>
                                  <Label className="font-semibold required">
                                    City
                                  </Label>
                                  <Input
                                    placeholder="City"
                                    {...field}
                                    className="border-[#CCCCCC] border rounded     h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                                  />
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="shippingAddress.zip"
                              render={({ field }) => (
                                <FormItem>
                                  <Label className="font-semibold required">
                                    Zipcode
                                  </Label>
                                  <Input
                                    placeholder="Zipcode"
                                    {...field}
                                    className="border-[#CCCCCC] border rounded     h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                                  />
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                          <FormField
                            control={form.control}
                            name="shippingAddress.email"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <Label className="font-semibold required">
                                  Email
                                </Label>
                                <Input
                                  {...field}
                                  placeholder="Email"
                                  className="border-[#CCCCCC] border rounded w-full  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="shippingAddress.phone"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <Label className="font-semibold required">
                                  Phone Number
                                </Label>
                                <Input
                                  {...field}
                                  placeholder="Phone Number"
                                  className="border-[#CCCCCC] border rounded   h-[44px] pl-2 outline-none focus:border-[#CCCCCC] w-full"
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 ">
                <div className="border-[#E4E7E9] border p-5 flex flex-col gap-2 rounded">
                  <span className="text-xl font-semibold">Order Summery</span>
                  {cartItems?.map((item) => (
                    <div className="flex items-center gap-2">
                      <Image
                        src={ordersumm}
                        alt=""
                        className="w-[64px] h-[64px]"
                      />
                      <div>
                        <div className="line-clamp-1">{item?.name}</div>

                        <div>
                          {item?.quantity} x
                          <span className="text-[#EB4227] font-semibold">
                            ${item?.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between">
                    <span className="text-[#5F6C72]">Sub-total</span>
                    <span className="text-black font-semibold">
                      ${subTotal()}
                    </span>
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
                    <span className="text-black font-semibold">
                      ${taxTotal()}
                    </span>
                  </div>
                  <hr />

                  <div className="flex justify-between">
                    <span className="text-[#5F6C72]">Total</span>
                    <span className="font-semibold text-[20px]">
                      ${total()} USD
                    </span>
                  </div>

                  <div className="mt-2 ">
                    <div className="font-semibold lg:w-full  text-xl lg:border-b border-[#cccccc] h-[50px] flex justify-start items-center">
                      Payment Option
                    </div>
                    <FormField
                      control={form.control}
                      name="payBy"
                      render={({ field }) => (
                        <FormItem>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue="BANK"
                            className="grid sm:grid-cols-3 grid-cols-1  py-3"
                          >
                            <div className="flex items-center gap-3  sm:flex-col space-x-2">
                              <div className="w-5">
                                <RadioGroupItem value="BANK" id="BANK" />
                              </div>
                              <Label
                                htmlFor="BANK"
                                className="flex flex-col items-center cursor-pointer gap-2 w-full"
                              >
                                <Image src={cod} alt="cod" />
                                <span className="text-center w-full">
                                  Bank Deposit
                                </span>
                              </Label>
                            </div>
                            <div className="flex items-center gap-3 sm:flex-col space-x-2 sm:border-x sm:border-[#CCCCCC] ">
                              <div className="w-5">
                                <RadioGroupItem value="PAYPAL" id="PAYPAL" />
                              </div>
                              <Label
                                htmlFor="PAYPAL"
                                className="flex flex-col items-center cursor-pointer w-full gap-2"
                              >
                                <Image src={paypal} alt="paypal" />
                                <span className="text-center w-full">
                                  Paypal
                                </span>
                              </Label>
                            </div>
                            <div className="flex items-center gap-3 sm:flex-col space-x-2">
                              <div className="w-5">
                                <RadioGroupItem value="NAB" id="NAB" />
                              </div>
                              <Label
                                htmlFor="NAB"
                                className="flex flex-col items-center w-full cursor-pointer gap-2"
                              >
                                <Image src={card} alt="card" />
                                <span className="text-center w-full">
                                  Credit/Debit Card(NAB Pay)
                                </span>
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-[#EB4227] text-white font-bold  h-[56px] flex justify-center items-center gap-2 rounded uppercase"
                  >
                    Place order
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </form>
      </div>
    </>
  );
};

export default BillingCard;
