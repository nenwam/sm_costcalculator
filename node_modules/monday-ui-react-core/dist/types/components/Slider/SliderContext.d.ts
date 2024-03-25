import { ReactElement } from "react";
import { SliderProps } from "./Slider";
import { SliderContextActions, SliderContextInfix, SliderContextSelection, SliderContextUI } from "./SliderConstants";
import { IconType } from "../Icon/IconConstants";
export interface SliderProviderProps extends SliderProps {
    children?: ReactElement | ReactElement[];
    infixOptions?: {
        /**
         * Show selected from Slider range value
         */
        indicateSelection?: boolean;
        /**
         * Options for initial/start/prefix element, it can be one of:
         *  - Any Component (react component, node, text, number etc.)
         *  - Or it can be an object of options for Icons component (see Icon components props)
         *  - Or it can be an object for Label (Icon, Title - and other components)
         *  - Or it can be Render Props Function witch are getting value and valueText
         */
        prefix?: {
            icon: IconType;
        } | string | ((value: number, valueText: string) => void) | ReactElement;
        /**
         * Options for postfix/end/finishing element. Same as prefix element.
         */
        postfix?: {
            icon: IconType;
        } | string | ((value: number, valueText: string) => void) | ReactElement;
        /**
         * Width of SelectionIndicator (i.e. TextField)
         */
        selectionIndicatorWidth?: string;
    };
}
export declare function SliderProvider({ children, ariaLabel, ariaLabelledby, color, "data-testid": dataTestId, defaultValue, disabled, max, min, onChange, ranged, showValue, size, step, value, valueFormatter, valueText, infixOptions }: SliderProviderProps): JSX.Element;
export declare function useSliderUi(): SliderContextUI;
export declare function useSliderInfix(): SliderContextInfix;
export declare function useSliderSelection(): SliderContextSelection;
export declare function useSliderActions(): SliderContextActions;
