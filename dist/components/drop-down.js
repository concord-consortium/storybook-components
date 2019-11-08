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
import React from "react";
import styled from "styled-components";
import { Themes } from "../themes";
var Colors = Themes.Clue;
var Row = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-basis: 1;\n  align-self: stretch;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-basis: 1;\n  align-self: stretch;\n"])));
var DropDownButton = styled(Row)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 1em;\n"], ["\n  margin-left: 1em;\n"])));
var Column = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n"])));
var MenuItemDiv = styled(Row)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding:  6px;\n  margin: 0px;\n  align-self: stretch;\n  flex: 1;\n  justify-content: flex-start;\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  padding:  6px;\n  margin: 0px;\n  align-self: stretch;\n  flex: 1;\n  justify-content: flex-start;\n  &:hover {\n    background-color: ", ";\n  }\n"])), Colors.Sage["sage-dark-1"]);
var SelectedIndicator = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  font-size: 22px;\n  color: ", ";\n  ", ":hover & {\n    color: ", ";\n  }\n\n"], ["\n  width: 24px;\n  height: 24px;\n  font-size: 22px;\n  color: ",
    ";\n  ", ":hover & {\n    color: ", ";\n  }\n\n"])), function (p) { return p.selected
    ? Colors.Sage["sage-dark-3"]
    : "hsla(0,0%,0%,0)"; }, MenuItemDiv, Colors.Sage["sage-light-2"]);
var MenuItemText = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: 2;\n  text-align: left;\n"], ["\n  flex: 2;\n  text-align: left;\n"])));
var MenuItem = function (props) {
    var text = props.text, selected = props.selected, onClick = props.onClick;
    var handleClick = function () {
        if (onClick) {
            onClick(props);
        }
    };
    return (React.createElement(MenuItemDiv, { className: "Menuitem", key: text, onClick: handleClick },
        React.createElement(SelectedIndicator, { selected: selected }, "\u25CF"),
        React.createElement(MenuItemText, null, text)));
};
var DropDownContainer = styled(Column)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  max-height: 40px;\n  overflow: visible;\n"], ["\n  max-height: 40px;\n  overflow: visible;\n"])));
var DropDownBack = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  border-radius: 5px;\n  height: ", ";\n  max-width: 250px;\n  box-shadow: ", ";\n  width: auto;\n  background-color: ", ";\n  color: ", ";\n  font-family: Lato;\n  font-size: 13px;\n  padding: 4px;\n  &:hover {\n    background-color: ", ";\n  }\n  transition: 0.1s;\n"], ["\n  border-radius: 5px;\n  height: ", ";\n  max-width: 250px;\n  box-shadow: ", ";\n  width: auto;\n  background-color: ",
    ";\n  color: ", ";\n  font-family: Lato;\n  font-size: 13px;\n  padding: 4px;\n  &:hover {\n    background-color: ",
    ";\n  }\n  transition: 0.1s;\n"])), function (p) { return p.open ? "auto" : "40px"; }, function (p) { return p.open ? "2px 2px 5px hsla(0, 10%, 10%, 0.3)" : "none"; }, function (p) { return p.open
    ? Colors.Sage["sage-light-2"]
    : Colors.Sage["sage-light-1"]; }, Colors.Sage["sage-text"], function (p) { return p.open
    ? Colors.Sage["sage-light-2"]
    : Colors.Sage["sage-dark-2"]; });
var DisclosureWidgetContainer = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n"], ["\n  width: 20px;\n  height: 20px;\n"])));
var DisclosureWidget = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  align-self: center;\n  text-align: center;\n  color: ", ";\n  transform: ", ";\n  transition-duration: 0.3s;\n"], ["\n  align-self: center;\n  text-align: center;\n  color: ", ";\n  transform: ", ";\n  transition-duration: 0.3s;\n"])), Colors.Sage["sage-dark-3"], function (props) { return props.open ? "rotate(180deg)" : "rotate(0deg)"; });
var ItemsContainer = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  transition: all 0.3s;\n  height: auto;\n  width: 100%;\n  max-height: ", ";\n  overflow: ", ";\n  -ms-overflow-style: none;\n    scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  transition: all 0.3s;\n  height: auto;\n  width: 100%;\n  max-height: ", ";\n  overflow: ", ";\n  -ms-overflow-style: none;\n    scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])), function (props) { return (props.open ? "400px" : "0px"); }, function (props) { return (props.open ? "auto" : "hidden"); });
var DropDown = /** @class */ (function (_super) {
    __extends(DropDown, _super);
    function DropDown(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleOpen = function () {
            _this.setState({ opened: !_this.state.opened });
        };
        _this.clickOutside = function (event) {
            var node = _this.innerRef.current;
            if (node && !node.contains(event.target)) {
                _this.setState({ opened: false });
            }
        };
        _this.state = {
            opened: false
        };
        _this.innerRef = React.createRef();
        return _this;
    }
    DropDown.prototype.componentDidMount = function () {
        document.addEventListener("mousedown", this.clickOutside);
    };
    DropDown.prototype.componentWillUnmount = function () {
        document.removeEventListener("mousedown", this.clickOutside);
    };
    DropDown.prototype.render = function () {
        var _a = this.props, title = _a.title, items = _a.items, prefix = _a.prefix;
        var opened = this.state.opened;
        var selectedItem = items && items.find(function (i) { return i.selected; });
        var displayTitle = selectedItem
            ? selectedItem.text
            : title;
        return (React.createElement(DropDownContainer, { onClick: this.toggleOpen },
            React.createElement(DropDownBack, { ref: this.innerRef, className: "dropdown", open: opened, "aria-controls": "menu" },
                React.createElement(DropDownButton, null,
                    prefix
                        ? React.createElement("div", null,
                            React.createElement("div", null, prefix),
                            React.createElement("div", null, displayTitle))
                        : React.createElement("div", null, displayTitle),
                    React.createElement(DisclosureWidgetContainer, null,
                        React.createElement(DisclosureWidget, { open: opened }, "\u25BC"))),
                React.createElement(ItemsContainer, { open: opened }, items.map(function (i, idx) {
                    return React.createElement(MenuItem, __assign({}, i, { key: idx }));
                })))));
    };
    DropDown.displayName = "DropDown";
    return DropDown;
}(React.Component));
export { DropDown };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
