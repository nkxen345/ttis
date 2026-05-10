import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TTIS-Bontang</h3>
            <p>Tim Tanggap Insiden Siber</p>
            <p>Pemerintah Daerah Kota Bontang</p>
          </div>
          <div className="footer-section">
            <h4>Kontak Kami</h4>
            <p>📞 (0411) 1234567</p>
            <p>✉️ TTIS@bontang.go.id</p>
            <p>📍 Jl. Urip Sumoharjo No. 8, Bontang</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p> Alamat lengkap Dinas Komunikasi dan Informatika Kota Bontang (TTIS-Bontang) adalah Jalan 3C9W+VW9, Kelurahan Bontang Lestari, Kecamatan Bontang Selatan, Kota Bontang, Kalimantan Timur 75325. </p>
            <p> Telepon 24 jam / 7 hari (0822-8888-5678)</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TTIS-Bontang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;