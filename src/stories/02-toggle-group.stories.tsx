import React from "react";
import { IToggleColors, ToggleGroup } from "../components/toggle-group";
import styled from "styled-components";
import { Themes } from "../themes";

const Colors = Themes.Clue;

const Header = styled.div`
  min-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Sage.sage};
`;

export default {
  title: "Toggle Group",
  parameters: {
    component: ToggleGroup,
    componentSubtitle: "Clue Toggle Group (select 1 of n)",
  }
};

export const basicVertical = () =>
  <Header>
    <ToggleGroup
      orientation="vertical"
      options={[
        {label: "1. one", selected: false},
        {label: "2. two", selected: false},
        {label: "3. three", selected: true},
      ]}
    />
  </Header>;

export const basicHorizontal = () =>
  <Header>
    <ToggleGroup
      orientation="horizontal"
      options={[
        {label: "1. one", selected: false},
        {label: "2. two", selected: true},
        {label: "3. three", selected: false}
      ]}
    />
  </Header>;

export const customColors = () => {
  const oddColors: IToggleColors = {
    selectedColor: {color: "black", background: "white"},
    unselectedColor: {color: "white", background: "orange"},
    hoverColor: {color: "black", background: "yellow"}
  };

  const colors: IToggleColors = {
    selectedColor: {color: "white", background: "red"},
    unselectedColor: {color: "white", background: "gray"},
    hoverColor: {color: "white", background: "blue"}
  };

  return(
    <Header>
      <ToggleGroup
        orientation="vertical"
        colors={colors}
        options={[
          {label: "1. one", selected: false},
          {label: "2. two", selected: false, colors: oddColors},
          {label: "3. three", selected: true}
        ]}
      />
    </Header>
  );
};
