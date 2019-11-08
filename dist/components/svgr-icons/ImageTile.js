var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
var SvgImagetile = function (props) { return (React.createElement("svg", __assign({ "data-name": "Image Tile", viewBox: "0 0 19 19", width: "1em", height: "1em" }, props),
    React.createElement("circle", { cx: 4.86, cy: 4.86, r: 1.86 }),
    React.createElement("path", { d: "M3 16h11a2 2 0 002-2V9.44l-2.18-2.28a.57.57 0 00-.79 0l-5.56 5.57-1.84-1.84a.56.56 0 00-.79 0L3 12.73z" }))); };
export default SvgImagetile;
