import React from "react";

const TermsAndConditions = ({ pageData }: { pageData: any }) => {
  return (
    <div className="container py-6">
      <h1 className="font-bold text-3xl">{pageData?.name}</h1>
      <div
        className="font-normal my-6"
        dangerouslySetInnerHTML={{ __html: pageData?.description }}
      />
    </div>
  );
};

export default TermsAndConditions;
