import React from 'react';
import Button from './Button';

import logoSvg from '../assets/img/pizza-logo.svg';
import { NavLink } from 'react-router-dom';
function Header(props) {
  return (
    <div className='header'>
      <div className='container'>
        <NavLink to='/'>
          <div className='header__logo'>
            <img width='38' src={logoSvg} alt='Pizza logo' />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </NavLink>
        <div className='header__cart'>
          <NavLink to='/cart'>
            <Button className='button--cart'></Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
