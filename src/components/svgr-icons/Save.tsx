import React, { SVGProps } from "react";

const SvgSave = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="save icon"
    viewBox="0 0 25 24"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fill-rule="evenodd">
      <g>
          <g>
              <g transform="translate(-247 -660) translate(239.5 656) translate(8 4)">
                  <circle cx="12" cy="12" r="9.5" fill="#FFF" stroke="#333"/>
                  <g>
                      <path d="M0 0H24V24H0z"/>
                      <path fill="#333" fill-rule="nonzero" d="M17.332 9.835l-1.244-1.328c-.171-.182-.459-.192-.642-.02L10.64 12.97l-2.074-1.965c-.183-.171-.47-.165-.644.018L6.67 12.34c-.172.182-.165.469.018.642l3.629 3.437c.175.166.448.167.624.003l6.37-5.947c.183-.17.192-.459.021-.641"/>
                  </g>
              </g>
          </g>
      </g>
    </g>
  </svg>
);

export default SvgSave;
