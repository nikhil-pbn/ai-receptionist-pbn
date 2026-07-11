import { IconProps } from "@/types/icon";

export const TickIcon = ({
    size = 24,
    width,
    height,
    fill = "none",
    className,
    ...props
}: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={width ?? size}
            height={height ?? size}
            viewBox="0 0 15 15"
            fill={fill}
            className={className}
            {...props}>
            <path d="M11.731 3.52026L5.27726 9.97398L2.34375 7.04047" stroke="#84EBD1" strokeWidth="1.1734" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};