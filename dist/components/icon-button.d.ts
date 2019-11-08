import * as React from "react";
export interface IconButtonState {
    hovering: boolean;
}
export interface IconButtonProps {
    onClick?: (args?: any) => any;
    normalColor?: string;
    hoverColor?: string;
    hoverContent: JSX.Element;
    content: JSX.Element;
    title?: string;
}
export declare class IconButton extends React.Component<IconButtonProps, IconButtonState> {
    state: {
        hovering: boolean;
    };
    render(): JSX.Element;
    private setHover;
    private stopHover;
}
