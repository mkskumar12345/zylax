import {
  pngKlarna,
  pngPaypal,
  pngRupay,
  pngStripe,
  pngVisa,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="bg-[#151515]">
      <div className="md:container p-3 md:px-0">
        <div className="flex gap-3 lg:flex-nowrap flex-wrap justify-between md:h-[93px] items-center">
          <div className="text-sm flex gap-2 text-white font-regular">
            © 2024 <h4 className="font-bold">Zylax</h4> . All Rights Reserved
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <Image src={pngPaypal} alt="paypal" />
            <Image src={pngRupay} alt="paypal" />
            <Image src={pngVisa} alt="paypal" />
            <Image src={pngStripe} alt="paypal" />
            <Image src={pngKlarna} alt="paypal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
