import React, { SVGProps } from "react";

const SvgDragtile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Drag Tile"
    viewBox="0 0 14 9"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M14 7a2 2 0 11-2-2 2 2 0 012 2zM7 5a2 2 0 102 2 2 2 0 00-2-2zM2 5a2 2 0 102 2 2 2 0 00-2-2zm10-5a2 2 0 102 2 2 2 0 00-2-2zM7 0a2 2 0 102 2 2 2 0 00-2-2zM2 0a2 2 0 102 2 2 2 0 00-2-2z" />
    <path d="M12.5 6.5a.75.75 0 11-.75-.75.76.76 0 01.75.75zm-5.75-.75a.75.75 0 10.75.75.76.76 0 00-.75-.75zm-5 0a.75.75 0 10.75.75.76.76 0 00-.75-.75zm10-5a.75.75 0 10.75.75.76.76 0 00-.75-.75zm-5 0a.75.75 0 10.75.75.76.76 0 00-.75-.75zm-5 0a.75.75 0 10.75.75.76.76 0 00-.75-.75z" />
  </svg>
);

export default SvgDragtile;
