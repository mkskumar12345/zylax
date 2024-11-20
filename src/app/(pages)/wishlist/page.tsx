import Wishlist from "@/components/Wishlist/Wishlist";
import { getFavoriteProductsActions } from "@/serverActions/wishlistActions";
export default async function wishlist() {
  const response = await getFavoriteProductsActions();
  return <Wishlist wishlist={response?.data} />;
}
