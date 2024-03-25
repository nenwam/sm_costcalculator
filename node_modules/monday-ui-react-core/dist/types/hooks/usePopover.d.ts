import { Placement } from "./popoverConstants";
export default function usePopover(referenceElement: HTMLElement, popperElement: HTMLElement, { isOpen, placement }: {
    isOpen?: boolean;
    placement?: Placement;
}): {
    styles: {
        [key: string]: import("react").CSSProperties;
    };
    attributes: {
        [key: string]: {
            [key: string]: string;
        };
    };
};
