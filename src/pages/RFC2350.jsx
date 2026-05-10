import React from 'react';
import './Pages.css';

const RFC2350 = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>RFC2350</h1>
          <p>Dokumentasi TTIS sesuai standar RFC2350</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="rfc-content">
            <h2>1. Pendahuluan</h2>
            <p>TTIS-Bontang adalah tim teknis sektor Pemerintah Kota Bontang yang dibentuk berdasarkan Peraturan Walikota Nomor ... Tahun ...</p>

            <h2>2. Misi</h2>
            <p>Melindungi infrastruktur digital dan data Pemerintah Kota Bontang dari ancaman siber melalui layanan respons insiden yang cepat, efektif, dan profesional.</p>

            <h2>3. Konsituensi</h2>
            <p>Penerima layanan TTIS-Bontang meliputi seluruh perangkat daerah di lingkungan Pemerintah Kota Bontang dan masyarakat umum.</p>

            <h2>4. Jenis Layanan</h2>
            <ul>
              <li>Layanan Respons Insiden (Incident Response)</li>
              <li>Layanan Peringatan Dini (Early Warning)</li>
              <li>Layanan Analisis (Analysis Service)</li>
              <li>Layanan Edukasi (Education Service)</li>
            </ul>

            <h2>5. Kontak</h2>
            <p>Email: ttis@Bontang.go.id<br/>
            Telepon: (0411) 1234567<br/>
            Darurat 24 jam: 0822-9999-1234</p>

            <h2>Unduh Dokumen Lengkap</h2>
            <button className="btn btn-primary">📄 Download RFC2350 (PDF)</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RFC2350;

