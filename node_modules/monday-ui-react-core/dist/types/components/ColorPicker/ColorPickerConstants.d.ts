import { BaseSizes } from "../../constants/sizes";
import { CONTENT_COLORS_VALUES } from "../../utils/colors-vars-map";
export declare const DEFAULT_NUMBER_OF_COLORS_IN_LINE = 5;
export declare const COLOR_SIZES: Record<BaseSizes, number>;
export declare const COLOR_PADDING = 8;
export declare const DIALOG_WIDTH_PADDING = 24;
export declare enum ColorShapes {
    SQUARE = "square",
    CIRCLE = "circle"
}
export declare type ColorPickerValueOnly = CONTENT_COLORS_VALUES | string;
export declare type ColorPickerArrayValueOnly = CONTENT_COLORS_VALUES[] | string[];
export declare type ColorPickerValue = ColorPickerValueOnly | ColorPickerArrayValueOnly;
