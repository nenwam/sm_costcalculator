import { ReactElement } from "react";
export declare enum ModalWidth {
    DEFAULT = "default",
    FULL_WIDTH = "full_width"
}
export declare type A11yDialogType = any;
export declare const isModalHeader: (child: ReactElement) => boolean;
export declare const isModalContent: (child: ReactElement) => boolean;
export declare const isModalFooter: (child: ReactElement) => boolean;
export declare const validateTitleProp: (title: string, childrenArray: ReactElement[]) => void;
