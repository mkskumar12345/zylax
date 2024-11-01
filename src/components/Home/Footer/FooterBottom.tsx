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
      <div className="container">
        <div className="flex justify-between h-[93px] items-center">
          <div className="text-sm flex gap-2 text-white font-regular">
            © 2024 <h4 className="font-bold">Zylax</h4> . All Rights Reserved
          </div>
          <div className="flex gap-4">
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
