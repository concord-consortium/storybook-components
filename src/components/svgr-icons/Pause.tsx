import React, { SVGProps } from "react";

const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="pause icon"
    viewBox="0 0 30 30"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M15,0A15,15,0,1,0,30,15,15,15,0,0,0,15,0ZM12.75,22.5a.5.5,0,0,1-.5.5H7.75a.5.5,0,0,1-.5-.5V7.5a.5.5,0,0,1,.5-.5h4.5a.5.5,0,0,1,.5.5Zm10,0a.5.5,0,0,1-.5.5h-4.5a.5.5,0,0,1-.5-.5V7.5a.5.5,0,0,1,.5-.5h4.5a.5.5,0,0,1,.5.5Z"/>
  </svg>
);

export default SvgPause;
