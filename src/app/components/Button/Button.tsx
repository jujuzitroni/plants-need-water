import React, { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  onClick?: () => void;
  onSubmit?: () => void;
  children?: ReactNode;
  variant: 'submit' | 'delete';
};

function Button({
  onClick,
  onSubmit,
  children,
  variant,
}: ButtonProps): JSX.Element {
  return (
    <button className={styles[variant]} onSubmit={onSubmit} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
