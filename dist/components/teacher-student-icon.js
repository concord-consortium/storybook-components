var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React from 'react';
var IconTeacherStudent = /** @class */ (function (_super) {
    __extends(IconTeacherStudent, _super);
    function IconTeacherStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconTeacherStudent.prototype.render = function () {
        var svgProps = this.props.svgProps;
        return (React.createElement("svg", __assign({ version: "1.1", id: "Student", x: "0px", y: "0px", viewBox: "0 0 24 24" }, svgProps),
            React.createElement("circle", { cx: "12", cy: "6.9", r: "6.9" }),
            React.createElement("path", { d: "M16.5,14.8h-0.6c-1.2,0.5-2.5,0.9-3.9,0.9c-1.4,0-2.7-0.3-3.9-0.9H7.5c-3.9,0-7.2,3-7.5,6.9c0,0.4,0.3,0.6,0.6,0.8 C1.6,23.1,7.1,24,12,24s9.9-0.9,11.4-1.6c0.3-0.1,0.6-0.4,0.6-0.8C23.7,17.8,20.5,14.8,16.5,14.8z" })));
    };
    return IconTeacherStudent;
}(React.Component));
export { IconTeacherStudent };
