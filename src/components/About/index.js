import React from 'react';

import Profile from '../../img/Profile.png';

import './style.css';

const About = () => {
  return (
    <div id="about" class="about">
      <div class="center">
        <img src={Profile} alt=""/>

        <div class="about-text">
          <h1>Sobre mim</h1>
          <p>Sou Antonio Carlos, tenho 24 anos, moro em Viçosa do Ceará. <br/><br/>
          Atualmente sou estudante de Ciência da Computação pelo IFCE, Campus Tianguá e trabalho com contabilidade no Instituto de Previdência de Viçosa do Ceará. 
          <br/><br/>Além disso sou desenvolvedor Full-Stack, ajudo empresas e pessoas a construirem sua presença na internet. 
          <br/><br/>Sou fascinado por programação e as minhas principias tecnologias são:</p>

          <ul>
            <li>
              <i class="fa fa-check"></i>
                React
            </li>
            <li>
              <i class="fa fa-check"> </i>
                React Native
            </li>

            <li>
              <i class="fa fa-check"></i>
                NodeJS
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;