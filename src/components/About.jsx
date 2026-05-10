import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="profil" className="about">
      <div className="container">
        <h2 className="section-title">Tentang TTIS-Bontang</h2>
        <div className="about-content">
          <p>
            <strong>TTIS-Bontang</strong> ( Tim Tanggap Insiden Siber) merupakan tim teknis sektor 
            Pemerintah Daerah Kota Bontang. Bertanggung jawab sebagai ketua TTIS-Bontang adalah 
            <strong> Kepala Dinas Komunikasi dan Informatika Kota Bontang</strong>.
          </p>
          <p>
            Dengan adanya TTIS-Bontang, organisasi diharapkan dapat menangani insiden keamanan siber secara cepat, 
            efektif, dan terkoordinasi. Layanan mencakup deteksi, respons, pemulihan, serta edukasi keamanan siber 
            bagi seluruh perangkat daerah dan masyarakat.
          </p>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>24/7 Monitoring</h3>
              <p>Pemantauan keamanan terus menerus</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Fast Response</h3>
              <p>Tanggap cepat terhadap insiden</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📚</div>
              <h3>Edukasi</h3>
              <p>Pelatihan keamanan siber</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

