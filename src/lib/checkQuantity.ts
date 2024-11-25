function checkQuantity(cartItems: any[], productDetails: any) {
  if (cartItems?.find((item: any) => item?.id === productDetails?.id)) {
    return cartItems?.find((item) => item?.id === productDetails?.id)?.quantity;
  } else return 0;
}

export default checkQuantity;
