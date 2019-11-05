import * as React from "react";
declare type orientation = "horizontal" | "vertical";
interface TabColor {
    color: string;
    background: string;
}
interface IToggleColors {
    selectedColor: TabColor;
    unselectedColor: TabColor;
    hoverColor: TabColor;
}
interface IToggleChoice {
    label: string;
    onClick?: () => void;
    selected: boolean;
    colors?: IToggleColors;
}
interface IToggleGroupProps {
    orientation: orientation;
    colors: IToggleColors;
    options: IToggleChoice[];
}
interface IState {
}
export declare class ToggleGroup extends React.Component<IToggleGroupProps, IState> {
    renderOption(option: IToggleChoice, index: number): JSX.Element;
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
    render(): JSX.Element;
}
export {};
