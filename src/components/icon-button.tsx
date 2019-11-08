import * as React from "react";
import styled from "styled-components";


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

const IconButtonBackground = styled.div<IconButtonProps>`
  background-color: ${(p) => p.normalColor ? p.normalColor : "none" };
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  font-size: inherit;
  &:hover {
    background-color: ${(p) => p.hoverColor ? p.hoverColor : "none" };
  }
`;

export class IconButton extends React.Component<IconButtonProps, IconButtonState> {
  public state = {hovering: false};
  public render() {
    const { hovering } = this.state;
    const { content, hoverContent, onClick} = this.props;
    return(
      <IconButtonBackground
        onMouseEnter={this.setHover}
        onMouseLeave={this.stopHover}
        onClick={onClick}
        title="untitled" {...this.props} >
          {hovering ? hoverContent : content}
      </IconButtonBackground>
    );
  }
  private setHover = () => this.setState({hovering: true});
  private stopHover = () => this.setState({hovering: false});
}
