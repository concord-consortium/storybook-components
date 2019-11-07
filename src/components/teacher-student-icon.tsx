import React from "react";
import styled from "styled-components";

interface IIconTSProps {
  svgProps?: any;
}
interface IIconTSState { }

export class IconTeacherStudent extends React.Component<IIconTSProps, IIconTSState> {
  public render() {
    const { svgProps } = this.props;
    return (
      <svg version="1.1" id="Student" x="0px" y="0px" viewBox="0 0 24 24" {...svgProps}>
        <circle cx="12" cy="6.9" r="6.9" />
        <path d="M16.5,14.8h-0.6c-1.2,0.5-2.5,0.9-3.9,0.9c-1.4,0-2.7-0.3-3.9-0.9H7.5c-3.9,0-7.2,3-7.5,6.9c0,0.4,0.3,0.6,0.6,0.8 C1.6,23.1,7.1,24,12,24s9.9-0.9,11.4-1.6c0.3-0.1,0.6-0.4,0.6-0.8C23.7,17.8,20.5,14.8,16.5,14.8z" />
      </svg>
    );
  }
}
