import React from "react";

const ServicePage = ({ pageData }: { pageData: any }) => {
  if (!pageData?.description) {
    return;
  }
  return (
    <div className="">
      <h1 className="font-bold text-3xl">{pageData?.name}</h1>
      <div
        className="font-normal my-6"
        dangerouslySetInnerHTML={{ __html: pageData?.description }}
      />
    </div>
  );
};

export default ServicePage;
