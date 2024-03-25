import React, { FC } from "react";
import { StepsType } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ButtonProps } from "../Button/Button";
export interface StepsHeaderProps extends VibeComponentProps {
    type: StepsType;
    activeStepIndex: number;
    onChangeActiveStep: (e: React.MouseEvent, stepIndex: number) => void;
    stepsCount: number;
    areNavigationButtonsHidden: boolean;
    backButtonProps: ButtonProps;
    nextButtonProps: ButtonProps;
    areButtonsIconsHidden: boolean;
    isOnPrimary: boolean;
}
export declare const StepsHeader: FC<StepsHeaderProps>;
