export const GridKeyboardNavigationContext: React.Context<any>;
export function useGridKeyboardNavigationContext(positions: ({
    topElement: React.MutableRefObject<any>;
    bottomElement: React.MutableRefObject<any>;
} | {
    leftElement: React.MutableRefObject<any>;
    rightElement: React.MutableRefObject<any>;
})[], wrapperRef: any, { disabled }?: {
    disabled: boolean;
}): {
    onOutboundNavigation: (elementRef: any, direction: any) => void;
};
import React from "react";
