import { LegacyRef, MutableRefObject } from "react";
export default function useMergeRefs<T = any>({ refs }: {
    refs: Array<MutableRefObject<T> | LegacyRef<T>>;
}): (node: HTMLElement) => void;
