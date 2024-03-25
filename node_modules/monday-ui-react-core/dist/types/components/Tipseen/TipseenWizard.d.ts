import { FC } from "react";
import { StepsProps } from "../Steps/Steps";
interface TipseenWizardProps extends StepsProps {
    title?: string;
    /**
     * Classname for overriding TipseenTitle styles
     */
    titleClassName?: string;
}
declare const TipseenWizard: FC<TipseenWizardProps>;
export default TipseenWizard;
