import * as React from "react";
import styled from 'styled-components'
import { Colors } from '../themes/clue'

export type orientation = "horizontal" | "vertical";

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
  orientation: orientation;
}

const ToggleGroupDiv = styled.div<IOriented>`
  display: flex;
  flex-direction: ${(p:IOriented) => p.orientation ===  "horizontal"
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
`
const ToggleButton = styled.div<IToggleColors & IOriented>`
  padding: 0.5em;
  border-radius: 0px;
  border: 2px solid white;
  background-color: ${p => p.unselectedColor.background};
  color: ${p => p.unselectedColor.color};

  &:last-child {
    border-radius: ${p => p.orientation === "vertical"
      ? '0px 0px 0.5em 0.5em'
      : '0px 0.5em 0.5em 0px' };
  }

  &:first-child {
    border-radius: ${p => p.orientation === "vertical"
      ? '0.5em 0.5em 0px 0px'
      : '0.5em 0px 0px 0.5em' };
  }

  &.selected {
    background-color: ${p => p.selectedColor.background};
    color: ${p => p.selectedColor.color};
  }

  &:hover {
    background-color: ${p => p.hoverColor.background};
    color: ${p => p.hoverColor.color};
  }
`;


export interface IToggleChoice {
  label: string
  onClick?: () => void
  selected: boolean
  colors?: IToggleColors
}

export interface IToggleGroupProps {
  orientation: orientation;
  colors: IToggleColors;
  options: IToggleChoice[];
}

export interface IToggleGroupState {}

export class ToggleGroup extends React.Component<IToggleGroupProps, IToggleGroupState> {
  public renderOption(option: IToggleChoice, index: number) {
    const {orientation} = this.props
    const colors = option.colors ? option.colors : this.props.colors;
    const className = option.selected
      ? "toggle-button selected"
      : "toggle-button";
    return(
      <ToggleButton
        {...colors}
        orientation={orientation}
        className={className}
        onClick={option.onClick}
        key={index}>
          {option.label}
      </ToggleButton>
    );
  }

  static defaultProps = {
    colors: {
      selectedColor:  {
        color: "white",
        background: Colors.Sage['sage-dark-5']
      },
      hoverColor: {
        color: "white",
        background: Colors.Sage['sage-dark-3']
      },
      unselectedColor:  {
        color: Colors.Sage['sage-dark-5'],
        background: Colors.Sage['sage-light-2'],
      }
    },
    orientation: 'horizontal',
    options: []
  }

  public render() {
    const { options, colors, orientation } = this.props;
    return(
      <ToggleGroupDiv {...colors} orientation={orientation}>
        { options.map( (opt, idx) => this.renderOption(opt, idx)) }
      </ToggleGroupDiv>
    );
  }

}
