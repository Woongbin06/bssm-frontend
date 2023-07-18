import SVGAttribute from "@/types/SVGAttribute";
import React from "react";

const Emoji = ({ width, height, pointable }: SVGAttribute) => {
  return (
    <svg
      width={width ?? 16}
      height={height ?? 16}
      style={{
        cursor: pointable ? "pointer" : "",
      }}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_950_136)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 8C14.5 9.72391 13.8152 11.3772 12.5962 12.5962C11.3772 13.8152 9.72391 14.5 8 14.5C6.27609 14.5 4.62279 13.8152 3.40381 12.5962C2.18482 11.3772 1.5 9.72391 1.5 8C1.5 6.27609 2.18482 4.62279 3.40381 3.40381C4.62279 2.18482 6.27609 1.5 8 1.5C9.72391 1.5 11.3772 2.18482 12.5962 3.40381C13.8152 4.62279 14.5 6.27609 14.5 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM7 6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7C5.73478 7 5.48043 6.89464 5.29289 6.70711C5.10536 6.51957 5 6.26522 5 6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5C6.26522 5 6.51957 5.10536 6.70711 5.29289C6.89464 5.48043 7 5.73478 7 6ZM8 12C8.79565 12 9.55871 11.6839 10.1213 11.1213C10.6839 10.5587 11 9.79565 11 9H5C5 9.79565 5.31607 10.5587 5.87868 11.1213C6.44129 11.6839 7.20435 12 8 12ZM11 6C11 6.26522 10.8946 6.51957 10.7071 6.70711C10.5196 6.89464 10.2652 7 10 7C9.73478 7 9.48043 6.89464 9.29289 6.70711C9.10536 6.51957 9 6.26522 9 6C9 5.73478 9.10536 5.48043 9.29289 5.29289C9.48043 5.10536 9.73478 5 10 5C10.2652 5 10.5196 5.10536 10.7071 5.29289C10.8946 5.48043 11 5.73478 11 6Z"
          fill="#0087FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_950_136">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Emoji;
