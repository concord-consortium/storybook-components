import React from 'react'
import DropDown from '../components/drop-down'
export default {
  title: 'Clue Dropdown Menu',
  parameters: {
    component: DropDown,
    componentSubtitle: 'A dropdown menu used in clue.',
  },
}

export const defaultProps = () =>
  <DropDown
    title='test'
    items={[
      {text: '1. one'},
      {text: '2. two'},
      {text: '3. three'},
      {text: '4. four'},
    ]}/>

const props = {
  title: 'Untitled Menu',
  selected: 0,
  items: [
    {text: '1.1 Solving a Mystery: An Introduction to Similarity'},
    {text: '1.2 Stretching a Figure: Comparing Similar Figures'},
    {text: '1.3 Scaling Up and Down: Corresponding Sides and Angles'},
    {text: 'd item'}
  ]
}
export const clueSample = () => <DropDown {...props} />

