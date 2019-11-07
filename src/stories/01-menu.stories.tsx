import React from 'react'
import { DropDown } from '../components/drop-down'
import styled from 'styled-components'
import { Themes } from '../themes'

const Colors = Themes.Clue;

export default {
  title: 'Clue Dropdown Menu',
  parameters: {
    component: DropDown,
    componentSubtitle: 'A dropdown menu used in clue.'
  }
}

export const shortNames = () =>
  <DropDown
    title='test'
    items={[
      {text: '1. one'},
      {text: '2. two'},
      {text: '3. three'},
      {text: '4. four'},
    ]}
  />
  export const withPrefix = () =>
  <DropDown
    title='test'
    prefix='prefix'
    items={[
      {text: '1. one'},
      {text: '2. two'},
      {text: '3. three'},
      {text: '4. four'},
    ]}
  />


export const clueMenu = () =>
  <DropDown
    title='test'
    items={[
      {text: '1.1 Solving a Mystery: An Introduction to Similarity'},
      {text: '1.2 Stretching a Figure: Comparing Similar Figures'},
      {text: '1.3 Scaling Up and Down: Corresponding Sides and Angles'},
      {text: 'd item'}
    ]}
  />

  export const narrow = () =>
  <DropDown
    title='test'
    width={200}
    items={[
      {text: '1.1 Solving a Mystery: An Introduction to Similarity'},
      {text: '1.2 Stretching a Figure: Comparing Similar Figures'},
      {text: '1.3 Scaling Up and Down: Corresponding Sides and Angles'},
      {text: 'd item'}
    ]}
  />

  const Header = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.Sage.sage};
  `

  export const inClueHeader = () =>
    <Header>
      <DropDown
        title='test'
        width={200}
        items={[
          {text: '1.1 Solving a Mystery: An Introduction to Similarity'},
          {
            text: '1.2 Stretching a Figure: Comparing Similar Figures',
            selected: true,
          },
          {text: '1.3 Scaling Up and Down: Corresponding Sides and Angles'},
          {text: 'd item'}
        ]}
      />
    </Header>

  export const emptyList = () =>
    <Header>
      <DropDown
        title='test'
        width={200}
        items={[]}
      />
    </Header>
