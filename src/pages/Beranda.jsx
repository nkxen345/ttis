import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Beranda = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Selamat Datang di</h2>
            <h1>TTIS-WEB</h1>
            <p>Tim Tanggap Insiden Keamanan Siber Pemerintah Kota Bontang</p>
            <div className="hero-buttons">
              {/* Tombol Lapor Insiden - Langsung ke halaman Aduan */}
              <button 
                className="btn-hero btn-hero-primary" 
                onClick={() => navigate('/aduan')}
              >
                🛡️ Lapor Insiden
              </button>
              <button 
                className="btn-hero btn-hero-secondary" 
                onClick={() => navigate('/panduan')}
              >
                📖 Panduan Keamanan
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Tentang TTIS-WEB</h2>
          <div className="about-content">
            <p>
              <strong>TTIS-WEB</strong> (Tim Tanggap Insiden Siber) merupakan tim teknis sektor 
              Pemerintah Daerah Kota Bontang. Bertanggung jawab sebagai ketua TTIS-WEB adalah 
              <strong> Kepala Dinas Komunikasi dan Informatika Kota Bontang</strong>.
            </p>
            <p>
              Dengan adanya TTIS-WEB, organisasi diharapkan dapat menangani insiden keamanan siber secara cepat, 
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

      <section className="berita-section">
        <div className="container">
          <h2 className="section-title">Berita Terkini</h2>
          <div className="articles-grid">
            <div className="article-card">
              <div className="article-date">23 November 2024</div>
              <h3>BSSN Gelar Dukungan Solidaritas untuk Pegawai dan Taruna</h3>
              <p>Badan Siber dan Sandi Negara menggelar acara pemberian dukungan solidaritas kepada pegawai BSSN dan Taruna/i Politeknik Siber dan Sandi Negara...</p>
              <button className="btn-read-article">Baca Selengkapnya →</button>
            </div>
            <div className="article-card">
              <div className="article-date">22 November 2024</div>
              <h3>Kerja Sama BSSN dengan Kemen PPN/Bappenas</h3>
              <p>BSSN bersama Kementerian Perencanaan Pembangunan Nasional secara resmi menandatangani perjanjian kerja sama...</p>
              <button className="btn-read-article">Baca Selengkapnya →</button>
            </div>
            <div className="article-card">
              <div className="article-date">21 November 2024</div>
              <h3>Media Visit BSSN ke LKBN ANTARA</h3>
              <p>BSSN melakukan media visit ke LKBN ANTARA untuk memperkuat kolaborasi dalam penyebaran informasi keamanan siber...</p>
              <button className="btn-read-article">Baca Selengkapnya →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;