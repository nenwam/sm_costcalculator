import React, { ReactElement, RefObject } from "react";
import { AvatarProps } from "../Avatar/Avatar";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarType } from "../Avatar/AvatarConstants";
interface AvatarGroupCounterTooltipContainerProps extends VibeComponentProps {
    className?: string;
    type?: AvatarType;
    /**
     * Counter element & focus placeholders
     */
    children?: ReactElement[];
    /**
     * Array of Avatar elements
     */
    avatars?: ReactElement<AvatarProps>[];
    counterTooltipCustomProps?: any;
    counterTooltipIsVirtualizedList?: boolean;
    focusPrevPlaceholderRef?: RefObject<HTMLDivElement>;
    focusNextPlaceholderRef?: RefObject<HTMLDivElement>;
    counterContainerRef?: RefObject<HTMLDivElement>;
}
declare const AvatarGroupCounterTooltipContainer: React.FC<AvatarGroupCounterTooltipContainerProps>;
export default AvatarGroupCounterTooltipContainer;
