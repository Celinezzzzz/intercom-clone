import React from 'react';
import './Header.scss'; 


const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__container-links">
          <a className="nav__icon" href="#">
            <img src="/src/assets/images/icon-1.jpg" alt="icon-1" />
          </a>
          <ul className="nav__list">
            <li className="nav__item"><a href="#" className="nav__link">Product</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Resources</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Pricing</a></li>
          </ul>
        </div>
        <div className="nav__container-actions">
          <a className="nav__icon nav__icon--hidden" href="#">
            <img src="./assets/images/icon-2.jpg" alt="icon-2" />
          </a>
          <ul className="nav__list">
            <li className="nav__item"><a href="#" className="nav__link">Contact sales</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Sign in</a></li>
            <li className="nav__item"><a href="#" className="nav__link">View demo</a></li>
            <li className="nav__item"><a href="#" className="nav__link nav__link--button">Start free trial</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
