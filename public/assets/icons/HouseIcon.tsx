import React from "react";

function HouseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <circle cx="32" cy="32" r="31.5" fill="#fff" stroke="#E0DEF7"></circle>
      <circle cx="32" cy="32" r="28" fill="#E8E6F9"></circle>
      <g
        stroke="#7065F0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        clipPath="url(#clip0_2007_1981)"
      >
        <path d="M21.63 32h-2.963L32 18.666 45.333 32H42.37M21.63 32v10.37a2.963 2.963 0 002.963 2.963h14.814a2.963 2.963 0 002.963-2.963V32"></path>
        <path d="M28 34l2.667 2.667L36 31.333"></path>
      </g>
      <defs>
        <clipPath id="clip0_2007_1981">
          <path
            fill="#fff"
            d="M0 0H32V32H0z"
            transform="translate(16 16)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default HouseIcon;
