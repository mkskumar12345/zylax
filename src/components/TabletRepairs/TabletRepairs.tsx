import React from "react";

const TabletRepairs = ({ pageData }: { pageData: any }) => {
  console.log(pageData);
  return (
    <div className="p-10 flex flex-col gap-2">
      <div className="text-3xl font-semibold ">{pageData.name}</div>
      <div className="text-xl font-semibold">{pageData.slug}</div>
      <div>{pageData.description}</div>
    </div>
  );
};

export default TabletRepairs;