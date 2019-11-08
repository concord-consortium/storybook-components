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
var SvgCaret = function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 9 9", width: "1em", height: "1em" }, props),
    React.createElement("path", { d: "M8.5 4.5L.5 0v9z" }))); };
export default SvgCaret;
