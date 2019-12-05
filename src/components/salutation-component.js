import * as React from 'react'
import styled from 'styled-components'

const Name = styled.span`
  font-weight: bold;
`

const Salutation = styled.span`
  color: 'dark-gray';
`

const SalutationWrapper = styled.div`
  box-shadow: 1px 1px 5px hsla(0,0%,0%, 0.5);
  font-size: 20pt;
  border-radius: .3em;
  width: 200px;
  padding: 1em;
  ${Name} {
    color: ${p => p.color ? p.color : 'gray'};
  }
`

export class SalutationComp extends React.Component {
  render () {
    const { salutation = 'Hello', name = 'Concord', color } = this.props
    return (
      <SalutationWrapper {... this.props}>
        <Salutation> {salutation} </Salutation>
        <Name color={color}> {name}</Name> !
      </SalutationWrapper>
    )
  }
}

