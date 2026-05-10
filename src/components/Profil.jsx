import React from 'react';
import './Profil.css';

const Profil = () => {
  return (
    <section id="profil" className="profil">
      <div className="container">
        <h2>Profil TTIS-Bontang</h2>
        <div className="profil-content">
          <p>
            <strong>TTIS-Bontang</strong> (Tim Tanggap Insiden Siber) merupakan tim teknis sektor 
            Pemerintah Daerah Kota Bontang. Bertanggung jawab sebagai ketua TTIS-Bontang adalah 
            <strong> Kepala Dinas Komunikasi dan Informatika Kota Bontang</strong>.
          </p>
          <p>
            Dengan adanya TTIS-Bontang, organisasi diharapkan dapat menangani insiden keamanan siber secara cepat, 
            efektif, dan terkoordinasi. Layanan mencakup deteksi, respons, pemulihan, serta edukasi keamanan siber 
            bagi seluruh perangkat daerah dan masyarakat.
          </p>
          <button className="btn btn-outline" style={{ marginTop: '20px' }}>Baca Selengkapnya →</button>
        </div>
      </div>
    </section>
  );
};

export default Profil;