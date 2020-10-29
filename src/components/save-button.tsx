import * as React from "react";
import styled from "styled-components";
import SvgSave from "./svgr-icons/Save";
import { Themes } from "../themes";

const Colors = Themes.Simulation;

export interface ISaveButtonProps {
  onClick?: (args?: any) => any;
  label?: string;
}

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: 86px;
  height: 32px;
  border-radius: 5px;
  border: solid 1px ${Colors.Gray["control-text"]};
  background-color: white;
  cursor: pointer;
  transition: background-color .25s;
  &:hover {
    background-color: ${Colors.Gray["control-gray-light-1"]};
  }
  &:active .save-button-highlight {
    background-color: white;
  }
`;

const ButtonHighlight = styled.div`
  height: 26px;
  width: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, .5);
`;

const StyledSaveButton = styled(SvgSave)`
  width: 24px;
  height: 24px;
`;

const Label = styled.div`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 500;
`;

export const SaveButton: React.FC<ISaveButtonProps> = (props) => {
  const { onClick, label } = props;
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonHighlight className="save-button-highlight">
        <StyledSaveButton />
      </ButtonHighlight>
      <Label>{label || "Save"}</Label>
    </ButtonContainer>
  );
};
