import { IconProps } from "@/types/icon";

export const MenuIcon = ({
  size = 24,
  width,
  height,
  stroke = "currentColor",
  strokeWidth = 1,
  fill = "none",
  className,
  ...props
}: IconProps) => {
  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width={width ?? size}
  height={height ?? size}
  viewBox="0 0 24 24"
  fill={fill}
  className={className}
  {...props}
>
  <line
    x1="3"
    y1="5"
    x2="21"
    y2="5"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
  />

  <line
    x1="3"
    y1="12"
    x2="21"
    y2="12"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
  />

  <line
    x1="3"
    y1="19"
    x2="21"
    y2="19"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
  />
</svg>
  );
};