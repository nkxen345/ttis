import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Selamat Datang di</h2>
          <h1>TTIS-Bontang</h1>
          <p>Tim Tanggap Insiden Keamanan Siber Pemerintah Kota Bontang</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Lapor Insiden</button>
            <button className="btn btn-outline">Panduan Keamanan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;