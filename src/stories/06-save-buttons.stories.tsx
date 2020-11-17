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

export const labeledSaveButton = () =>
  <SaveButton
    onClick={()=>{window.alert("Save")}}
    label="Store"
  />;

export const longLabeledSaveButton = () =>
  <SaveButton
    onClick={()=>{window.alert("Save button long label")}}
    label="Store"
  />;

export const styledSaveButton = () =>
  <SaveButton
    onClick={()=>{window.alert("Save")}}
    customClassName="custom-class"
  />;

export const disabledSaveButton = () =>
  <SaveButton
    onClick={()=>{window.alert("Save")}}
    disabled={true}
  />;
