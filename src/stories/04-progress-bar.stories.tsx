import React from "react";
import styled from "styled-components";
import { ProgressBar } from "../components/progress-bar";

export default {
  title: "Progress Bar",
  parameters: {
    component: ProgressBar,
    componentSubtitle: "A progress bar component used in PCI simulations."
  }
};

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: #AD987A;
`;

export const progressBarHalf = () =>
  <Background>
    <ProgressBar
      currentTimeLabel="5 hours"
      currentTime={5}
      maxTime={10}
    />
  </Background>;

export const progressBarEmpty = () =>
  <Background>
    <ProgressBar
      currentTimeLabel="5 hours"
      currentTime={0}
      maxTime={10}
    />
  </Background>;

export const progressBarFull = () =>
  <Background>
    <ProgressBar
      currentTimeLabel="5 hours"
      currentTime={10}
      maxTime={10}
    />
  </Background>;
