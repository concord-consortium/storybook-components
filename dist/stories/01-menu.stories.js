var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { DropDown } from '../components/drop-down';
import styled from 'styled-components';
import { Colors } from '../themes/clue';
export default {
    title: 'Clue Dropdown Menu',
    parameters: {
        component: DropDown,
        componentSubtitle: 'A dropdown menu used in clue.',
    },
};
export var shortNames = function () {
    return React.createElement(DropDown, { title: 'test', items: [
            { text: '1. one' },
            { text: '2. two' },
            { text: '3. three' },
            { text: '4. four' },
        ] });
};
export var withPrefix = function () {
    return React.createElement(DropDown, { title: 'test', prefix: 'prefix', items: [
            { text: '1. one' },
            { text: '2. two' },
            { text: '3. three' },
            { text: '4. four' },
        ] });
};
export var clueMenu = function () {
    return React.createElement(DropDown, { title: 'test', items: [
            { text: '1.1 Solving a Mystery: An Introduction to Similarity' },
            { text: '1.2 Stretching a Figure: Comparing Similar Figures' },
            { text: '1.3 Scaling Up and Down: Corresponding Sides and Angles' },
            { text: 'd item' }
        ] });
};
export var narrow = function () {
    return React.createElement(DropDown, { title: 'test', width: 200, items: [
            { text: '1.1 Solving a Mystery: An Introduction to Similarity' },
            { text: '1.2 Stretching a Figure: Comparing Similar Figures' },
            { text: '1.3 Scaling Up and Down: Corresponding Sides and Angles' },
            { text: 'd item' }
        ] });
};
var Header = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    height: 60px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    background-color: ", ";\n  "], ["\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    height: 60px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    background-color: ", ";\n  "])), Colors.Sage.sage);
export var inClueHeader = function () {
    return React.createElement(Header, null,
        React.createElement(DropDown, { title: 'test', width: 200, items: [
                { text: '1.1 Solving a Mystery: An Introduction to Similarity' },
                {
                    text: '1.2 Stretching a Figure: Comparing Similar Figures',
                    selected: true,
                },
                { text: '1.3 Scaling Up and Down: Corresponding Sides and Angles' },
                { text: 'd item' }
            ] }));
};
var templateObject_1;
