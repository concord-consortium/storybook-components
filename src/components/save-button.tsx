import * as React from "react";
import styled from "styled-components";
import SvgSave from "./svgr-icons/Save";

export interface SaveButtonProps {
  onClick?: (args?: any) => any;
}

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: 86px;
  height: 32px;
  border-radius: 5px;
  border: solid 1px #333333;
  background-color: #ffffff;
  cursor: pointer;
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

export class SaveButton extends React.Component<SaveButtonProps> {
  public render() {
    const { onClick } = this.props;
    return(
      <ButtonContainer onClick={onClick}>
        <StyledSaveButton />
        <Label>Save</Label>
      </ButtonContainer>
    );
  }

}
