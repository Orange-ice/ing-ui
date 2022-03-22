import './button.scss';
import React from 'react';
import {joinClass} from '../helper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: 'gray' | 'blue' | 'orange' | 'red' | 'green',
  variant?: 'outline' | 'solid',
  size?: 'small' | 'default' | 'large'
}

const componentName = 'ice-button';

const Button: React.FC<ButtonProps> = (props) => {
  const {size, variant, colorScheme, className, children, ...rest} = props;
  const classes = joinClass(componentName, className, colorScheme, variant, size);
  return (
    <button className={classes} {...rest}>{children}</button>
  );
};

Button.displayName = componentName;
Button.defaultProps = {
  colorScheme: 'gray',
  variant: 'solid',
  size: 'default'
};

export default Button;
