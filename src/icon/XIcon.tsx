import { IconProps } from "@/types/icon";

export const XIcon = ({
  size = 24,
  width,
  height,
  stroke = "currentColor",
  strokeWidth = 1.5,
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
        x1="5"
        y1="5"
        x2="19"
        y2="19"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      <line
        x1="19"
        y1="5"
        x2="5"
        y2="19"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};