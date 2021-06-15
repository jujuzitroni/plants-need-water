import React, { ReactNode } from 'react';

type ColorSelectorProps = {
  children: ReactNode;
};

function ColorSelector({ children }: ColorSelectorProps): JSX.Element {
  return (
    <select name="colorSelector" id="">
      {children}
    </select>
  );
}

export default ColorSelector;
