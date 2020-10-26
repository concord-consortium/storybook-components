import * as React from "react";
import styled, { css } from "styled-components";
import SvgPlay from "./svgr-icons/Play";
import SvgPause from "./svgr-icons/Pause";
import SvgRewind from "./svgr-icons/Rewind";

export type TVCRButton = "play-pause" | "rewind";

export interface VCRButtonProps {
  type: TVCRButton;
  onClick?: (args?: any) => any;
  title?: string;
  disabled?: boolean;
  running?: boolean;
  label?: string;
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 74px;
  border-radius: 9px 9px 0 0;
  cursor: ${(p: {disabled?: boolean}) => p.disabled ? "normal" : "pointer"};
  pointer-events: ${(p: {disabled?: boolean}) => p.disabled ? "none" : "auto"};
  transition: background-color .25s;
  &:hover {
    background-color: #dfdfdf;
  }
  &:active .vcr-button-highlight {
    background-color: white;
  }
`;

const ButtonHighlight = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, .5);
`;

const ButtonBack = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: white;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 500px;
  margin-top: 5px;
  color: #333333;
  opacity: ${(p: {disabled?: boolean}) => p.disabled ? ".35" : "1"};
`;

const sharedButtonStyle = css`
  height: 30px;
  width: 30px;
  opacity: ${(p: {disabled?: boolean}) => p.disabled ? ".35" : "1"};
`

const StyledPlayButton = styled(SvgPlay)`
  ${sharedButtonStyle}
`;

const StyledPauseButton = styled(SvgPause)`
  ${sharedButtonStyle}
`;

const StyledRewindButton = styled(SvgRewind)`
  ${sharedButtonStyle}
`;

export class VCRButton extends React.Component<VCRButtonProps> {
  public render() {
    const { label, type, onClick, running, disabled } = this.props;
    return(
      <ButtonContainer onClick={onClick} disabled={disabled}>
        <ButtonHighlight className="vcr-button-highlight">
          <ButtonBack>
            { type === "play-pause"
              ? running
                ? <StyledPauseButton disabled={disabled} />
                : <StyledPlayButton disabled={disabled} />
              : <StyledRewindButton disabled={disabled} />
            }
          </ButtonBack>
        </ButtonHighlight>
        {label && <Label disabled={disabled}>{label}</Label>}
      </ButtonContainer>
    );
  }

}