import { IconProps } from "@/types";
const IconMenu = ({ className }: IconProps) => {
  return (
    <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <line y1="0.5" x2="32" y2="0.5" stroke="white" />
      <line y1="7.5" x2="32" y2="7.5" stroke="white" />
      <line y1="14.5" x2="32" y2="14.5" stroke="white" />
    </svg>
  );
};

export default IconMenu;
