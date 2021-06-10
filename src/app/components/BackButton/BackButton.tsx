import React from 'react';
import styles from './BackButton.module.css';
import { useHistory } from 'react-router-dom';
import BackIcon from '../Icons/BackIcon';

function BackButton(): JSX.Element {
  const history = useHistory();

  return (
    <button className={styles.backButton} onClick={() => history.goBack()}>
      <BackIcon />
      back
    </button>
  );
}

export default BackButton;
