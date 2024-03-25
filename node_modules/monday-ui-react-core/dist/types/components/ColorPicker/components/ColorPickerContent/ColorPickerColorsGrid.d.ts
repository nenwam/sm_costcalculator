import { CONTENT_COLORS_VALUES, ColorStyle } from "../../../../utils/colors-vars-map";
import { BaseSizes } from "../../../../constants";
import { ColorPickerArrayValueOnly, ColorPickerValueOnly, ColorShapes } from "../../ColorPickerConstants";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../../types";
interface ColorPickerColorsGridProps extends VibeComponentProps {
    onColorClicked?: (color: ColorPickerValueOnly) => any;
    colorsToRender?: ColorPickerArrayValueOnly;
    ColorIndicatorIcon?: SubIcon;
    SelectedIndicatorIcon?: SubIcon;
    colorStyle?: ColorStyle;
    value?: string | string[];
    shouldRenderIndicatorWithoutBackground?: boolean;
    colorSize?: BaseSizes;
    numberOfColorsInLine?: number;
    tooltipContentByColor?: Partial<Record<CONTENT_COLORS_VALUES, string> & Record<string, string>>;
    focusOnMount?: boolean;
    colorShape?: ColorShapes;
    showColorNameTooltip?: boolean;
}
export declare const ColorPickerColorsGrid: VibeComponent<ColorPickerColorsGridProps, HTMLUListElement>;
export {};
