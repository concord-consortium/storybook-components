var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { ToggleGroup } from "../components/toggle-group";
import styled from "styled-components";
import { Themes } from "../themes";
var Colors = Themes.Clue;
var Header = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n"], ["\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n"])), Colors.Sage.sage);
export default {
    title: "Toggle Group",
    parameters: {
        component: ToggleGroup,
        componentSubtitle: "Clue Toggle Group (select 1 of n)",
    }
};
export var basicVertical = function () {
    return React.createElement(Header, null,
        React.createElement(ToggleGroup, { orientation: "vertical", options: [
                { label: "1. one", selected: false },
                { label: "2. two", selected: false },
                { label: "3. three", selected: true },
            ] }));
};
export var basicHorizontal = function () {
    return React.createElement(Header, null,
        React.createElement(ToggleGroup, { orientation: "horizontal", options: [
                { label: "1. one", selected: false },
                { label: "2. two", selected: true },
                { label: "3. three", selected: false }
            ] }));
};
export var cosutomColors = function () {
    var oddColors = {
        selectedColor: { color: "black", background: "white" },
        unselectedColor: { color: "white", background: "orange" },
        hoverColor: { color: "black", background: "yellow" }
    };
    var colors = {
        selectedColor: { color: "white", background: "red" },
        unselectedColor: { color: "white", background: "gray" },
        hoverColor: { color: "white", background: "blue" }
    };
    return (React.createElement(Header, null,
        React.createElement(ToggleGroup, { orientation: "vertical", colors: colors, options: [
                { label: "1. one", selected: false },
                { label: "2. two", selected: false, colors: oddColors },
                { label: "3. three", selected: true }
            ] })));
};
var templateObject_1;
