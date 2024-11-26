"use client";

import Image from "next/image";
import React from "react";
import cod from "../../assets/images/svg/cod.svg";
import venmo from "../../assets/images/svg/venmo.svg";
import paypal from "../../assets/images/svg/paypal.svg";
import amazonpay from "../../assets/images/svg/amazonpay.svg";
import card from "../../assets/images/svg/CreditCard.svg";
import { ArrowRight, Phone } from "lucide-react";
import ordersumm from "../../assets/images/svg/ordersummary.svg";
import { svgIconBannerHome } from "@/assets/images";
import CommonBanner from "../Common/CommonBanner";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { selectCartItems } from "@/store/slices/cartSlice";
import { useSelector } from "react-redux";

const BillingCard = () => {
  const cartItems = useSelector(selectCartItems);
  const form = useForm({
    // resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      newsletter: false,
      companyName: "",
      country: "",
      state: "",
      zipcode: "",
      city: "",
      Phone: "",
    },
  });

  const onSubmit = async (data: any) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      country: data.country,
      address: data.address,
      postcode: data.pinCode,
      state: data.state,
      city: data.city,
    };
    console.log(payload);
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
        path={[{ title: "My Profile", href: allPagesRoutes.USER_PROFILE }]}
      />

      <div className="mt-5 mb-20 overflow-hidden">
        <div className="flex lg:justify-center lg:flex-row flex-col lg:items-start items-center gap-5 ">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Form {...form}>
              <div className="lg:w-[900px]">
                <h2 className="font-semibold text-xl"> Billing Information</h2>

                <div className="flex flex-col gap-2 mt-5">
                  <div className="lg:grid grid-cols-3 gap-3">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="mt-5">
                          <Label className="font-semibold">First Name</Label>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="First Name"
                              className="border-[#CCCCCC] border rounded h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="mt-5">
                          <Label className="font-semibold">Last Name</Label>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Last Name"
                              className="border-[#CCCCCC] border rounded  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companyName"
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
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <Label className="font-semibold">Address</Label>
                          <Input className="border-[#CCCCCC] border rounded lg:w-full w-[350px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex lg:flex-row flex-col gap-5">
                    <div className="flex lg:flex-row flex-col gap-5">
                      <div>
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold">Country</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue className="border-[#CCCCCC] border rounded lg:w-[210px] w-[350px] h-[44px] outline-none focus:border-[#CCCCCC]" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="india">india</SelectItem>
                                  <SelectItem value="usa">USA</SelectItem>
                                  <SelectItem value="china">China</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold">
                                Region/State
                              </Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue
                                    placeholder="Select"
                                    className="border-[#CCCCCC] border rounded lg:w-[210px] w-[350px] h-[44px] outline-none focus:border-[#CCCCCC]"
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="india">india</SelectItem>
                                  <SelectItem value="usa">usa</SelectItem>
                                  <SelectItem value="china">china</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="flex lg:flex-row flex-col gap-5">
                      <div>
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold">City</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue
                                    placeholder="Select"
                                    className="border-[#CCCCCC] border rounded lg:w-[210px] w-[350px] h-[44px] outline-none focus:border-[#CCCCCC]"
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="india">india</SelectItem>
                                  <SelectItem value="usa">usa</SelectItem>
                                  <SelectItem value="china">china</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
                        <FormField
                          control={form.control}
                          name="zipcode"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold">Zipcode</Label>
                              <Input className="border-[#CCCCCC] border rounded lg:w-[210px] w-[350px]  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex lg:justify-between lg:flex-row flex-col">
                    <div>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="font-semibold">Email</Label>
                            <Input
                              placeholder="Email"
                              className="border-[#CCCCCC] border rounded lg:w-[440px] w-[350px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                            />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="font-semibold">
                              Phone Number
                            </Label>
                            <Input
                              placeholder="Phone Number"
                              className="border-[#CCCCCC] border rounded lg:w-[440px] w-[350px]  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                            />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Ship into different address</span>
                  </div>
                </div>

                <div className="mt-2 ">
                  <div className="font-semibold lg:w-full w-[350px] text-xl lg:border-b border-[#cccccc] h-[50px] flex justify-start items-center">
                    Payment Option
                  </div>
                  <div className="flex flex-col gap-2 pb-4">
                    <div className="flex lg:flex-row lg:border  flex-wrap w-[350px] lg:w-full lg:p-5 lg:border-b border-[#cccccc]">
                      <div className="w-[170px] h-[96px] flex flex-col gap-2 items-center lg:border-r lg:border-[#CCCCCC] ">
                        <Image src={cod} alt="cod" />
                        <span>Bank Deposit</span>

                        <input
                          type="radio"
                          name="payment"
                          value="credit-card"
                          className=""
                        />
                      </div>

                      <div className="w-[170px] h-[96px] flex flex-col gap-2 items-center lg:border-r lg:border-[#CCCCCC]">
                        <Image src={paypal} alt="paypal" />
                        <span>Paypal</span>

                        <input
                          type="radio"
                          name="payment"
                          value="credit-card"
                          className=""
                        />
                      </div>

                      <div className="w-[170px] h-[96px] flex flex-col gap-2 items-center border-[#CCCCCC] ">
                        <Image src={card} alt="card" />
                        <span>Credit/Debit Card(NAB Pay)</span>

                        <input
                          type="radio"
                          name="payment"
                          value="credit-card"
                          className=""
                        />
                      </div>
                    </div>

                    <div>
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="font-semibold">
                              Name on Card
                            </Label>

                            <Input className="border-[#CCCCCC] border lg:border-t lg:border-b rounded lg:w-full w-[350px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="font-semibold">Card Number</Label>
                            <Input className="border-[#CCCCCC] border rounded lg:w-full w-[350px]  h-[44px] pl-2 outline-none focus:border-[#CCCCCC]" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex lg:justify-between flex-col">
                      <div>
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold">
                                Expire Date
                              </Label>
                              <Input
                                placeholder="DD/YY"
                                className="border-[#CCCCCC] border rounded lg:w-[440px] w-[350px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                              />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold">CVC</Label>
                              <Input
                                placeholder="CVC"
                                className="border-[#CCCCCC] border rounded lg:w-[440px] w-[350px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                              />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="font-semibold text-xl mt-5">
                  Additional Information
                </div>
                <div className="mt-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <Label className="font-semibold">
                          Order Notes
                          <span className="text-[#929FA5]">(Optional)</span>
                        </Label>
                        <Textarea
                          className="border-[#CCCCCC] border rounded lg:w-full w-[350px] h-[124px] pl-2 outline-none focus:border-[#CCCCCC]"
                          placeholder="Notes about your order, e.g. special notes for delivery"
                        />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </Form>
          </form>
          <div className="left w-[400px] h-[500px]  ">
            <div className="border-[#E4E7E9] border p-5 flex flex-col gap-2 rounded">
              <span className="text-xl font-semibold">Order Summery</span>
              {cartItems?.map((item) => (
                <div className="flex items-center gap-2">
                  <Image src={ordersumm} alt="" className="w-[64px] h-[64px]" />
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
                <span className="font-semibold text-[20px]">
                  ${total()} USD
                </span>
              </div>

              <button className="bg-[#EB4227] text-white font-bold  h-[56px] flex justify-center items-center gap-2 rounded uppercase">
                Place order
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingCard;
