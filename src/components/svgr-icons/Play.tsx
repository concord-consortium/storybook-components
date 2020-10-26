import React, { SVGProps } from "react";

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="play icon"
    viewBox="0 0 30 30"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M15,0A15,15,0,1,0,30,15,15,15,0,0,0,15,0Zm8.29,15.43L9.76,23.55A.5.5,0,0,1,9,23.12V6.88a.5.5,0,0,1,.76-.43l13.53,8.12A.51.51,0,0,1,23.29,15.43Z"/>
  </svg>
);

export default SvgPlay;
