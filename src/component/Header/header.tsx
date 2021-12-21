import React, { useRef } from 'react';
import './header.scss';
import { Button }  from '../Button/button';

export const Header = (props: { onClick: (value?: string) => void }) => {
  const refSearch = useRef<HTMLInputElement>(null);

  const { onClick } = props;

  return (
    <header className="header">
        Find your images
        <div className="search-panel">
          <input className="search-input" ref={refSearch} type="text" placeholder="What do you want to find?" />
          <Button label="Search" onClick={() => onClick(refSearch.current?.value)} />
        </div>
    </header>
  );
}
