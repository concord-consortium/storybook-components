import * as React from "react";
import styled from "styled-components";
import { Themes } from "../themes";

const Colors = Themes.Clue;

export type TOrientation = "horizontal" | "vertical";

export interface TabColor {
  color: string;
  background: string;
}

export interface IToggleColors {
  selectedColor: TabColor;
  unselectedColor: TabColor;
  hoverColor: TabColor;
}

// Internally we use `$` so that styled components automatically
// strips these props off instead of trying to pass them to the div
interface ITransientToggleColors {
  $selectedColor: TabColor;
  $unselectedColor: TabColor;
  $hoverColor: TabColor;
}

export interface IOriented {
  $orientation: TOrientation;
}

const ToggleGroupDiv = styled.div<IOriented>`
  display: flex;
  flex-direction: ${(p: IOriented) => p.$orientation ===  "horizontal"
    ? "row"
    : "column"
  };
  align-items: stretch;
  justify-content: stretch;
  border-radius: 0.5em;
  padding: 3px;
  margin: 0px;
  text-align: center;
  font-size: 10pt;
`;
const ToggleButton = styled.div<ITransientToggleColors & IOriented>`
  padding: 0.5em;
  border-radius: 0px;
  border: 2px solid white;
  background-color: ${p => p.$unselectedColor.background};
  color: ${p => p.$unselectedColor.color};

  &:last-child {
    border-radius: ${p => p.$orientation === "vertical"
      ? "0px 0px 0.5em 0.5em"
      : "0px 0.5em 0.5em 0px" };
  }

  &:first-child {
    border-radius: ${p => p.$orientation === "vertical"
      ? "0.5em 0.5em 0px 0px"
      : "0.5em 0px 0px 0.5em" };
  }

  &.selected {
    background-color: ${p => p.$selectedColor.background};
    color: ${p => p.$selectedColor.color};
  }

  &:hover {
    background-color: ${p => p.$hoverColor.background};
    color: ${p => p.$hoverColor.color};
  }
`;

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

export interface IToggleGroupState {}

export class ToggleGroup extends React.Component<IToggleGroupProps, IToggleGroupState> {

  public static defaultProps: IToggleGroupProps = {
    colors: {
      selectedColor:  {
        color: "white",
        background: Colors.Sage["sage-dark-5"]
      },
      hoverColor: {
        color: "white",
        background: Colors.Sage["sage-dark-3"]
      },
      unselectedColor:  {
        color: Colors.Sage["sage-dark-5"],
        background: Colors.Sage["sage-light-2"],
      }
    },
    orientation: "horizontal",
    options: []
  };

  public renderOption(option: IToggleChoice, index: number) {
    const {orientation} = this.props;
    const colors = option.colors ? option.colors : this.props.colors;
    const { selectedColor, hoverColor, unselectedColor } = colors;
    const className = option.selected
      ? "toggle-button selected"
      : "toggle-button";
    return(
      <ToggleButton
        $selectedColor={selectedColor}
        $hoverColor={hoverColor}
        $unselectedColor={unselectedColor}
        $orientation={orientation}
        className={className}
        onClick={option.onClick}
        key={index}>
          {option.label}
      </ToggleButton>
    );
  }

  public render() {
    const { options, orientation } = this.props;
    return(
      <ToggleGroupDiv $orientation={orientation}>
        { options.map( (opt, idx) => this.renderOption(opt, idx)) }
      </ToggleGroupDiv>
    );
  }

}
