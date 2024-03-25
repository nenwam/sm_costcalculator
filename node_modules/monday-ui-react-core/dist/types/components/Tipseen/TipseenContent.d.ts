import React, { FC } from "react";
import { ButtonPropsBackwardCompatible } from "./TipseenConstants";
import { VibeComponentProps } from "../../types";
import { ElementContent } from "../../types/ElementContent";
interface TipseenContentProps extends VibeComponentProps {
    title?: string;
    /**
     * Classname for overriding TipseenTitle styles
     */
    titleClassName?: string;
    /**
     * Backward compatability for hideDismiss prop
     */
    isDismissHidden?: boolean;
    hideDismiss?: boolean;
    children?: ElementContent;
    /**
     * Backward compatability for hideSubmit prop
     */
    isSubmitHidden?: boolean;
    hideSubmit?: boolean;
    submitButtonText?: string;
    /** Backward compatibility for props naming **/
    submitButtonProps?: ButtonPropsBackwardCompatible;
    onSubmit?: (event: React.MouseEvent) => void;
    dismissButtonText?: string;
    /** Backward compatibility for props naming **/
    dismissButtonProps?: ButtonPropsBackwardCompatible;
    onDismiss?: (event: React.MouseEvent) => void;
}
declare const TipseenContent: FC<TipseenContentProps>;
export default TipseenContent;
