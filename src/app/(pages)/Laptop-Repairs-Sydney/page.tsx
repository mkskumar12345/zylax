import LaptopRepairsSydney from "@/components/LaptopRepairsSydney/LaptopRepairsSydney";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(
    allApiRoutes?.LaptopRepairsSydney.Laptop_Repairs_Sydney
  );
  return (
    <div>
      <LaptopRepairsSydney pageData={response?.data} />
    </div>
  );
};

export default page;
