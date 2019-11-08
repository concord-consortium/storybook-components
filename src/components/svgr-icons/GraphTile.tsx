import React, { SVGProps } from "react";

const SvgGraphtile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Graph Tile"
    viewBox="0 0 19 19"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M15.5 13.5v-.75h-1v.75H13v-.75h-1v.75h-1.5v-.75h-1v.75H8v-.75H7v.75H5.5V12h.75v-1H5.5V9.5h.75v-1H5.5V7h.75V6H5.5V4.5h.75v-1H5.5V3h-1v10.5H3v1h1.5V16h1v-1.5H16v-1h-.5z" />
  </svg>
);

export default SvgGraphtile;
