import React, { ReactElement } from "react";
import { AvatarProps } from "../Avatar/Avatar";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarSize, AvatarType } from "../Avatar/AvatarConstants";
import { AvatarGroupCounterVisualProps } from "./AvatarGroup";
import { TooltipProps } from "../Tooltip/Tooltip";
interface AvatarGroupCounterProps extends VibeComponentProps {
    /**
     * Array of Avatar elements
     */
    counterTooltipAvatars?: ReactElement<AvatarProps>[];
    /**
     * AvatarGroupCounterVisualProps: props for counter
     */
    counterProps?: AvatarGroupCounterVisualProps;
    counterTooltipCustomProps?: TooltipProps;
    counterTooltipIsVirtualizedList?: boolean;
    size?: AvatarSize;
    type?: AvatarType;
}
declare const AvatarGroupCounter: React.FC<AvatarGroupCounterProps>;
export default AvatarGroupCounter;
