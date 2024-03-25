import { SIZES } from "../../constants/sizes";
export declare enum ButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary"
}
export declare enum ButtonColor {
    PRIMARY = "primary",
    POSITIVE = "positive",
    NEGATIVE = "negative",
    ON_PRIMARY_COLOR = "on-primary-color",
    ON_INVERTED_BACKGROUND = "on-inverted-background",
    BRAND = "brand"
}
export declare const OLD_BUTTON_SIZES: {
    readonly sm: "small";
    readonly md: "medium";
    readonly lg: "large";
};
export declare type Size = typeof SIZES[keyof typeof SIZES] | keyof typeof OLD_BUTTON_SIZES;
export declare const getActualSize: (size?: Size) => any;
export declare const BUTTON_KIND_CLASS_NAMES: {
    PRIMARY: string;
};
export declare const BUTTON_ICON_SIZE = 20;
export declare enum ButtonInputType {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}
