import React from "react";
import styled from "styled-components";
import {Exceedance as ExceedanceA} from "../components/exceedance-a";
import data from "../wind-SD-2006";

export default {
  title: "Excedence stories",
  parameters: {
    component: ExceedanceA,
    componentSubtitle: "Exceedence probability indicator",
  }
};

export const defaultLook = () => {
  return (
    <ExceedanceA count={10} total={10} exceedanceCount={5} color="red" bgColor="blue"/>
  );
};

export const styledLook = () => {
  return (
    <ExceedanceA count={10} total={10} exceedanceCount={1} color="yellow" bgColor="black"/>
  );
}
