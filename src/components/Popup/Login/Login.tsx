import React, { useState } from "react";
import login from "@/assets/images/svg/login.svg";
import Image from "next/image";
import logo from "../../../assets/images/png/logo.png";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import SignUpPopup from "../Signup/Signup";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAction } from "@/serverActions/authActions";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import clsx from "clsx";
import { TOGGLE } from "@/store/slices/popupSlice";
import { popupTypes } from "../popupTypes";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }).min(8, {
    message: "Password must be at least 8 characters",
  }),
});
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isPopupOpen = useSelector((state: RootState) => state.popups.ISOPEN);
  const dispatch = useDispatch();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const response: any = await loginAction(data);
    router.push("/user/my-profile");
    if (response?.data?.success) {
      dispatch(TOGGLE(popupTypes?.CLOSE));
    }
  };
  return (
    <Dialog
      open={isPopupOpen === popupTypes.LOGIN}
      onOpenChange={(value) =>
        dispatch(
          TOGGLE(
            isPopupOpen === popupTypes.CLOSE
              ? popupTypes.LOGIN
              : popupTypes.CLOSE
          )
        )
      }
    >
      <DialogTrigger>
        <span className="font-semibold text-xs">Signin</span>
      </DialogTrigger>
      <DialogContent className="border-0">
        <DialogTitle>Login</DialogTitle>
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
          <div className="bg-white lg:p-4 rounded shadow-md relative lg:w-[750px] h-auto">
            <DialogClose
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 curser-pointer"
              asChild
            >
              <button>✕</button>
            </DialogClose>

            <div className="flex justify-between flex-col lg:flex-row ">
              <div className="flex flex-col gap-3 w-[350px] p-5">
                <Image src={logo} alt="Logo" className="w-[100px]" />

                <div className="text-left">
                  <span className="font-semibold">Login</span>
                  <br />
                  <span className="text-black">
                    Login to access your Zylax account
                  </span>
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="text-left">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="font-semibold">Email</Label>

                            <FormControl>
                              <Input
                                {...field}
                                className="border-[#CCCCCC] border w-full  h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2 "
                                placeholder="Email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="text-left">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="font-semibold">Password</Label>
                            <div className="relative">
                              <Input
                                {...field}
                                className="border-[#CCCCCC] border w-full h-[30px] rounded outline-none focus:border-[#CCCCCC] pl-2"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                              />
                              {showPassword ? (
                                <EyeOff
                                  onClick={() => setShowPassword(!showPassword)}
                                  size={15}
                                  className="absolute right-2 top-2 cursor-pointer"
                                />
                              ) : (
                                <Eye
                                  size={15}
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-2 top-2 cursor-pointer"
                                />
                              )}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=" flex justify-between pt-3 w-full">
                      <div className="flex gap-2 ">
                        <input type="checkbox" />
                        <span>Remember me</span>
                      </div>
                      <div>
                        <span className="text-[#FF8682]">Forgot Password</span>
                        {/* <ForgetPassword  /> */}
                      </div>
                    </div>
                    <div className=" mt-3">
                      <button className="text-white bg-[#D30200] w-full h-[30px] rounded font-semibold">
                        LOGIN
                      </button>
                    </div>
                  </form>
                </Form>
                <div className="text-center w-full">
                  Don’t have an account?{" "}
                  <span
                    className="text-[#FF8682] font-semibold cursor-pointer"
                    onClick={() => dispatch(TOGGLE(popupTypes?.REGISTER))}
                  >
                    Sign up
                  </span>
                  {/* <SignUpPopup
                    isOpen={isSignUpOpen}
                    onClose={closeSignUpPopup}
                  /> */}
                </div>
              </div>

              <div className=" w-[350px] hidden lg:block">
                <Image src={login} alt="Login" className="" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
