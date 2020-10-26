import * as React from "react";
import styled from "styled-components";
import { Themes } from "../themes";

const Colors = Themes.Simulation;

const kMaxTimerWidth = 110;

export interface ProgressBarProps {
  currentTimeLabel: string;
  currentTime: number;
  maxTime: number;
}

const Container = styled.div`
  width: 130px;
  height: 37px;
  color: ${Colors.Gray["control-text"]};
  border-radius: 0 0 10px 10px;
  background-color: rgba(255, 255, 255, .3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

const Progress = styled.div`
  margin-top: 5px;
  position: relative;
  width: 100%;
  height: 5px;
`;

const ProgressBack = styled.div`
  position: absolute;
  left: 10px;
  height: 5px;
  width: 110px;
  background-color: ${Colors.Gray["control-gray-light-3"]};
`;

const ProgressFront = styled.div`
  position: absolute;
  left: 10px;
  height: 5px;
  background-color: ${Colors.Green["progress-green"]};
`;

export class ProgressBar extends React.Component<ProgressBarProps> {
  public render() {
    const { currentTimeLabel, currentTime, maxTime} = this.props;
    const timerWidth = kMaxTimerWidth * (currentTime / maxTime);
    return(
      <Container>
        <div>Time: {currentTimeLabel}</div>
        <Progress>
          <ProgressBack />
          <ProgressFront style={{width: timerWidth}}/>
        </Progress>
      </Container>
    );
  }
}
