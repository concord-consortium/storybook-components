import React, {useState} from 'react'
import styled from 'styled-components'
import { Colors } from '../themes/clue'

interface IMenuItemProps {
  text: string
  selected?: boolean
  disabled?: boolean
  link?: string
  onClick?: (source: IMenuItemProps) => void
}

interface IMenuProps {
  title: string
  selected?: number
  items: IMenuItemProps[]
}

interface IDiscosureProps {
  open?: boolean;
}


const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-basis: 1;
`
const DropDownButton = styled(Row)`
  margin-left: 1em;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const MenuItemDiv = styled(Row)`
  padding:  6px;
  margin: 0px;
  justify-content: flex-start;
  &:hover {
    background-color: ${Colors.Sage['sage-dark-1']};
  }
`

const SelectedIndicator = styled.div<any>`
  /* content: ${p => p.selected ? '●' : ''}; */
  width: 24px;
  height: 24px;
  font-size: 22px;
  color: ${p => p.selected
    ? Colors.Sage["sage-dark-3"]
    : 'hsla(0,0%,0%,0)'
  };
  ${MenuItemDiv}:hover & {
    color: ${Colors.Sage["sage-light-2"]};
  }

`

const MenuItem: React.FC<IMenuItemProps> = (props: IMenuItemProps) => {
  const {text, selected, link, onClick} = props
  const handleClick = () => {
    if (onClick) {
      onClick(props);
    }
  }
  return (
    <MenuItemDiv key={text} onClick={handleClick}>
      <SelectedIndicator selected={selected}>●</SelectedIndicator>
      {text}
    </MenuItemDiv>
  )
}


const DropDownBack = styled(Column)<IDiscosureProps>`
  border-radius: 5px;
  height: ${p => p.open ? 'auto' : '40px'};
  box-shadow: ${p => p.open ? '2px 2px 5px hsla(0, 10%, 10%, 0.3)' : 'none'};
  width: 296px;
  background-color: ${p => p.open
    ? Colors.Sage['sage-light-2']
    : Colors.Sage['sage-light-1']
  };
  color: ${Colors.Sage['sage-text']};
  font-family: Lato;
  font-size: 13px;
  padding: 4px;
  &:hover {
    background-color: ${p => p.open
      ? Colors.Sage['sage-light-2']
      : Colors.Sage['sage']
    };
  }
  transition: 0.1s;
`
const DisclosureWidgetContainer = styled.div`
  width: 20px;
  height: 20px;
`

const DisclosureWidget = styled.div<IDiscosureProps>`
  align-self: center;
  text-align: center;
  color: ${ Colors.Sage["sage-dark-3"] };
  transform: ${ props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition-duration: 0.3s;
`

const ItemsContainer = styled.div<IDiscosureProps>`
  transition: all 0.3s;
  overflow: hidden;
  height: auto;
  max-height: ${props => (props.open ? "300px" : "0px")};
`

const DropDown: React.FC<IMenuProps> = (props: IMenuProps) => {
  const [opened, toggleOpen] = useState(false)
  const toggle = () => toggleOpen(!opened)
  const {title, items, selected} = props;
  const displayTitle = selected != undefined && items[selected]
    ? items[selected].text
    : title
  return (
    <DropDownBack className='dropdown' open={opened}aria-controls='menu'>
      <DropDownButton onClick={toggle}>
        <div>{displayTitle}</div>
        <DisclosureWidgetContainer>
          <DisclosureWidget open={opened}>▼</DisclosureWidget>
        </DisclosureWidgetContainer>
      </DropDownButton>
      <ItemsContainer open={opened}>
        { items.map( (i,idx) => <MenuItem selected={idx == selected} {...i}/>) }
      </ItemsContainer>
    </DropDownBack>
  );
}

DropDown.defaultProps = {
  title: 'Untitled Menu',
  selected: 0,
  items: [
    {text: '1.1 Solving a Mystery: An Introduction to Similarity'},
    {text: '1.2 Stretching a Figure: Comparing Similar Figures'},
    {text: '1.3 Scaling Up and Down: Corresponding Sides and Angles'},
    {text: 'd item'}
  ]
}

export default DropDown;
