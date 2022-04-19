import React from 'react';

export interface MenuItemProps {
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {children} = props;
  return <li>{children}</li>;
};

export default MenuItem;
