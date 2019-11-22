import React from "react";

import {HistDataContext} from "../components/circular-histo";
import data from "../wind-SD-2006";

export default {
  title: "Histogram stories",
  parameters: {
    component: HistDataContext,
    componentSubtitle: "SVG Icon Button",
  }
};

export const SomeHistogram = () => {
  const dat = data.map((d: [string, number, number, number]) => {
    return {time: d[0], speed: d[1], direction: d[3]};
  });
  return (
    <HistDataContext data={dat}/>
  );
};
