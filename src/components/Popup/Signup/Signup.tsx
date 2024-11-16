import React from "react";
import signup from "@/assets/images/svg/signup.svg";
import Image from "next/image";
import logo from "../../../assets/images/png/logo.png";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { TOGGLE } from "@/store/slices/popupSlice";
import { popupTypes } from "../popupTypes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { registerAction } from "@/serverActions/authActions";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import toast from "react-hot-toast";

const signupSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z.string().min(1, { message: "Password is required" }).min(8, {
      message: "Password must be at least 8 characters",
    }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, {
        message: "Password must be at least 8 characters",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords should match with confirm password.",
    path: ["confirmPassword"],
  });
const Signup = () => {
  const isPopupOpen = useSelector((state: RootState) => state.popups.ISOPEN);
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      confirmPassword: "",
      agreement: "",
    },
  });

  const onSubmit = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    confirmPassword: string;
  }) => {
    const payload = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      phone: data.phone,
      password: data.password,
      company: "test",
    };
    const response = await registerAction(payload);
    if (response?.data?.success) {
      dispatch(TOGGLE(popupTypes?.LOGIN));
    }
  };

  return (
    <Dialog
      open={isPopupOpen === popupTypes.REGISTER}
      onOpenChange={(value) =>
        dispatch(
          TOGGLE(
            isPopupOpen === popupTypes?.CLOSE
              ? popupTypes.REGISTER
              : popupTypes?.CLOSE
          )
        )
      }
    >
      <DialogTrigger>
        <span className="font-semibold text-xs">Register</span>
      </DialogTrigger>
      <DialogContent className="border-0">
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
          <div className="bg-white lg:p-4  rounded shadow-md relative lg:w-[850px] w-[350px] h-[600]">
            <DialogClose
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 curser-pointer"
              asChild
            >
              <Button variant="ghost">✕</Button>
            </DialogClose>

            <div className="flex justify-between items-center flex-col lg:flex-row ">
              <div className="flex flex-col justify-center gap-3 lg:w-[450px] p-5">
                <Image src={logo} alt="Logo" className="w-[100px]" />

                <div className="text-left">
                  <span className="font-semibold">Sign up</span>
                  <br />
                  <span className="text-[#313131] text-[10px]">
                    Let’s get you all st up so you can access your personal
                    account.
                  </span>
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex lg:justify-between lg:flex-row flex-col gap-2">
                      <div className="text-left mb-1">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold">
                                First Name
                              </Label>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="First Name"
                                  className="border-[#CCCCCC] border lg:w-[200px] w-[300px]   h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="text-left mb-1">
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold">Last Name</Label>
                              <Input
                                {...field}
                                placeholder="First Name"
                                className="border-[#CCCCCC] border lg:w-[200px] w-[300px]   h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex lg:justify-between lg:flex-row flex-col gap-2">
                      <div className="text-left">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold">Email</Label>
                              <Input
                                {...field}
                                placeholder="Email"
                                className="border-[#CCCCCC] border lg:w-[200px] w-[300px] h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="text-left">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <Label className="font-semibold">
                                Phone Number
                              </Label>
                              <Input
                                {...field}
                                placeholder="Phone Number"
                                className="border-[#CCCCCC] border lg:w-[200px] w-[300px] h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="text-left mt-1">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="font-semibold">Password</Label>
                            <Input
                              {...field}
                              type="password"
                              placeholder="Password"
                              className="border-[#CCCCCC] border lg:w-full w-[300px]  h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="text-left mt-1">
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="font-semibold">
                              Confirm Password
                            </Label>
                            <Input
                              {...field}
                              type="password"
                              placeholder="Confirm Password"
                              className="border-[#CCCCCC] border lg:w-full w-[300px]  h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=" w-full my-3 text-left">
                      <FormField
                        control={form.control}
                        name="agreement"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center gap-2">
                              <Checkbox {...field} className="size-4" />
                              <p>
                                I agree to all the{" "}
                                <span className="text-[#FF8682]">Terms </span>
                                and{" "}
                                <span className="text-[#FF8682]">
                                  Privacy Policies
                                </span>{" "}
                              </p>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="">
                      <Button
                        type="submit"
                        className="text-white bg-[#D30200] lg:w-full w-[300px] h-[30px] rounded font-semibold"
                      >
                        Create account
                      </Button>
                    </div>
                  </form>
                </Form>
                <div className="text-left w-full">
                  Already have an account?
                  <span
                    className="text-[rgb(255,134,130)] ml-2 font-semibold cursor-pointer"
                    onClick={() => dispatch(TOGGLE(popupTypes?.LOGIN))}
                  >
                    Login
                  </span>
                </div>
              </div>

              <div className=" w-[350px] hidden lg:block">
                <Image src={signup} alt="signup" className="" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
