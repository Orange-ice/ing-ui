import React from 'react';
import type {MenuMode} from './index';

export interface MenuContextProps {
  index: string;
  onSelect?: (index: string) => void;
  mode?: MenuMode,
  defaultOpenSubMenus?: string[];
}

const MenuContext = React.createContext<MenuContextProps>({
  index: '0'
});

export const useMenuContext = () => React.useContext(MenuContext);

export default MenuContext;
