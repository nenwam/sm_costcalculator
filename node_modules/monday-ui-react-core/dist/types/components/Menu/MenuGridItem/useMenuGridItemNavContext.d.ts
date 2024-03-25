import React from "react";
import { NavDirections } from "../../../hooks/useFullKeyboardListeners";
import { CloseMenuOption } from "../Menu/MenuConstants";
export declare const useMenuGridItemNavContext: ({ wrapperRef, setActiveItemIndex, getPreviousSelectableIndex, getNextSelectableIndex, activeItemIndex, isUnderSubMenu, closeMenu }: {
    wrapperRef?: (node: HTMLElement) => void;
    setActiveItemIndex?: (index: number) => void;
    getNextSelectableIndex?: (activeItemIndex: number) => number;
    getPreviousSelectableIndex?: (activeItemIndex: number) => number;
    activeItemIndex?: number;
    isUnderSubMenu?: boolean;
    closeMenu?: (option: CloseMenuOption) => void;
}) => {
    onOutboundNavigation: (elementRef: React.RefObject<HTMLElement>, direction: NavDirections) => void;
};
