import { SIZES } from "../../constants/sizes";
export declare enum CounterType {
    FILL = "fill",
    LINE = "line"
}
export declare enum CounterColor {
    PRIMARY = "primary",
    DARK = "dark",
    NEGATIVE = "negative",
    LIGHT = "light"
}
export declare enum CounterSize {
    SMALL = "small",
    LARGE = "large"
}
declare const OLD_COUNTER_SIZES: {
    readonly sm: "small";
    readonly md: "medium";
    readonly lg: "large";
};
declare type Size = keyof typeof OLD_COUNTER_SIZES | typeof SIZES[keyof typeof SIZES];
export declare const getActualSize: (size: Size) => any;
export {};
