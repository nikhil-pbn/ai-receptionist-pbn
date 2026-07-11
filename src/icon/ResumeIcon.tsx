import { IconProps } from "@/types/icon";

export const ResumeIcon = ({
    size = 24,
    width,
    height,
    stroke = "white",
    strokeWidth = 1.09518,
    fill = "none",
    className,
    ...props
}: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={width ?? size}
            height={height ?? size}
            viewBox="0 0 14 14"
            fill={fill}
            className={className}
            {...props}>
            <path d="M3.28516 1.64279L10.9514 6.57108L3.28516 11.4994V1.64279Z" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};