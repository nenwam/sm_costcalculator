import { FC, ReactElement } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
interface ModalContentProps extends VibeComponentProps {
    children: ReactElement | ReactElement[] | string;
}
declare const ModalContent: FC<ModalContentProps>;
export default ModalContent;
