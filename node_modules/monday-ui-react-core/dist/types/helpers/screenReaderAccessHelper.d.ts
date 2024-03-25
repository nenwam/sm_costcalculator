export declare function getIconScreenReaderAccessProps({ isClickable, isDecorationOnly, isKeyboardAccessible, label }: {
    isClickable: boolean;
    isDecorationOnly: boolean;
    isKeyboardAccessible?: boolean;
    label: string;
}): {
    "aria-label": string;
    role: string;
    tabIndex: number;
    "aria-hidden": boolean;
};
export declare function getClickableScreenReaderAccessProps({ isKeyboardAccessible, isDecorationOnly }: {
    isKeyboardAccessible?: boolean;
    isDecorationOnly?: boolean;
}): {
    role: string;
    tabIndex: number;
    "aria-hidden": boolean;
};
export declare function getClickableIconScreenReaderAccessProps({ label, isDecorationOnly, isKeyboardAccessible }: {
    label: string;
    isDecorationOnly?: boolean;
    isKeyboardAccessible?: boolean;
}): {
    "aria-label": string;
    role: string;
    tabIndex: number;
    "aria-hidden": boolean;
};
