"use client";
import React from "react";

const PrivacyPolicy = ({ pageData }: { pageData: any }) => {
  return (
    <div className="container">
      <h1 className="font-bold my-6 text-3xl">{pageData?.name}</h1>
      <div
        className="font-normal my-6"
        dangerouslySetInnerHTML={{ __html: pageData?.description }}
      />
    </div>
  );
};

export default PrivacyPolicy;
