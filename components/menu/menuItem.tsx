import React from 'react';
import {joinClass} from '../helper';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {children, style, className} = props;
  const classnames = joinClass('ice-menu-item', className);
  return <li className={classnames} style={style}>{children}</li>;
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
