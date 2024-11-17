"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { count } from "console";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  pngContactForm,
  svgIconFacebook,
  svgIconInstagram,
  svgIconPinterest,
  svgIconTwitter,
  svgIconYoutube,
} from "@/assets/images";
import Image from "next/image";
import { z } from "zod";
import { contactActions } from "@/serverActions/contactUsActions";
const contactSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  newsletter: z.boolean().default(false).optional(),
  subject: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = async (values: any) => {
    const payload = {
      ...values,
    };
    await contactActions(payload);
  };

  return (
    <div className="relative">
      <div className="inset-0 bg-cover absolute h-[432px] bg-center bg-[url('/deal-of-day-bg.png')] bg-[#D30200]/90 bg-blend-darken"></div>

      <div className="sm:container p-3 relative z-10  pt-10 mt-2">
        <h1 className=" uppercase font-bold text-white text-3xl leading-6">
          Ready to work with us
        </h1>
        <p className="font-semibold text-[15px] leading-[27.2px] text-white">
          Contact us for all your questions and opinions
        </p>
        <div className="bg-white rounded-xl  border-[#DFDFDF] border my-2 gap-6 p-3 sm:p-6 grid grid-cols-12">
          <div className="lg:col-span-7 col-span-12 ">
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Form {...form}>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 ">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem className="mt-3">
                        <FormLabel className="required font-semibold text-sm">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="First Name"
                            className="border-[#CCCCCC] border rounded-[6px]"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem className="mt-3">
                        <FormLabel className=" required font-semibold text-sm">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Last Name"
                            className="border-[#CCCCCC] border rounded-[6px]"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mt-5">
                      <FormLabel className=" required font-semibold text-sm">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Email"
                          className="border-[#CCCCCC] border rounded-[6px]"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mt-5">
                      <FormLabel className="optional font-semibold text-sm">
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Phone"
                          className="border-[#CCCCCC] border rounded-[6px]"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mt-5">
                      <FormLabel className="optional font-semibold text-sm">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Subject"
                          className="border-[#CCCCCC] border rounded-[6px]"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mt-5">
                      <FormLabel className="font-semibold required text-sm">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Note about your order, e.g. special note for delivery "
                          className="border-[#CCCCCC] border rounded-[6px]"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="mt-4 flex items-center">
                      <Checkbox
                        id="newsletter"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FormLabel
                        htmlFor="newsletter"
                        className="text-sm font-semibold leading-none ml-2 !mt-0 "
                      >
                        I want to receive news and updates once in a while. By
                        submitting, I’m agreed to the{" "}
                        <span className="text-[#1ABA1A]">
                          Terms & Conditons
                        </span>
                      </FormLabel>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <Button
                  className="bg-[#D30200] text-white rounded-[8px] mt-7 font-semibold text-sm"
                  type="submit"
                >
                  Send Message
                </Button>
              </Form>
            </form>
          </div>
          <div className="lg:col-span-5 col-span-12   grid grid-flow-row grid-rows-2 gap-2 ">
            <div className="row-span-1 bg-[#EDEFF6] rounded-[8px] p-6">
              <div>
                <h4 className="uppercase text-sm font-medium text-[#666666] mb-2">
                  united states (head quater)
                </h4>
                <div className="flex flex-col gap-2 text-black">
                  <p>152 Thatcher Road St, Mahattan, 10463, US </p>
                  <span> (+025) 3886 25 16</span>
                  <span className="text-[#1ABA1A]">demo@gmail.com</span>
                </div>
              </div>
              <div className="mt-2">
                <h4 className="uppercase text-sm font-medium text-[#666666] mb-4">
                  united kingdom (branch)
                </h4>
                <div className="flex flex-col gap-2 text-black">
                  <p>12 Buckingham Rd, Thornthwaite, HG3 4TY, UK</p>
                  <span>(+718) 895-5350</span>
                  <span className="text-[#1ABA1A]">contact@demo.co.uk</span>
                </div>
              </div>
              <div className="flex sm:flex-nowrap flex-wrap gap-4 mt-4">
                <Image src={svgIconTwitter} alt="twitter" />
                <Image src={svgIconFacebook} alt="facebook" />
                <Image src={svgIconInstagram} alt="instagram" />
                <Image src={svgIconYoutube} alt="youtube" />
                <Image src={svgIconPinterest} alt="pinterest" />
              </div>
            </div>
            <div>
              <Image src={pngContactForm} alt="Contact Form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
