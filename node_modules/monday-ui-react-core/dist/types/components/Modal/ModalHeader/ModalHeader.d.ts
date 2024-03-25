import React, { FC } from "react";
import { IconSubComponentProps } from "../../Icon/Icon";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { ElementContent } from "src/types/ElementContent";
export interface ModalHeaderProps extends VibeComponentProps {
    /**
     * Title of the modal - using string is a recommended standard, as it provides well-defined styles. Using it with JSX content should be according to design guidelines.
     */
    title: ElementContent;
    /**
     * Description of the modal - pure string description is a recommended standard, use JSX ability only if there is a need to add links
     */
    description?: ElementContent;
    /**
     * Icon to be rendered before the title
     */
    icon?: string | React.FunctionComponent<IconSubComponentProps> | null;
    /**
     * Class name for the wrapper
     */
    className?: string;
    /**
     * Class name for the title
     */
    titleClassName?: string;
    /**
     * closes the Modal. No need to provide it, it is being provided by the modal
     */
    closeModal?: () => void;
    /**  /**
     * ID for the title, needed for accessibility. No need to provide it, it is being provided by the modal
     */
    id?: string;
    /**
     * Class name for the description
     */
    descriptionClassName?: string;
    /**
     * Size of the icon
     */
    iconSize?: number;
    /**
     * class name for the icon
     */
    iconClassName?: string;
    /**
     * Aria label for the close button
     */
    closeButtonAriaLabel?: string;
    /**
     * Should close button be hidden or not
     */
    hideCloseButton?: boolean;
}
declare const ModalHeader: FC<ModalHeaderProps>;
export default ModalHeader;
