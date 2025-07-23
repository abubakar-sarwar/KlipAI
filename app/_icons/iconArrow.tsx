import { IconProps } from "@/types";
const IconArrow = ({ className }: IconProps) => {
  return (
    <svg
      width="31"
      height="10"
      viewBox="0 0 31 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_902)">
        <g clipPath="url(#clip1_1_902)">
          <path
            d="M1.22998 5.00085H10.123"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.67596 0.554144L10.122 5.00014L5.67596 9.44714"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_902">
          <rect width="30" height="10" fill="white" transform="translate(0.72998)" />
        </clipPath>
        <clipPath id="clip1_1_902">
          <rect width="9.893" height="10.307" fill="white" transform="translate(0.72998 -0.153442)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrow;
