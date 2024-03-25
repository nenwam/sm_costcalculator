import React from "react";
declare const ICONS: {
    prev: React.FC<import("../../Icon/Icons/components/MoveArrowLeft").MoveArrowLeftProps>;
    next: React.FC<import("../../Icon/Icons/components/MoveArrowRight").MoveArrowRightProps>;
};
interface DateNavigationItemProps {
    kind: keyof typeof ICONS;
    onClick?: () => void;
}
declare const DateNavigationItem: ({ kind, onClick }: DateNavigationItemProps) => JSX.Element;
export default DateNavigationItem;
