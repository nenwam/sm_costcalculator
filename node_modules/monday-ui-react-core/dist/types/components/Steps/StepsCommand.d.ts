import React, { FC } from "react";
import { ButtonProps } from "../../components/Button/Button";
import VibeComponentProps from "../../types/VibeComponentProps";
export interface StepsCommandProps extends VibeComponentProps {
    isNext?: boolean;
    onChangeActiveStep?: (e: React.MouseEvent, newStepIndex: number) => void;
    activeStepIndex: number;
    stepsCount: number;
    isIconHidden?: boolean;
    buttonProps?: ButtonProps;
    isOnPrimary?: boolean;
}
export declare const StepsCommand: FC<StepsCommandProps>;
