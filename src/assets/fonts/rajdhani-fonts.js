import localFont from "next/font/local";

const rajdhani = localFont({
  src: [
    {
      path: "./Rajdhani-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Rajdhani-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Rajdhani-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Rajdhani-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Rajdhani-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default rajdhani;
