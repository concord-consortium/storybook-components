var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import * as React from "react";
import styled from "styled-components";
var IconButtonBackground = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1em;\n  height: 1em;\n  font-size: inherit;\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1em;\n  height: 1em;\n  font-size: inherit;\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (p) { return p.normalColor ? p.normalColor : "none"; }, function (p) { return p.hoverColor ? p.hoverColor : "none"; });
var IconButton = /** @class */ (function (_super) {
    __extends(IconButton, _super);
    function IconButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hovering: false };
        _this.setHover = function () { return _this.setState({ hovering: true }); };
        _this.stopHover = function () { return _this.setState({ hovering: false }); };
        return _this;
    }
    IconButton.prototype.render = function () {
        var hovering = this.state.hovering;
        var _a = this.props, content = _a.content, hoverContent = _a.hoverContent, onClick = _a.onClick;
        return (React.createElement(IconButtonBackground, __assign({ onMouseEnter: this.setHover, onMouseLeave: this.stopHover, onClick: onClick, title: "untitled" }, this.props), hovering ? hoverContent : content));
    };
    return IconButton;
}(React.Component));
export { IconButton };
var templateObject_1;
