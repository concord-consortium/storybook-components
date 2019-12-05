import React from 'react'
import styled from 'styled-components'
import { SalutationComp } from '../components/salutation-component'

export default {
  title: 'Simple Test Stories',
  parameters: {
    component: SalutationComp,
    componentSubtitle: 'Testing simple styled components'
  }
}

export const simpleLook = () => {
  return (
    <SalutationComp />
  )
}
export const redLook = () => {
  return (
    <SalutationComp color='red' />
  )
}

const StyledComp = styled(SalutationComp)`
  color: 'green';
  border: 2px solid;
`

export const styledLook = () => {
  return (
    <StyledComp className='styledLook' color='red' />
  )
}
