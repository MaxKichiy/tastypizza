import React from 'react';
import Button from './Button';

import logoSvg from '../assets/img/pizza-logo.svg';
function Header(props) {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <img width='38' src={logoSvg} alt='Pizza logo' />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className='header__cart'>
          <Button className='button--cart'></Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
