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
var SvgStickynote = function (props) { return (React.createElement("svg", __assign({ "data-name": "sticky note", viewBox: "0 0 26 26", width: "1em", height: "1em" }, props),
    React.createElement("path", { "data-name": "sticky note", d: "M16 0H1a1 1 0 00-1 1v24a1 1 0 001 1h24a1 1 0 001-1V10zm.5 2.62l6.88 6.88H16.5zm8 21.88h-23v-23H15V10a1 1 0 001 1h8.5zm-4.5-8H5V15h15zm-4 4H5V19h11z" }))); };
export default SvgStickynote;
