import React from "react";
import { VCRButton } from "../components/vcr-button";
import "../style/style.css";

export default {
  title: "VCR Button",
  parameters: {
    component: VCRButton,
    componentSubtitle: "A VCR button component used in PCI simulations."
  }
};

export const VCRPlayButton = () =>
  <VCRButton
    type={"play-pause"}
    label="Play"
  />;

export const VCRRewindButton = () =>
  <VCRButton
    type={"rewind"}
    label="Rewind"
  />;

export const VCRPauseButton = () =>
  <VCRButton
    type={"play-pause"}
    running={true}
    label="Pause"
  />;

export const VCRDisabledRewindButton = () =>
  <VCRButton
    type={"rewind"}
    disabled={true}
    label="Rewind"
  />;

export const VCRClickablePlayButton = () =>
  <VCRButton
    type={"play-pause"}
    onClick={()=>{window.alert("Play")}}
    label="Start"
  />;

  export const MultipleButtons = () =>
    <div>
      <VCRButton
        type={"rewind"}
        label="Rewind"
      />
      <VCRButton
        type={"play-pause"}
        label="Start"
      />
    </div>;

export const VCRLabeledRewindButton = () =>
  <VCRButton
    type={"rewind"}
    disabled={true}
    label="Rewind with long label"
  />;

export const VCRStyledButton = () =>
  <VCRButton
    type={"play-pause"}
    label="Play"
    containerClassName="button-class"
  />;
