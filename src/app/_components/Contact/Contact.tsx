import { svgIconBannerHome } from "@/assets/images";
import CommonBanner from "@/components/Common/CommonBanner";
import Banner from "@/components/Contact/Banner/Banner";
import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import MapAddress from "@/components/Contact/MapAddress/MapAddress";
import React from "react";

const ContactComponent = () => {
  return (
    <>
      <CommonBanner
        icon={svgIconBannerHome}
        path={[{ title: "Contact Us", href: "/contact" }]}
      />
      <ContactForm />
      <MapAddress />
    </>
  );
};

export default ContactComponent;
