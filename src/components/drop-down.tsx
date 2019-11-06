import React from 'react'
import styled from 'styled-components'
import { Colors } from '../themes/clue'

export interface IMenuState {
  opened: boolean;
}

export interface IMenuProps {
  title: string
  selected?: number
  prefix?: string
  width?: number
  items: IMenuItemProps[]
}

export interface IMenuItemProps {
  text: string
  selected?: boolean
  disabled?: boolean
  link?: string
  onClick?: (source: IMenuItemProps) => void
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
  align-self: stretch;
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
  align-self: stretch;
  flex: 1;
  justify-content: flex-start;
  &:hover {
    background-color: ${Colors.Sage['sage-dark-1']};
  }
`

const SelectedIndicator = styled.div<any>`
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
const MenuItemText = styled.div`
  flex: 2;
  text-align: left;
`
const MenuItem: React.FC<IMenuItemProps> = (props: IMenuItemProps) => {
  const {text, selected, onClick} = props
  const handleClick = () => {
    if (onClick) {
      onClick(props);
    }
  }
  return (
    <MenuItemDiv key={text} onClick={handleClick}>
      <SelectedIndicator selected={selected}>●</SelectedIndicator>
      <MenuItemText>{text}</MenuItemText>
    </MenuItemDiv>
  )
}

const DropDownContainer = styled(Column)`
  max-height: 40px;
  overflow: visible;
`

const DropDownBack = styled(Column)<IDiscosureProps>`
  border-radius: 5px;
  height: ${(p:IDiscosureProps) => p.open ? 'auto' : '40px'};
  max-width: 250px;
  box-shadow: ${p => p.open ? '2px 2px 5px hsla(0, 10%, 10%, 0.3)' : 'none'};
  width: auto;
  background-color: ${(p:IDiscosureProps) => p.open
    ? Colors.Sage['sage-light-2']
    : Colors.Sage['sage-light-1']
  };
  color: ${Colors.Sage['sage-text']};
  font-family: Lato;
  font-size: 13px;
  padding: 4px;
  &:hover {
    background-color: ${(p:IDiscosureProps) => p.open
      ? Colors.Sage['sage-light-2']
      : Colors.Sage['sage-dark-2']
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
  transform: ${ (props:IDiscosureProps) => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition-duration: 0.3s;
`

const ItemsContainer = styled.div<IDiscosureProps>`
  transition: all 0.3s;
  height: auto;
  width: 100%;
  max-height: ${(props:IDiscosureProps) => (props.open ? "400px" : "0px")};
  overflow: ${(props:IDiscosureProps) => (props.open ? "auto" : "hidden")};
  -ms-overflow-style: none;
    scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`


export class DropDown extends React.Component<IMenuProps, IMenuState> {
  private innerRef: React.RefObject<HTMLDivElement>;
  static readonly displayName = 'DropDown'

  constructor(props: IMenuProps){
    super(props)
    this.state = {
      opened: false
    }
    this.innerRef = React.createRef();
  }

  toggleOpen = () => {
    this.setState({opened: !this.state.opened})
  }

  clickOutside = (event: any) => {
    const node = this.innerRef.current
      if (node && !node.contains(event.target)) {
        this.setState({opened: false})
      }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.clickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.clickOutside);
  }

  render() {
    const {title, items, prefix } = this.props
    const { opened } = this.state
    const selectedItem = items && items.find(i=> i.selected)
    const displayTitle = selectedItem
      ? selectedItem.text
      : title
    return (
      <DropDownContainer onClick={this.toggleOpen}>
        <DropDownBack
          ref={this.innerRef}
          className='dropdown'
          open={opened}
          aria-controls='menu'>
          <DropDownButton >
            { prefix
              ? <div><div>{prefix}</div><div>{displayTitle}</div></div>
              : <div>{displayTitle}</div>
            }
            <DisclosureWidgetContainer>
              <DisclosureWidget open={opened}>▼</DisclosureWidget>
            </DisclosureWidgetContainer>
          </DropDownButton>
          <ItemsContainer open={opened}>
            { items.map( (i, idx) =>
              <MenuItem {...i} key={idx}/>)
            }
          </ItemsContainer>
        </DropDownBack>
      </DropDownContainer>
    );
  }
}
