import { ButtonProps } from "../Button/Button";
import { ElementContent } from "../../types/ElementContent";
export declare const SUBMIT_BUTTON_TEXT = "Submit";
export declare const DISMISS_BUTTON_TEXT = "Dismiss";
export declare const TIPSEEN_CLOSE_BUTTON_TEST_ID = "close-tipseen";
export declare const TIPSEEN_CLOSE_BUTTON_ARIA_LABEL = "Close";
export declare enum TipseenCloseButtonTheme {
    LIGHT = "light",
    DARK = "dark"
}
export declare type ButtonPropsBackwardCompatible = ButtonProps & {
    content?: ElementContent;
};
