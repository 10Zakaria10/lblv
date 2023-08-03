import { FC } from "react";
import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

interface ICustomTooltip extends TooltipProps{
    className?: string;
    children: JSX.Element;
}
const CustomTooltip: FC<ICustomTooltip> = ({ children ,className, ...props }) => {
    return <Tooltip {...props} classes={{ popper: className }} >
        {children}
    </Tooltip>;
}

export default CustomTooltip;