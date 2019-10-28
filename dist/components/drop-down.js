var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../themes/clue';
var Row = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-basis: 1;\n  align-self: stretch;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-basis: 1;\n  align-self: stretch;\n"])));
var DropDownButton = styled(Row)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 1em;\n"], ["\n  margin-left: 1em;\n"])));
var Column = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n"])));
var MenuItemDiv = styled(Row)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding:  6px;\n  margin: 0px;\n  align-self: stretch;\n  flex: 1;\n  justify-content: flex-start;\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  padding:  6px;\n  margin: 0px;\n  align-self: stretch;\n  flex: 1;\n  justify-content: flex-start;\n  &:hover {\n    background-color: ", ";\n  }\n"])), Colors.Sage['sage-dark-1']);
var SelectedIndicator = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  /* content: ", "; */\n  width: 24px;\n  height: 24px;\n  font-size: 22px;\n  color: ", ";\n  ", ":hover & {\n    color: ", ";\n  }\n\n"], ["\n  /* content: ", "; */\n  width: 24px;\n  height: 24px;\n  font-size: 22px;\n  color: ",
    ";\n  ", ":hover & {\n    color: ", ";\n  }\n\n"])), function (p) { return p.selected ? '●' : ''; }, function (p) { return p.selected
    ? Colors.Sage["sage-dark-3"]
    : 'hsla(0,0%,0%,0)'; }, MenuItemDiv, Colors.Sage["sage-light-2"]);
var MenuItem = function (props) {
    var text = props.text, selected = props.selected, link = props.link, onClick = props.onClick;
    var handleClick = function () {
        if (onClick) {
            onClick(props);
        }
    };
    return (React.createElement(MenuItemDiv, { key: text, onClick: handleClick },
        React.createElement(SelectedIndicator, { selected: selected }, "\u25CF"),
        text));
};
var DropDownContainer = styled(Column)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 40px;\n  overflow: visible;\n"], ["\n  height: 40px;\n  overflow: visible;\n"])));
var DropDownBack = styled(Column)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border-radius: 5px;\n  height: ", ";\n  /* height: 40px; */\n  box-shadow: ", ";\n  width: auto;\n  background-color: ", ";\n  color: ", ";\n  font-family: Lato;\n  font-size: 13px;\n  padding: 4px;\n  &:hover {\n    background-color: ", ";\n  }\n  transition: 0.1s;\n"], ["\n  border-radius: 5px;\n  height: ", ";\n  /* height: 40px; */\n  box-shadow: ", ";\n  width: auto;\n  background-color: ",
    ";\n  color: ", ";\n  font-family: Lato;\n  font-size: 13px;\n  padding: 4px;\n  &:hover {\n    background-color: ",
    ";\n  }\n  transition: 0.1s;\n"])), function (p) { return p.open ? 'auto' : '40px'; }, function (p) { return p.open ? '2px 2px 5px hsla(0, 10%, 10%, 0.3)' : 'none'; }, function (p) { return p.open
    ? Colors.Sage['sage-light-2']
    : Colors.Sage['sage-light-1']; }, Colors.Sage['sage-text'], function (p) { return p.open
    ? Colors.Sage['sage-light-2']
    : Colors.Sage['sage-dark-2']; });
var DisclosureWidgetContainer = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n"], ["\n  width: 20px;\n  height: 20px;\n"])));
var DisclosureWidget = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  align-self: center;\n  text-align: center;\n  color: ", ";\n  transform: ", ";\n  transition-duration: 0.3s;\n"], ["\n  align-self: center;\n  text-align: center;\n  color: ", ";\n  transform: ", ";\n  transition-duration: 0.3s;\n"])), Colors.Sage["sage-dark-3"], function (props) { return props.open ? 'rotate(180deg)' : 'rotate(0deg)'; });
var ItemsContainer = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  transition: all 0.3s;\n  overflow: hidden;\n  height: auto;\n  width: 100%;\n  max-height: ", ";\n"], ["\n  transition: all 0.3s;\n  overflow: hidden;\n  height: auto;\n  width: 100%;\n  max-height: ", ";\n"])), function (props) { return (props.open ? "300px" : "0px"); });
var DropDown = function (props) {
    var _a = useState(false), opened = _a[0], toggleOpen = _a[1];
    var toggle = function () { return toggleOpen(!opened); };
    var title = props.title, items = props.items, selected = props.selected;
    var clickHandler = function (i) {
        toggle();
        if (i.onClick) {
            i.onClick(i);
        }
        else if (i.link) {
            console.log("link clicked " + i.link);
        }
    };
    var displayTitle = selected != undefined && items[selected]
        ? items[selected].text
        : title;
    return (React.createElement(DropDownContainer, null,
        React.createElement(DropDownBack, { className: 'dropdown', open: opened, "aria-controls": 'menu' },
            React.createElement(DropDownButton, { onClick: toggle },
                React.createElement("div", null, displayTitle),
                React.createElement(DisclosureWidgetContainer, null,
                    React.createElement(DisclosureWidget, { open: opened }, "\u25BC"))),
            React.createElement(ItemsContainer, { open: opened }, items.map(function (i, idx) {
                return React.createElement(MenuItem, __assign({}, i, { onClick: clickHandler, selected: idx == selected }));
            })))));
};
DropDown.defaultProps = {
    title: 'Dropdown Menu',
    selected: 0,
    items: [
        { text: '1. first item' },
        { text: '2. second item' },
        { text: '3. third item' },
        { text: '4. fouth item' }
    ]
};
/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export default DropDown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
