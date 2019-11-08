import React, { SVGProps } from "react";

const Svg1Up = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="1up icon"
    viewBox="0 0 30 26"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      data-name="1up"
      d="M27 0H3a3 3 0 00-3 3v20a3 3 0 003 3h24a3 3 0 003-3V3a3 3 0 00-3-3zm1 23a1 1 0 01-1 1H3a1 1 0 01-1-1V5h26zM26 7H4v15h22zm-1 14H5V8h20z"
    />
  </svg>
);

export default Svg1Up;
