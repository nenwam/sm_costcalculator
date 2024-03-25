import { RefObject } from "react";
export default function useIsOverflowing({ ref, ignoreHeightOverflow }: {
    ref: RefObject<HTMLElement>;
    ignoreHeightOverflow?: boolean;
}): boolean;
