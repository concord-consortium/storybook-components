import React, {useState} from 'react';

interface IMenuItemProps {
  text: string
  selected?: boolean
  disabled?: boolean
  link?: string
  onClick?: (source: IMenuItemProps) => void
}

interface IMenuProps {
  title: string
  items: IMenuItemProps[]
}

const MenuItem: React.FC<IMenuItemProps> = (props: IMenuItemProps) => {
  const {text, selected, link, onClick} = props
  return (
    <div className='menuItem' key={text}>{text}</div>
  )
}

const Menu: React.FC<IMenuProps> = (props: IMenuProps) => {
  const [opened, toggleOpen] = useState(false)
  const toggle = () => toggleOpen(!opened)
  const {title, items} = props;
  return (
    <div className="menu">
      <div className="Menu" onClick={toggle}> {title} </div>
      { opened &&
        <div className="menuItems">
          { items.map(i => <MenuItem {...i}/>) }
        </div>
      }
    </div>
  );
}

Menu.defaultProps = {
  title: 'Untitled Menu',
  items: [
    {text: 'a item'},
    {text: 'b item'},
    {text: 'c item'},
    {text: 'd item'}
  ]
}

export default Menu;
