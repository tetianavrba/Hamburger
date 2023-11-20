import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');
  const handleSelectItem = (page) => {
    setMenuOpened(false);
    setPageTitle(page);
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
            <MenuItem text="Domů" onSelect={() => handleSelectItem('Domů')} />
            <MenuItem
              text="Naše nabídka"
              onSelect={() => handleSelectItem('Naše nabídka')}
            />
            <MenuItem
              text="Náš tým"
              onSelect={() => handleSelectItem('Náš tým')}
            />
            <MenuItem text="Blog" onSelect={() => handleSelectItem('Blog')} />
            <MenuItem
              text="Kontakt"
              onSelect={() => handleSelectItem('Kontakt')}
            />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};
