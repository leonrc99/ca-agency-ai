import React from 'react';
import './Banner.css';
import BannerImage from '../../assets/main-banner.png'; // Certifique-se de que o caminho está correto

function Banner() {
  return (
    <section className="banner">
      <img src={BannerImage} alt="Banner da Agência" />
    </section>
  )
}

export default Banner