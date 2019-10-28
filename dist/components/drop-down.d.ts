import React from 'react';
export interface IMenuItemProps {
    text: string;
    selected?: boolean;
    disabled?: boolean;
    link?: string;
    onClick?: (source: IMenuItemProps) => void;
}
export interface IMenuProps {
    title: string;
    selected?: number;
    width?: number;
    items: IMenuItemProps[];
}
declare const DropDown: React.FC<IMenuProps>;
/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export default DropDown;
