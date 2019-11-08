import * as React from "react";
export declare type TOrientation = "horizontal" | "vertical";
export interface TabColor {
    color: string;
    background: string;
}
export interface IToggleColors {
    selectedColor: TabColor;
    unselectedColor: TabColor;
    hoverColor: TabColor;
}
export interface IOriented {
    orientation: TOrientation;
}
export interface IToggleChoice {
    label: string;
    onClick?: () => void;
    selected: boolean;
    colors?: IToggleColors;
}
export interface IToggleGroupProps {
    orientation: TOrientation;
    colors: IToggleColors;
    options: IToggleChoice[];
}
export interface IToggleGroupState {
}
export declare class ToggleGroup extends React.Component<IToggleGroupProps, IToggleGroupState> {
    static defaultProps: {
        colors: {
            selectedColor: {
                color: string;
                background: string;
            };
            hoverColor: {
                color: string;
                background: string;
            };
            unselectedColor: {
                color: string;
                background: string;
            };
        };
        orientation: string;
        options: never[];
    };
    renderOption(option: IToggleChoice, index: number): JSX.Element;
    render(): JSX.Element;
}
