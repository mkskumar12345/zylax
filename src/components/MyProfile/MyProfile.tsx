"use client";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import profile from "../../assets/images/png/profile.png";
import { Edit3 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { updateProfileAction } from "@/serverActions/authActions";
import toast from "react-hot-toast";

const profileSchema = z.object({
  firstName: z.string().min(1, { message: "Please enter your first name" }),
  lastName: z.string().min(1, { message: "Please enter your last name" }),
  email: z.string().min(1, { message: "Please enter your email" }),
  phone: z.string().min(1, { message: "Please enter your phone number." }),
  country: z.string().min(1, { message: "Please enter your country name." }),
  address: z.string().min(1, { message: "Please enter your address." }),
  pinCode: z.string().min(1, { message: "Please enter your pincode" }),
});
const MyProfile = ({ profileData }: { profileData: any }) => {
  console.log(profileData);
  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      "profile-photo": "",
      firstName: profileData?.name?.split(" ")[0] || "",
      lastName: profileData?.name?.split(" ")[1] || "",
      email: profileData?.email || "",
      phone: profileData?.phone || "",
      country: profileData?.country || "",
      address: profileData?.address || "",
      pinCode: profileData?.postcode || "",
    },
  });

  const onSubmit = async (data: any) => {
    const payload = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      phone: data.phone,
      country: data.country,
      address: data.address,
      postcode: data.pinCode,
    };
    const response: any = await updateProfileAction(payload);
  };
  return (
    <div>
      <div className="border-b border-[#E4E7E9]">
        <span className="font-bold text-[30px]">My Profile</span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-5 flex justify-between items-center">
            <div className="relative inline-block ">
              <FormField
                control={form.control}
                name="profile-photo"
                render={({ field }) => (
                  <FormItem>
                    <Label
                      htmlFor="profile-photo"
                      className="cursor-pointer rounded-full"
                    >
                      <Image
                        src={profile}
                        alt="profile photo"
                        className="rounded-full w-[81px] h-[81px]"
                      />
                      <Button
                        variant="ghost"
                        className=" absolute bottom-0 bg-[#EB4227]  right-0 w-[25px] h-[25px]  p-1 rounded-full shadow-lg"
                        aria-label="Edit profile photo"
                      >
                        <Pencil className="w-4 h-4 " color="white" />
                      </Button>
                    </Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="profile-photo"
                        type="file"
                        className="hidden"
                        name="profile-photo"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <button className="bg-[#EB4227] w-[172px] h-[54px] rounded text-white flex justify-center items-center gap-2 font-bold text-[16px]">
              <Pencil />
              Edit Profile
            </button>
          </div>
          <div className="mt-5 gap-4 flex flex-wrap md:flex-nowrap  justify-between items-center ">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Label className="font-semibold">First Name</Label>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-[#CCCCCC] border   h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
                      placeholder="First Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Label className="font-semibold">Last Name</Label>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-[#CCCCCC] border   h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
                      placeholder="Last Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-5 flex gap-4 justify-between md:flex-nowrap flex-wrap items-center ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Label className="font-semibold">Mail ID</Label>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-[#CCCCCC] border   h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
                      placeholder="Mail ID"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Label className="font-semibold">Phone Number</Label>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-[#CCCCCC] border   h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
                      placeholder="Phone Number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-5 gap-4 grid lg:grid-cols-3  items-center ">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Label className="font-semibold">Country/Region</Label>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-[#CCCCCC] border   h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
                      placeholder="Country/Region"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Label className="font-semibold">Address</Label>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-[#CCCCCC] border  h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
                      placeholder="Country/Region"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pinCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Label className="font-semibold">Pin Code</Label>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-[#CCCCCC] border   h-[43px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
                      placeholder="Pin Code"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="mt-10 w-[194px] h-[43px] bg-[#D30200] rounded text-white font-bold"
          >
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default MyProfile;
