import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { popupTypes } from "../popupTypes";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TOGGLE } from "@/store/slices/popupSlice";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { DialogTitle } from "@radix-ui/react-dialog";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { clearCart } from "@/store/slices/cartSlice";
import allPagesRoutes from "@/constants/allPagesRoutes";

const PaypalPopup = () => {
  const router = useRouter();
  const isPopupOpen = useSelector((state: RootState) => state.popups.ISOPEN);
  const dispatch = useDispatch();

  const createOrder = async () => {
    dispatch(TOGGLE(popupTypes?.CLOSE));
    const res = await fetch(
      "http://192.168.29.211:5000/api/cart/checkout-paypal",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    return data.id; // Return the order ID
  };

  const onApprove = async (data: any) => {
    const res = await fetch(
      "http://192.168.29.211:5000/api/cart/checkout-paypal-capture",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderID: data.orderID }),
      }
    );
    const result = await res.json();
    if (result?.success) {
      toast.success(result.message);
      dispatch(clearCart());
      router.push(allPagesRoutes.SUCCESSFULLY_PURCHASED);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Dialog
      open={isPopupOpen === popupTypes.PAYPAL}
      onOpenChange={(value) =>
        dispatch(
          TOGGLE(
            isPopupOpen === popupTypes.CLOSE
              ? popupTypes.PAYPAL
              : popupTypes.CLOSE
          )
        )
      }
    >
      <DialogContent className="bg-white ">
        <div>
          <DialogTitle>
            <h2 className="text-lg font-semibold">PayPal Checkout</h2>
          </DialogTitle>
          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
            }}
          >
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              style={{ layout: "vertical" }}
            />
          </PayPalScriptProvider>
          {/* <div dangerouslySetInnerHTML={{ __html: PAYPAL?.data }}></div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaypalPopup;
