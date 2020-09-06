import React from 'react';

import './style.css';

const Banner = () => {
  return (
    <div class="banner">
    <div class="back">
      <div class="banner-text">
      
        <h1>Antonio  Carlos</h1>
        <p id="cargo">Desenvolvedor</p>
       
          <div id="description">
            Ajudo <span className="bold"> empresas</span> e <span>pessoas</span> a contruirem seus sua presença online,
            através de soluções digitais. Conheça alguns dos meus <span>trabalhos</span>:
          </div>
      
          

        <div class="banner-links">
          <a href="https://bit.ly/Fale_comigo_wp" class="banner-btn">
            Fale comigo
            <i class="fa fa-comment"></i>
          </a>
        
        </div>
      </div>
      {/* <img src={Img} alt=""/> */}
      </div>
    </div>
  )
}

export default Banner;