import React from "react";
import NavTop from "./NavTop";
import NavMiddle from "./NavMiddle";
import NavBottom from "./NavBottom";
import { getToken } from "@/serverActions/cookies";

const Navbar = async () => {
  const token = await getToken();
  return (
    <div>
      <NavTop authToken={token?.authToken} />
      <NavMiddle authToken={token?.authToken}  />
      <NavBottom authToken={token?.authToken} />
    </div>
  );
};

export default Navbar;
