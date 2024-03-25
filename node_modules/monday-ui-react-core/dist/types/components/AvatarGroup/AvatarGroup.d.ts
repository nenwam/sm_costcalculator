import React, { ReactElement } from "react";
import { AvatarProps } from "../Avatar/Avatar";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarSize, AvatarType } from "../Avatar/AvatarConstants";
import { CounterColor } from "../Counter/CounterConstants";
import { TooltipProps } from "../Tooltip/Tooltip";
export declare type AvatarGroupCounterVisualProps = {
    color?: CounterColor.LIGHT | CounterColor.DARK;
    count?: number;
    prefix?: string;
    maxDigits?: number;
    ariaLabelItemsName?: string;
};
interface AvatarGroupProps extends VibeComponentProps {
    avatarClassName?: string;
    /**
     * Array of `Avatar` components
     */
    children?: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];
    size?: AvatarSize;
    type?: AvatarType;
    max?: number;
    /**
     * 4 `Counter.props` for customization + ariaLabelItemsName for specifying the "items" name in aria label
     */
    counterProps?: AvatarGroupCounterVisualProps;
    /**
     * `Tooltip.props`: props for custom counter tooltip
     */
    counterTooltipCustomProps?: TooltipProps;
    /**
     * Using counter default tooltip virtualized list for rendering only visible items (performance optimization)
     */
    counterTooltipIsVirtualizedList?: boolean;
}
declare const AvatarGroup: React.FC<AvatarGroupProps>;
export default AvatarGroup;
