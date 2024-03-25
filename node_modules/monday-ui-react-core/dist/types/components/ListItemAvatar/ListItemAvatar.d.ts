import { FC } from "react";
import { VibeComponentProps } from "../../types";
export interface ListItemAvatarProps extends VibeComponentProps {
    src?: string;
    avatarClassName?: string;
}
declare const ListItemAvatar: FC<ListItemAvatarProps>;
export default ListItemAvatar;
