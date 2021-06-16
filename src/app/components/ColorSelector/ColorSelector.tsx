import React, { ReactNode } from 'react';

type ColorSelectorProps = {
  children: ReactNode;
};

function ColorSelector({ children }: ColorSelectorProps): JSX.Element {
  return (
    <label>
      <span>choose color</span>
      <select name="colorSelector" id="">
        {children}
      </select>
    </label>
  );
}

export default ColorSelector;
