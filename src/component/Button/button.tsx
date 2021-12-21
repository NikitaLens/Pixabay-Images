import React from 'react';
import './button.scss';

export const Button = (props: { label: string, onClick: () => void}) => {
  const { label, onClick } = props;

  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}
