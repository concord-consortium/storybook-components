import React from 'react';
export interface IMenuItemProps {
    text: string;
    selected?: boolean;
    disabled?: boolean;
    link?: string;
    onClick?: (source: IMenuItemProps) => void;
}
interface IMenuState {
    opened: boolean;
}
export interface IMenuProps {
    title: string;
    selected?: number;
    prefix?: string;
    width?: number;
    items: IMenuItemProps[];
}
export declare class DropDown extends React.Component<IMenuProps, IMenuState> {
    private innerRef;
    constructor(props: IMenuProps);
    toggleOpen: () => void;
    clickOutside: (event: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
