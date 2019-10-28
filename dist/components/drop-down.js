"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var styled_components_1 = __importDefault(require("styled-components"));
var clue_1 = require("../themes/clue");
var Row = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-basis: 1;\n  align-self: stretch;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-basis: 1;\n  align-self: stretch;\n"])));
var DropDownButton = styled_components_1.default(Row)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 1em;\n"], ["\n  margin-left: 1em;\n"])));
var Column = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n"])));
var MenuItemDiv = styled_components_1.default(Row)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding:  6px;\n  margin: 0px;\n  align-self: stretch;\n  justify-content: flex-start;\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  padding:  6px;\n  margin: 0px;\n  align-self: stretch;\n  justify-content: flex-start;\n  &:hover {\n    background-color: ", ";\n  }\n"])), clue_1.Colors.Sage['sage-dark-1']);
var SelectedIndicator = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  /* content: ", "; */\n  width: 24px;\n  height: 24px;\n  font-size: 22px;\n  color: ", ";\n  ", ":hover & {\n    color: ", ";\n  }\n\n"], ["\n  /* content: ", "; */\n  width: 24px;\n  height: 24px;\n  font-size: 22px;\n  color: ",
    ";\n  ", ":hover & {\n    color: ", ";\n  }\n\n"])), function (p) { return p.selected ? '●' : ''; }, function (p) { return p.selected
    ? clue_1.Colors.Sage["sage-dark-3"]
    : 'hsla(0,0%,0%,0)'; }, MenuItemDiv, clue_1.Colors.Sage["sage-light-2"]);
var MenuItem = function (props) {
    var text = props.text, selected = props.selected, link = props.link, onClick = props.onClick;
    var handleClick = function () {
        if (onClick) {
            onClick(props);
        }
    };
    return (react_1.default.createElement(MenuItemDiv, { key: text, onClick: handleClick },
        react_1.default.createElement(SelectedIndicator, { selected: selected }, "\u25CF"),
        text));
};
var DropDownBack = styled_components_1.default(Column)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border-radius: 5px;\n  height: ", ";\n  box-shadow: ", ";\n  width: 296px;\n  background-color: ", ";\n  color: ", ";\n  font-family: Lato;\n  font-size: 13px;\n  padding: 4px;\n  &:hover {\n    background-color: ", ";\n  }\n  transition: 0.1s;\n"], ["\n  border-radius: 5px;\n  height: ", ";\n  box-shadow: ", ";\n  width: 296px;\n  background-color: ",
    ";\n  color: ", ";\n  font-family: Lato;\n  font-size: 13px;\n  padding: 4px;\n  &:hover {\n    background-color: ",
    ";\n  }\n  transition: 0.1s;\n"])), function (p) { return p.open ? 'auto' : '40px'; }, function (p) { return p.open ? '2px 2px 5px hsla(0, 10%, 10%, 0.3)' : 'none'; }, function (p) { return p.open
    ? clue_1.Colors.Sage['sage-light-2']
    : clue_1.Colors.Sage['sage-light-1']; }, clue_1.Colors.Sage['sage-text'], function (p) { return p.open
    ? clue_1.Colors.Sage['sage-light-2']
    : clue_1.Colors.Sage['sage']; });
var DisclosureWidgetContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n"], ["\n  width: 20px;\n  height: 20px;\n"])));
var DisclosureWidget = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  align-self: center;\n  text-align: center;\n  color: ", ";\n  transform: ", ";\n  transition-duration: 0.3s;\n"], ["\n  align-self: center;\n  text-align: center;\n  color: ", ";\n  transform: ", ";\n  transition-duration: 0.3s;\n"])), clue_1.Colors.Sage["sage-dark-3"], function (props) { return props.open ? 'rotate(180deg)' : 'rotate(0deg)'; });
var ItemsContainer = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  transition: all 0.3s;\n  overflow: hidden;\n  height: auto;\n  max-height: ", ";\n"], ["\n  transition: all 0.3s;\n  overflow: hidden;\n  height: auto;\n  max-height: ", ";\n"])), function (props) { return (props.open ? "300px" : "0px"); });
var DropDown = function (props) {
    var _a = react_1.useState(false), opened = _a[0], toggleOpen = _a[1];
    var toggle = function () { return toggleOpen(!opened); };
    var title = props.title, items = props.items, selected = props.selected;
    var displayTitle = selected != undefined && items[selected]
        ? items[selected].text
        : title;
    return (react_1.default.createElement(DropDownBack, { className: 'dropdown', open: opened, "aria-controls": 'menu' },
        react_1.default.createElement(DropDownButton, { onClick: toggle },
            react_1.default.createElement("div", null, displayTitle),
            react_1.default.createElement(DisclosureWidgetContainer, null,
                react_1.default.createElement(DisclosureWidget, { open: opened }, "\u25BC"))),
        react_1.default.createElement(ItemsContainer, { open: opened }, items.map(function (i, idx) { return react_1.default.createElement(MenuItem, __assign({ selected: idx == selected }, i)); }))));
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
var itemType = prop_types_1.default.shape({
    text: prop_types_1.default.string.isRequired,
    selected: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    link: prop_types_1.default.string,
    onClick: prop_types_1.default.func
});
DropDown.propTypes = {
    title: prop_types_1.default.string.isRequired,
    selected: prop_types_1.default.number,
};
/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
exports.default = DropDown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
