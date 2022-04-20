import React from 'react';
import {joinClass} from '../helper';
import {useMenuContext} from './context';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {children, style, className, disabled} = props;
  const {index, onSelect} = useMenuContext();
  const classnames = joinClass('ice-menu-item', className, props.index === index ? 'is-active' : '', props.disabled ? 'is-disabled' : '');

  const handleClick = () => {
    if (!disabled && (typeof props.index === 'string')) {
      onSelect?.(props.index);
    }
  };

  return <li className={classnames} style={style} onClick={handleClick}>
    {children}
  </li>;
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
