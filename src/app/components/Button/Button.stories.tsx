import React from 'react';
import DeleteIcon from '../Icons/DeleteIcon';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const SubmitButton = (): JSX.Element => (
  <Button
    onClick={() => {
      console.log('clicked');
    }}
  >
    Add new habit
  </Button>
);

export const DeleteButton = (): JSX.Element => (
  <Button
    onClick={() => {
      console.log('clicked');
    }}
  >
    <DeleteIcon />
    Delete
  </Button>
);
