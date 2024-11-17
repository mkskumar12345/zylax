const allApiRoutes = {
  products: {
    PRODUCTS: "/products",
    FAVORITE_PRODUCT: "/favorites",
  },
  brands: {
    BRAND_LIST: "/common/brands",
  },
  termsAndCondition: {
    TERMS_AND_CONDITION: "/common/pages/terms-and-conditions",
  },
  privacyPolicy: {
    PRIVACY_POLICY: "/common/pages/privacy-and-policy",
  },
  businessAndItSupport: {
    BUSINESS_AND_IT_SUPPORT: "/common/pages/business-it-support",
  },
  faqs: {
    FAQs: "/common/faqs",
  },
  login: {
    LOGIN: "/users/login",
  },
  register: {
    REGISTER: "/users/register",
  },
  profile: {
    PROFILE: "/users/profile",
  },
  contact: {
    CONTACT: "/common/contact-us",
  },
  cart: {
    GET_ALL_CART_ITEMS: "/carts",
    ADD_TO_CART: "/carts/add-to-cart",
    DELETE_CART_ITEM: "/carts",
  },
};

export default allApiRoutes;
