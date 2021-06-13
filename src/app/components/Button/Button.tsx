import React, { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  onClick: () => void;
  children?: ReactNode;
};

function Button({ onClick, children }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
