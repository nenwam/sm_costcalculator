import { CSSProperties, RefObject } from "react";
import { AvatarProps } from "../Avatar/Avatar";
import { AvatarType } from "../Avatar/AvatarConstants";
import { ElementContent } from "src/types/ElementContent";
export declare const TOOLTIP_SHOW_DELAY = 200;
export declare function useTooltipContentTabNavigation({ counterContainerRef, tooltipContentContainerRef, focusPrevPlaceholderRef, focusNextPlaceholderRef, isKeyboardTooltipVisible, setIsKeyboardTooltipVisible }: {
    counterContainerRef: RefObject<HTMLDivElement>;
    tooltipContentContainerRef: RefObject<HTMLElement>;
    focusPrevPlaceholderRef: RefObject<HTMLDivElement>;
    focusNextPlaceholderRef: RefObject<HTMLDivElement>;
    isKeyboardTooltipVisible: boolean;
    setIsKeyboardTooltipVisible: (value: boolean) => void;
}): void;
export declare const avatarRenderer: (item: {
    value: AvatarProps & {
        tooltipContent: ElementContent;
    };
}, index: number, style: CSSProperties, type: AvatarType, displayAsGrid: boolean) => JSX.Element;
