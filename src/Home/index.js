import React from 'react';

import './styles.css';

import Logo from '../img/logo2.png'

import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Portifolio from '../components/Portifolio';
import Blog from '../components/Blog';

function Home () {

  return (
   <>
    <Header/>
  
    <Banner/>
   
    <About/>
    
    <Portifolio/>
    
    <Blog/>
    <footer>
      <img src={Logo} alt=""/>
      <p>made with <i class="fa fa-heart"></i></p>
    </footer>
   </>
  )
}

export default Home;