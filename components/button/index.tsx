import './button.scss';
import React from 'react';
import {joinClass} from '../helper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  effect?: 'primary' | 'success' | 'warning' | 'error' | 'info',
  variant?: 'outline' | 'ghost'
}

const Button: React.FC<ButtonProps> = (props) => {
  const {variant, effect, className, children, ...rest} = props;
  const classes = joinClass('ice-button', className, effect, variant);
  return (
    <button className={classes} {...rest}>{children}</button>
  );
};

export default Button;
