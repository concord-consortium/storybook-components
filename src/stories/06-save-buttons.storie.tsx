import React from "react";
import { SaveButton } from "../components/save-button";

export default {
  title: "Save Button",
  parameters: {
    component: SaveButton,
    componentSubtitle: "A save button component used in PCI simulations."
  }
};

export const clickableSaveButton = () =>
  <SaveButton
    onClick={()=>{window.alert("Save")}}
  />;

