import React from 'react';

import Avatar from '../../img/avatar.jpg';
import Img from '../../img/Img.jpg';

import './style.css';

const Blog = () => {
  return (
    <section id="blog" class="blog">
    <div class="center">
      <a href="blog" class="blog-post">
        <img src={Img} alt=""/>

        <div class="post-content">
          <img src={Avatar} class="avatar" alt=""/>

          <div class="post-text">
            <span class="date">
              <i class="fa fa-calendar-alt"></i>
                20 de agosto de 2020
            </span>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore aperiam praesentium. Exercitationem nobis pariatur, quo asperiores molestiae sint esse aspernatur voluptates quasi nam earum sit sed rem rerum nemo!</h3>
          </div>
        </div>

        <div class="post-footer">
          <span>LEIA MAIS <i class="fa fa-arrow-right"></i></span>
          <span><i class="fa fa-comments"></i> 16 comentários</span>
        </div>
      </a>

      <a href="blog" class="blog-post">
        <img src={Img} alt=""/>

        <div class="post-content">
          <img src={Avatar} class="avatar" alt=""/>

          <div class="post-text">
            <span class="date">
              <i class="fa fa-calendar-alt"></i>
                20 de agosto de 2020
            </span>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore aperiam praesentium. Exercitationem nobis pariatur, quo asperiores molestiae sint esse aspernatur voluptates quasi nam earum sit sed rem rerum nemo!</h3>
          </div>
        </div>

        <div class="post-footer">
          <span>LEIA MAIS <i class="fa fa-arrow-right"></i></span>
          <span><i class="fa fa-comments"></i> 16 comentários</span>
        </div>
      </a>

    </div>
  </section>
  )
}

export default Blog;