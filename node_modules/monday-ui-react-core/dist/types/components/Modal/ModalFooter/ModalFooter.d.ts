import { FC, ReactElement } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
interface ModalFooterProps extends VibeComponentProps {
    children: ReactElement | ReactElement[] | string;
}
declare const ModalFooter: FC<ModalFooterProps>;
export default ModalFooter;
