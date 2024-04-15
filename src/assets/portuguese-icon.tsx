import { SVGProps } from "react";

export function PortugueseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.34em"
      height="1em"
      viewBox="0 0 32 24"
      {...props}
    >
      <defs>
        <path id="flagpackBr0" fill="#fff" d="M0 0h32v24H0z"></path>
      </defs>
      <g fill="none">
        <g clipPath="url(#flagpackBr4)">
          <use href="#flagpackBr0"></use>
          <path
            fill="#093"
            fillRule="evenodd"
            d="M0 0v24h32V0z"
            clipRule="evenodd"
          ></path>
          <mask
            id="flagpackBr1"
            width="32"
            height="24"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "alpha",
            }}
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 0v24h32V0z"
              clipRule="evenodd"
            ></path>
          </mask>
          <g mask="url(#flagpackBr1)">
            <g fillRule="evenodd" clipRule="evenodd" filter="url(#flagpackBr5)">
              <path
                fill="#FFD221"
                d="m15.927 3.704l12.202 8.504L15.76 20.17L3.809 12.043z"
              ></path>
              <path
                fill="url(#flagpackBr3)"
                d="m15.927 3.704l12.202 8.504L15.76 20.17L3.809 12.043z"
              ></path>
            </g>
            <path
              fill="#2E42A5"
              fillRule="evenodd"
              d="M16 17.2a5 5 0 1 0 0-10a5 5 0 0 0 0 10"
              clipRule="evenodd"
            ></path>
            <mask
              id="flagpackBr2"
              width="10"
              height="11"
              x="11"
              y="7"
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "luminance",
              }}
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M16 17.2a5 5 0 1 0 0-10a5 5 0 0 0 0 10"
                clipRule="evenodd"
              ></path>
            </mask>
            <g mask="url(#flagpackBr2)">
              <path
                fill="#F7FCFF"
                fillRule="evenodd"
                d="m14.38 14.57l-.223.117l.042-.248l-.18-.176l.25-.037l.111-.226l.112.226l.25.037l-.181.176l.042.248zm2 0l-.223.117l.042-.248l-.18-.176l.25-.037l.111-.226l.112.226l.25.037l-.181.176l.042.248zm0 1.2l-.223.117l.042-.248l-.18-.176l.25-.037l.111-.226l.112.226l.25.037l-.181.176l.042.248zm-1-4.2l-.223.117l.042-.248l-.18-.176l.25-.037l.111-.226l.112.226l.25.037l-.181.176l.042.248zm0 2l-.223.117l.042-.248l-.18-.176l.25-.037l.111-.226l.112.226l.25.037l-.181.176l.042.248zm-1.4-1l-.223.117l.042-.248l-.18-.176l.25-.037l.111-.226l.112.226l.25.037l-.181.176l.042.248zm-1.4.8l-.223.117l.042-.248l-.18-.176l.25-.037l.111-.226l.112.226l.25.037l-.181.176l.042.248zm4.6-3.4l-.223.117l.042-.248l-.18-.176l.25-.037l.111-.226l.112.226l.25.037l-.181.176l.042.248z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#F7FCFF"
                d="m9.925 10.997l.15-1.994c4.798.362 8.585 1.94 11.313 4.745l-1.434 1.395c-2.364-2.433-5.692-3.819-10.03-4.146"
              ></path>
              <path
                fill="#093"
                d="m12.29 10.603l.05-.498c3.094.32 5.747 1.505 7.952 3.552l-.34.366c-2.125-1.971-4.677-3.11-7.663-3.42"
              ></path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="flagpackBr3"
            x1="32"
            x2="32"
            y1="24"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFC600"></stop>
            <stop offset="1" stopColor="#FFDE42"></stop>
          </linearGradient>
          <clipPath id="flagpackBr4">
            <use href="#flagpackBr0"></use>
          </clipPath>
          <filter
            id="flagpackBr5"
            width="24.32"
            height="16.467"
            x="3.809"
            y="3.704"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feColorMatrix values="0 0 0 0 0.0313726 0 0 0 0 0.368627 0 0 0 0 0 0 0 0 0.28 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_270_67334"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_270_67334"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </g>
    </svg>
  );
}
