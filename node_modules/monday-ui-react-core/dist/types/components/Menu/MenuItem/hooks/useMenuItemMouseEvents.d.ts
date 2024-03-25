import React from "react";
export default function useMenuItemMouseEvents({ ref, resetOpenSubMenuIndex, setSubMenuIsOpenByIndex, isActive, setActiveItemIndex, index, hasChildren }: {
    ref: React.RefObject<HTMLElement>;
    resetOpenSubMenuIndex: () => void;
    setSubMenuIsOpenByIndex: (index: number, isOpen: boolean) => void;
    isActive: boolean;
    setActiveItemIndex: (index: number) => void;
    index: number;
    hasChildren: boolean;
}): boolean;
