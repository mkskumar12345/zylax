import React from "react";

const LaptopRepairsSydney = ({ pageData }: { pageData: any }) => {
  // console.log(pageData);
  return (
    <div className=" flex flex-col gap-2">
      <div className="text-3xl font-semibold ">{pageData.name}</div> 
      <div dangerouslySetInnerHTML={{ __html: pageData?.description }}></div>
    </div>
  );
};
export default LaptopRepairsSydney;
