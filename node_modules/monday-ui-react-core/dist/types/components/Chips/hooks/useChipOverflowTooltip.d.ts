import { TooltipProps } from "../../Tooltip/Tooltip";
declare type HookResult = {
    wrapperProps: {
        tabIndex?: number;
        className?: string;
    };
    tooltipProps: Partial<TooltipProps> & {
        content: string;
    };
};
export default function useChipOverflowTooltip({ isOverflowing, wrapperClassName, clickableClassName, label }: {
    isOverflowing: boolean;
    wrapperClassName: string;
    clickableClassName: string;
    label: string;
}): HookResult;
export {};
