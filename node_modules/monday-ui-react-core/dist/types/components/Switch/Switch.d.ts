import { FC, ReactElement } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import { MockToggleProps } from "../Toggle/MockToggle";
interface SwitchProps extends VibeComponentProps {
    name?: string;
    value?: string;
    role?: string;
    disabled?: boolean;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    checked?: boolean;
    inputClassName?: string;
    onChange?: (value: boolean) => void;
    ariaControls?: string;
    defaultChecked?: boolean;
    children?: ReactElement<MockToggleProps>;
    wrapperClassName?: string;
}
export declare const Switch: FC<SwitchProps>;
export {};
