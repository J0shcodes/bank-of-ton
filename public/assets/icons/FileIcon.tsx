import React from "react";

function FileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <circle
        cx="32"
        cy="32"
        r="31"
        fill="#fff"
        stroke="#E0DEF7"
        strokeWidth="2"
      ></circle>
      <path
        stroke="#7065F0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M44 25.333v13.334c0 4-2 6.666-6.667 6.666H26.667C22 45.333 20 42.667 20 38.667V25.332c0-4 2-6.666 6.667-6.666h10.666C42 18.666 44 21.332 44 25.332z"
      ></path>
      <path
        stroke="#7065F0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M35.333 22v2.667c0 1.466 1.2 2.666 2.667 2.666h2.667M26.667 33.334H32M26.667 38.666h10.666"
      ></path>
    </svg>
  );
}

export default FileIcon;
