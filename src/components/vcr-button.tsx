import * as React from "react";
import styled, { css } from "styled-components";
import SvgPlay from "./svgr-icons/Play";
import SvgPause from "./svgr-icons/Pause";
import SvgRewind from "./svgr-icons/Rewind";
import { Themes } from "../themes";

const Colors = Themes.Simulation;

export type TVCRButton = "play-pause" | "rewind";

export interface IVCRButtonProps {
  type: TVCRButton;
  onClick?: (args?: any) => any;
  title?: string;
  disabled?: boolean;
  running?: boolean;
  label?: React.ReactNode;
  customClassName?: string;
}

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 6px;
  border: none;
  min-width: 60px;
  height: 90px;
  border-radius: 9px 9px 0 0;
  cursor: ${(p: {disabled?: boolean}) => p.disabled ? "normal" : "pointer"};
  pointer-events: ${(p: {disabled?: boolean}) => p.disabled ? "none" : "auto"};
  background-color: white;
  transition: background-color .25s;
  &:hover {
    background-color: ${Colors.Gray["control-gray-light-1"]};
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

const Label = styled.div<{disabled?: boolean}>`
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
  color: ${Colors.Gray["control-text"]};
  opacity: ${(p: {disabled?: boolean}) => p.disabled ? ".35" : "1"};
`;

const SvgButton = styled.div<{disabled?: boolean}>`
  height: 30px;
  width: 30px;
  opacity: ${(p: {disabled?: boolean}) => p.disabled ? ".35" : "1"};
`

export const VCRButton: React.FC<IVCRButtonProps> = (props) => {
  const { label, type, onClick, running, disabled, customClassName } = props;
  return(
    <ButtonContainer onClick={onClick} disabled={disabled} className={customClassName}>
      <ButtonHighlight className="vcr-button-highlight">
        <ButtonBack>
          { type === "play-pause"
            ? running
              ? <SvgButton as={SvgPause} disabled={disabled} />
              : <SvgButton as={SvgPlay} disabled={disabled} />
            : <SvgButton as={SvgRewind} disabled={disabled} />
          }
        </ButtonBack>
      </ButtonHighlight>
      {label && <Label disabled={disabled}>{label}</Label>}
    </ButtonContainer>
  );
};
