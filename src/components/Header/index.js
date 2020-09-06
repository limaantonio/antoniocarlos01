import React from 'react';

import Logo from '../../img/logo2.png'

import './style.css';

const Header = () => {
  return (
    <header>
      <div className="center">
          <img src={Logo} alt="Logo"/>

          <a href="#menu" class="menu">
            <i class="fa fa-bars"></i>
          </a>

          <nav>
              <a id="home" href="#home">Home</a>
              <a href="#about">Sobre</a>
              <a href="#tech">Portifólio</a>
              <a href="#blog">Blog</a>
              <a id="contato" href="#contatos">Contatos</a>
          </nav>
      </div>
    </header>
  )
}

export default Header;