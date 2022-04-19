import React from 'react';
import {joinClass} from '../helper';
import MenuItem, {MenuItemProps} from './menuItem';

// 菜单类型 横向或竖向
type MenuMode = 'horizontal' | 'vertical';

interface MenuProps {
  /** 默认选中的菜单项 */
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  /** 点击菜单项出发的回调 */
  onSelect?: (selectedIndex: string) => void;
  /** 默认展开的子菜单项 （仅在纵向模式下生效） */
  defaultOpenSubMenus?: string[];
}

type MenuComponent = React.FC<MenuProps> & {
  Item: React.FC<MenuItemProps>;
};

const Menu: MenuComponent = (props) => {
  const {
    className,
    mode,
    style,
    children,
    // defaultIndex,
    // onSelect,
    // defaultOpenSubMenus,
  } = props;
  const classnames = joinClass('ice-menu', className, mode === 'horizontal' ? 'menu-horizontal' : 'menu-vertical');

  const renderChildren = () => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.map((child, index) => {
      if (typeof child === 'string') {
        console.error('Warning: Menu has a child which is string. string children are not supported');
        return null;
      }
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      index === 0 && console.log(childElement);
      const {displayName} = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component');
        return null;
      }
    });
  };

  return (
    <ul className={classnames} style={style}>
      {renderChildren()}
    </ul>
  );
};

Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex: '0',
  defaultOpenSubMenus: []
};

Menu.Item = MenuItem;
export default Menu;
