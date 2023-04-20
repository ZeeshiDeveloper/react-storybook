import React from 'react';

import Button from '@mui/material/Button';


export interface IButtonComponent {
  /**
   * Button caption
   */
  label: string;
  /**
   * click handler when button is pressed; use React Router Link component inside this handler to redirect the user from listing to add screen
   */
  onClick: () => void;
}

/**
 * Add button component used to redirect from listing page to the add screens
 */
export const ButtonComponent: React.FC<IButtonComponent> = ({
  label,
  onClick
}) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};
