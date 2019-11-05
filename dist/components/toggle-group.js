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
import styled from 'styled-components';
import { Colors } from '../themes/clue';
var ToggleGroupDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: stretch;\n  justify-content: stretch;\n  border-radius: 0.5em;\n  padding: 3px;\n  margin: 0px;\n  text-align: center;\n  font-size: 10pt;\n"], ["\n  display: flex;\n  flex-direction: ",
    ";\n  align-items: stretch;\n  justify-content: stretch;\n  border-radius: 0.5em;\n  padding: 3px;\n  margin: 0px;\n  text-align: center;\n  font-size: 10pt;\n"])), function (p) { return p.orientation === "horizontal"
    ? "row"
    : "column"; });
var ToggleButton = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0.5em;\n  border-radius: 0px;\n  border: 2px solid white;\n  background-color: ", ";\n  color: ", ";\n\n  &:last-child {\n    border-radius: ", ";\n  }\n\n  &:first-child {\n    border-radius: ", ";\n  }\n\n  &.selected {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  padding: 0.5em;\n  border-radius: 0px;\n  border: 2px solid white;\n  background-color: ", ";\n  color: ", ";\n\n  &:last-child {\n    border-radius: ",
    ";\n  }\n\n  &:first-child {\n    border-radius: ",
    ";\n  }\n\n  &.selected {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), function (p) { return p.unselectedColor.background; }, function (p) { return p.unselectedColor.color; }, function (p) { return p.orientation === "vertical"
    ? '0px 0px 0.5em 0.5em'
    : '0px 0.5em 0.5em 0px'; }, function (p) { return p.orientation === "vertical"
    ? '0.5em 0.5em 0px 0px'
    : '0.5em 0px 0px 0.5em'; }, function (p) { return p.selectedColor.background; }, function (p) { return p.selectedColor.color; }, function (p) { return p.hoverColor.background; }, function (p) { return p.hoverColor.color; });
var ToggleGroup = /** @class */ (function (_super) {
    __extends(ToggleGroup, _super);
    function ToggleGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleGroup.prototype.renderOption = function (option, index) {
        var orientation = this.props.orientation;
        var colors = option.colors ? option.colors : this.props.colors;
        var className = option.selected
            ? "toggle-button selected"
            : "toggle-button";
        return (React.createElement(ToggleButton, __assign({}, colors, { orientation: orientation, className: className, onClick: option.onClick, key: index }), option.label));
    };
    ToggleGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, colors = _a.colors, orientation = _a.orientation;
        return (React.createElement(ToggleGroupDiv, __assign({}, colors, { orientation: orientation }), options.map(function (opt, idx) { return _this.renderOption(opt, idx); })));
    };
    ToggleGroup.defaultProps = {
        colors: {
            selectedColor: {
                color: "white",
                background: Colors.Sage['sage-dark-5']
            },
            hoverColor: {
                color: "white",
                background: Colors.Sage['sage-dark-3']
            },
            unselectedColor: {
                color: Colors.Sage['sage-dark-5'],
                background: Colors.Sage['sage-light-2'],
            }
        },
        orientation: 'horizontal',
        options: []
    };
    return ToggleGroup;
}(React.Component));
export { ToggleGroup };
var templateObject_1, templateObject_2;
