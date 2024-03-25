import React from "react";
import { ClickableProps } from "../../components/Clickable/Clickable";
/**
 * Return props for adding clickable functionality to the element except for the styles and classNames
 */
export default function useClickableProps({ onClick, onMouseDown, onMouseEnter, onMouseLeave, disabled, id, dataTestId, role, tabIndex, ariaLabel, ariaHidden, ariaHasPopup, ariaExpanded }: ClickableProps, ref: React.ForwardedRef<HTMLElement>): {
    ref: (node: HTMLElement) => void;
    id: string;
    "data-testid": string;
    onClick: (event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>) => void;
    onKeyDown: (e: React.KeyboardEvent<Element>) => void;
    onMouseDown: (event: React.MouseEvent<Element, MouseEvent>) => void;
    onMouseEnter: (event: React.MouseEvent<Element, MouseEvent>) => void;
    onMouseLeave: (event: React.MouseEvent<Element, MouseEvent>) => void;
    tabIndex: number;
    role: React.AriaRole;
    "aria-label": string;
    "aria-hidden": boolean;
    "aria-haspopup": boolean;
    "aria-expanded": boolean;
};
