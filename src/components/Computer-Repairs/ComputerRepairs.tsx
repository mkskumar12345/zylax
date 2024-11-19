import React from "react";

const ComputeRepairs = ({ pageData }: { pageData: any }) => {
  // console.log("show the data",pageData);
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl font-semibold ">{pageData.name}</div>
      <div className="text-xl font-semibold">{pageData.slug}</div>
      <div dangerouslySetInnerHTML={{ __html: pageData?.description }}></div>
    </div>
  );
};

export default ComputeRepairs;
