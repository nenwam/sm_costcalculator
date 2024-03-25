import { ButtonProps } from "../Button/Button";
import { MoveBy } from "../../types/MoveBy";
import { DialogPosition } from "../../constants/positions";
interface ButtonWrapperProps extends ButtonProps {
    tooltipContent?: string;
    /**
     * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
     */
    tooltipPosition?: DialogPosition;
    tooltipHideDelay?: number;
    tooltipShowDelay?: number;
    tooltipContainerSelector?: string;
    tooltipMoveBy?: MoveBy;
}
export declare const ButtonWrapper: ({ tooltipContent, tooltipPosition, tooltipHideDelay, tooltipShowDelay, tooltipContainerSelector, tooltipMoveBy, ...otherProps }: ButtonWrapperProps) => JSX.Element;
export {};
