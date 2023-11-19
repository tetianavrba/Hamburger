import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const handleSelektItem = () => {
    setMenuOpened(false);
  };
  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <header>
        <div className={`menu ${menuOpened ? 'menu--open' : 'menu--closed'}`}>
          <button className="menu__btn" onClick={handleClick}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelektItem} />
            <MenuItem text="Naše nabídka" />
            <MenuItem text="Náš tým" onSelect={handleSelektItem} />
            <MenuItem text="Blog" onSelect={handleSelektItem} />
            <MenuItem text="Kontakt" onSelect={handleSelektItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};
