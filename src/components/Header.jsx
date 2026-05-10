import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <div className="logo-area">
            <img 
              src="/logocsirt.png" 
              alt="Logo CSIRT-WEB" 
              className="logo-icon" 
            />
            <div className="logo-text">
              <h1>TTIS-Bontang</h1>
              <p> Tim Tanggap Insiden Siber</p>
              <p className="subtitle">Pemerintah Daerah Kota Bontang</p>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;