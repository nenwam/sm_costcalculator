import { FC } from "react";
import { VibeComponentProps } from "../../types";
import { ElementContent } from "../../types/ElementContent";
interface TipseenBasicContentProps extends VibeComponentProps {
    title?: string;
    titleClassName?: string;
    children?: ElementContent | ElementContent[];
}
declare const TipseenBasicContent: FC<TipseenBasicContentProps>;
export default TipseenBasicContent;
