import React from "react";
import CommonBanner from "../Common/CommonBanner";
import { svgHome2, svgIconBannerHome, svgSuccessRignt } from "@/assets/images";
import allPagesRoutes from "@/constants/allPagesRoutes";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SuccessfullyPurchased = () => {
  const orderNumber = "ZYLAX646673";
  const bankDetails = {
    bsb: "082282",
    accountNumber: "529150551",
  };
  return (
    <>
      <CommonBanner
        icon={svgIconBannerHome}
        path={[
          { title: "Billing", href: allPagesRoutes.BILLING_CARD },
          { title: "Order Successfully", href: allPagesRoutes.BILLING_CARD },
        ]}
      />
      <div className="my-5  container">
        <div className="flex justify-center rounded-[6px] py-5">
          <div className="flex items-center flex-col w-full max-w-2xl">
            {/* Header */}
            <h1 className="font-semibold animate-bounce text-2xl text-[#7af24e] text-center mb-5">
              Thank You for Your Order!
            </h1>

            {/* Content Card */}
            <div className="w-full bg-white shadow-sm rounded-md p-4 md:p-6">
              <p className="text-gray-600 text-center mb-6">
                Thank you for your order from <strong>Zylax Computers</strong>.
                Once your package ships or is ready for pickup, we will send you
                an email or a message.
              </p>

              {/* Order Details */}
              <div className="space-y-4">
                <p className="text-gray-600 text-center md:text-left">
                  You can check the status of your order by logging into your
                  account.
                </p>
                <p className="text-gray-600 text-center md:text-left">
                  If you have questions about your order, please call us at:{" "}
                  <a
                    href="tel:1300099529"
                    className="text-blue-500 hover:underline"
                  >
                    1300 099529
                  </a>
                </p>
                <p className="text-gray-600 text-center md:text-left">
                  Your order <strong>#</strong> is:{" "}
                  <span className="text-blue-600 font-medium">
                    {orderNumber}
                  </span>
                </p>
                <p className="text-gray-600 text-center md:text-left">
                  We'll email you an order confirmation with details and
                  tracking info.
                </p>
              </div>

              <hr className="my-6 border-gray-300" />

              {/* Company Information */}
              <div className="text-gray-800">
                <h2 className="text-lg font-semibold text-[#d30200] mb-2 text-center md:text-left">
                  Zylax Computers
                </h2>
                <p className="mb-1 text-center md:text-left">
                  Address: 13/4A Foundry Road, Seven Hills NSW 2147, Australia
                </p>
                <p className="mb-1 text-center md:text-left">
                  Phone:{" "}
                  <a
                    href="tel:1300099529"
                    className="text-blue-500 hover:underline"
                  >
                    1300 099529
                  </a>
                </p>
                <p className="mb-1 text-center md:text-left">
                  ABN Number: 50 095 556 586
                </p>
                <p className="text-center md:text-left">
                  Email:{" "}
                  <a
                    href="mailto:sales@zylax.com.au"
                    className="text-blue-500 hover:underline"
                  >
                    sales@zylax.com.au
                  </a>
                </p>
              </div>

              <hr className="my-6 border-gray-300" />

              {/* Bank Transfer Information */}
              <div className="text-gray-800">
                <h2 className="text-lg text-[#d30200] font-semibold mb-2 text-center md:text-left">
                  Bank Transfer Information
                </h2>
                <p className="mb-1 text-center md:text-left">
                  If you have chosen bank transfer, please use the following
                  banking details and send us the remittance invoice.
                </p>
                <p className="mb-1 text-center md:text-left">
                  <strong>BSB:</strong> {bankDetails.bsb}
                </p>
                <p className="mb-1 text-center md:text-left">
                  <strong>Account Number:</strong> {bankDetails.accountNumber}
                </p>
                <p className="mb-1 text-center md:text-left">
                  Please use your order number (
                  <span className="text-blue-600 font-medium">
                    {orderNumber}
                  </span>
                  ) as the reference in your transfer details.
                </p>
                <p className="text-center md:text-left">Thank you!</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-5 w-full">
              <Link
                href={allPagesRoutes.HOME}
                className="uppercase border-2 flex items-center justify-center gap-3 hover:bg-transparent hover:text-[#EB4227] font-bold border-[#FFE7D6] text-[#EB4227] w-40 h-12"
              >
                <Image src={svgHome2} alt="home" className="mr-2" />
                Go to Home
              </Link>
              <Link
                href={allPagesRoutes.MY_ORDERS}
                className="uppercase border-2 flex items-center justify-center gap-3 bg-[#EB4227] font-bold text-white w-40 h-12"
              >
                <span>View Order</span> <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessfullyPurchased;
