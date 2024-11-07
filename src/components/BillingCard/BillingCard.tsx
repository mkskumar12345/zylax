import Image from "next/image";
import React from "react";
import cod from "../../assets/images/svg/cod.svg";
import venmo from "../../assets/images/svg/venmo.svg";
import paypal from "../../assets/images/svg/paypal.svg";
import amazonpay from "../../assets/images/svg/amazonpay.svg";
import card from "../../assets/images/svg/CreditCard.svg";
import { ArrowRight } from "lucide-react";
import ordersumm from "../../assets/images/svg/ordersummary.svg";

const BillingCard = () => {
  return (
    <div className="mt-5 mb-20">
      <div className="lg:flex lg:justify-center gap-5 w-[100%]">
        <div className="w-[900px]">
          <span className="font-semibold text-xl"> Billing Information</span>

          <div className="flex flex-col gap-2 mt-5">
            <div className="lg:flex lg:justify-between  gap-2 ">
              <div>
                <label className="font-semibold">First Name</label>
                <br />
                <input
                  placeholder="First Name"
                  className="border-[#CCCCCC] border rounded lg:w-[210px] sm:w-full h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                />
              </div>
              <div>
                <label className="font-semibold">Last Name</label>
                <br />
                <input
                  placeholder="Last Name"
                  className="border-[#CCCCCC] border rounded w-[210px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                />
              </div>
              <div>
                <label className="font-semibold">
                  Company Name{" "}
                  <span className="text-[#929FA5]">(Optional)</span>
                </label>
                <br />
                <input className="border-[#CCCCCC] border rounded w-[440px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]" />
              </div>
            </div>

            <div>
              <label className="font-semibold">Address</label>
              <br />
              <input className="border-[#CCCCCC] border rounded w-full h-[44px] pl-2 outline-none focus:border-[#CCCCCC]" />
            </div>
            <div className="flex gap-5">
              <div className="flex gap-5">
                <div>
                  <label className="font-semibold">Country</label>
                  <br />
                  <select className="border-[#CCCCCC] border rounded w-[210px] h-[44px] outline-none focus:border-[#CCCCCC]">
                    <option>india</option>
                    <option>usa</option>
                    <option>china</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold">Region/State</label>
                  <br />
                  <select className="border-[#CCCCCC] border rounded w-[210px] h-[44px] outline-none focus:border-[#CCCCCC]">
                    <option>india</option>
                    <option>usa</option>
                    <option>china</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  <label className="font-semibold">City</label>
                  <br />
                  <select className="border-[#CCCCCC] border rounded w-[210px] h-[44px] outline-none focus:border-[#CCCCCC]">
                    <option>india</option>
                    <option>usa</option>
                    <option>china</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold">Zipcode</label>
                  <br />
                  <input className="border-[#CCCCCC] border rounded w-[210px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]" />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <label className="font-semibold">Email</label>
                <br />
                <input
                  placeholder="Email"
                  className="border-[#CCCCCC] border rounded w-[440px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                />
              </div>
              <div>
                <label className="font-semibold">Phone Number</label>
                <br />
                <input
                  placeholder="Phone Number"
                  className="border-[#CCCCCC] border rounded w-[440px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Ship into different address</span>
            </div>
          </div>

          <div className="mt-2 border-[#CCCCCC] border">
            <div className="font-semibold text-xl border-b border-[#cccccc] h-[50px] flex justify-start items-center">
              Payment Option
            </div>
            <div className="flex flex-col gap-2 pb-4">
              <div className="flex p-5 border-b border-[#cccccc]">
                <div className="w-[170px] h-[96px] flex flex-col gap-2 items-center border-r border-[#CCCCCC]">
                  <Image src={cod} alt="cod" />
                  <span>Cash on Delivery</span>

                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    className=""
                  />
                </div>
                <div className="w-[170px] h-[96px] flex flex-col gap-2 items-center border-r border-[#CCCCCC]">
                  <Image src={venmo} alt="venmo" />
                  <span>Venmo</span>

                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    className=""
                  />
                </div>
                <div className="w-[170px] h-[96px] flex flex-col gap-2 items-center border-r border-[#CCCCCC]">
                  <Image src={paypal} alt="paypal" />
                  <span>Paypal</span>

                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    className=""
                  />
                </div>
                <div className="w-[170px] h-[96px] flex flex-col gap-2 items-center border-r border-[#CCCCCC]">
                  <Image src={amazonpay} alt="amazonpay" />
                  <span>Amazon Pay</span>

                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    className=""
                  />
                </div>
                <div className="w-[170px] h-[96px] flex flex-col gap-2 items-center ">
                  <Image src={card} alt="card" />
                  <span>Debit/Credit Card</span>

                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    className=""
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold">Name on Card</label>
                <br />
                <input className="border-[#CCCCCC] border rounded w-full h-[44px] pl-2 outline-none focus:border-[#CCCCCC]" />
              </div>
              <div>
                <label className="font-semibold">Card Number</label>
                <br />
                <input className="border-[#CCCCCC] border rounded w-full h-[44px] pl-2 outline-none focus:border-[#CCCCCC]" />
              </div>
              <div className="flex justify-between">
                <div>
                  <label className="font-semibold">Expire Date</label>
                  <br />
                  <input
                    placeholder="DD/YY"
                    className="border-[#CCCCCC] border rounded w-[440px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                  />
                </div>
                <div>
                  <label className="font-semibold">CVC</label>
                  <br />
                  <input
                    placeholder="CVC"
                    className="border-[#CCCCCC] border rounded w-[440px] h-[44px] pl-2 outline-none focus:border-[#CCCCCC]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="font-semibold text-xl mt-5">
            Additional Information
          </div>
          <div className="mt-5">
            <label className="font-semibold">
              Order Notes
              <span className="text-[#929FA5]">(Optional)</span>
            </label>
            <br />
            <textarea
              className="border-[#CCCCCC] border rounded w-full h-[124px] pl-2 outline-none focus:border-[#CCCCCC]"
              placeholder="Notes about your order, e.g. special notes for delivery"
            />
          </div>
        </div>
        <div className="left w-[400px] h-[500px]  ">
          <div className="border-[#E4E7E9] border p-5 flex flex-col gap-2 rounded">
            <span className="text-xl font-semibold">Order Summery</span>
            <div className="flex items-center gap-2">
              <Image src={ordersumm} alt="" className="w-[64px] h-[64px]" />
              <div>
                <div>Canon EOS 1500D DSLR Camera Body+ ...</div>

                <div>
                  1 x <span className="text-[#EB4227] font-semibold">$70</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image src={ordersumm} alt="" className="w-[64px] h-[64px]" />
              <div>
                <div>Canon EOS 1500D DSLR Camera Body+ ...</div>

                <div>
                  3 x <span className="text-[#EB4227] font-semibold">$270</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Sub-total</span>
              <span className="text-black font-semibold">$320</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Shipping</span>
              <span className="text-black font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Discount</span>
              <span className="text-black font-semibold">$32</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Tax</span>
              <span className="text-black font-semibold">$32.00</span>
            </div>
            <hr />

            <div className="flex justify-between">
              <span className="text-[#5F6C72]">Total</span>
              <span className="font-semibold text-[20px]">$3223 USD</span>
            </div>

            <button className="bg-[#EB4227] text-white font-bold  h-[56px] flex justify-center items-center gap-2 rounded uppercase">
              Place order
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingCard;
