import React, { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  onClick: () => void;
  children: ReactNode;
};

function Button({ text, onClick, children }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
      <span className={styles.button__text}>{text}</span>
    </button>
  );
}

export default Button;
