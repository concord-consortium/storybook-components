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
  width: fit-content;
  height: fit-content;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 500px;
  margin-top: 10px;
  color: #333333;
  opacity: ${(p: {disabled?: boolean}) => p.disabled ? ".35" : "1"};
`;

const sharedButtonStyle = css`
  height: 30px;
  width: 30px;
  cursor: ${(p: {disabled?: boolean}) => p.disabled ? "normal" : "pointer"};
  pointer-events: ${(p: {disabled?: boolean}) => p.disabled ? "none" : "auto"};
  opacity: ${(p: {disabled?: boolean}) => p.disabled ? ".35" : "1"};
  &:hover {
    fill: #666666;
  }
  &:active {
    fill: #cccccc;
  }
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
      <ButtonContainer>
        { type === "play-pause"
          ? running
            ? <StyledPauseButton disabled={disabled} onClick={onClick} />
            : <StyledPlayButton disabled={disabled} onClick={onClick} />
          : <StyledRewindButton disabled={disabled} onClick={onClick} />
        }
        {label && <Label disabled={disabled}>{label}</Label>}
      </ButtonContainer>
    );
  }

}
