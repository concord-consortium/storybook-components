import React from 'react'
import DropDown from '../components/drop-down'
export default {
  title: 'Clue Menu',
  parameters: {
    component: DropDown,
    componentSubtitle: 'Displays an image that represents a user or organization',
  },
}

const props = {
  title: 'Untitled Menu',
  selected: 0,
  items: [
    {text: '1.1 a'},
    {text: '1.2 b'},
    {text: '1.3 c'},
    {text: 'd item'}
  ]
}
export const shortNames = () => <DropDown {...props} />
export const defaultProps = () => <DropDown />
