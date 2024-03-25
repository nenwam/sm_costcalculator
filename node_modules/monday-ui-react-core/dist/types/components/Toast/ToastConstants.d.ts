export declare enum ToastType {
    NORMAL = "normal",
    POSITIVE = "positive",
    NEGATIVE = "negative"
}
export declare enum ToastActionType {
    LINK = "link",
    BUTTON = "button"
}
export declare const defaultIconMap: {
    normal: import("react").FC<import("../Icon/Icons/components/Info").InfoProps>;
    positive: import("react").FC<import("../Icon/Icons/components/Check").CheckProps>;
    negative: import("react").FC<import("../Icon/Icons/components/Alert").AlertProps>;
};
export declare type ToastAction = {
    type: ToastActionType;
    content?: string;
    text?: string;
    href?: string;
};
