import React from "react";
interface HeartProps {
  favorite?: boolean;
  [key: string]: any;
}

const Heart = ({ favorite = false, ...props }: HeartProps) => {
  const colorCode = favorite ? "#EB4227" : "#999999";
  return (
    <svg
      {...props}
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8141 1.47266C15.5367 2.94922 15.6188 5.57422 14.0875 7.16016L8.78281 12.6289C8.45469 12.9844 7.88047 12.9844 7.55234 12.6289L2.24766 7.16016C0.716406 5.57422 0.798438 2.94922 2.52109 1.47266C4.025 0.1875 6.26719 0.433594 7.63438 1.85547L8.18125 2.40234L8.70078 1.85547C10.0953 0.433594 12.3102 0.1875 13.8141 1.47266Z"
        fill={colorCode}
      />
    </svg>
  );
};

export default Heart;
