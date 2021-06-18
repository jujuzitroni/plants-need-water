import React, { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  variant: 'submit' | 'delete';
};

function Button({ onClick, children, variant }: ButtonProps): JSX.Element {
  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
