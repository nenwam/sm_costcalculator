export declare const SKELETON_CUSTOM_SIZE = "custom";
export declare enum SkeletonType {
    CIRCLE = "circle",
    RECTANGLE = "rectangle",
    TEXT = "text"
}
export declare enum TextSkeletonSize {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6",
    P = "p",
    SMALL = "small"
}
export declare const SKELETON_SIZES: {
    CUSTOM: string;
    CIRCLE: {};
    RECTANGLE: {};
    TEXT: typeof TextSkeletonSize;
};
export declare type SkeletonSizeType = TextSkeletonSize | typeof SKELETON_CUSTOM_SIZE;
