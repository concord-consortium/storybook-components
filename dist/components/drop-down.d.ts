import React from "react";
export interface IMenuState {
    opened: boolean;
}
export interface IMenuProps {
    title: string;
    selected?: number;
    prefix?: string;
    width?: number;
    items: IDropdownItem[];
}
export interface IDropdownItem {
    text: string;
    selected?: boolean;
    disabled?: boolean;
    link?: string;
    onClick?: (source: IDropdownItem) => void;
}
export declare class DropDown extends React.Component<IMenuProps, IMenuState> {
    static readonly displayName = "DropDown";
    private innerRef;
    constructor(props: IMenuProps);
    toggleOpen: () => void;
    clickOutside: (event: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
