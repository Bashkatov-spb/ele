import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/"><div className="header__logo">eZ</div></Link>
        <div className="header__btn-menu">
          <div className="header__btn-burger"></div>
        </div>
        <nav className="header__menu">
          <ul className="header__list">
            <Link to="/test"><li className="header__item">item 1</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;