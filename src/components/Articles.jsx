import React from 'react';
import './Articles.css';

const Articles = () => {
  const berita = [
    {
      id: 1,
      judul: "BSSN Gelar Dukungan Solidaritas untuk Pegawai dan Taruna",
      tanggal: "23 November 2024",
      deskripsi: "Badan Siber dan Sandi Negara menggelar acara pemberian dukungan solidaritas kepada pegawai BSSN dan Taruna/i Politeknik Siber..."
    },
    {
      id: 2,
      judul: "Kerja Sama BSSN dengan Kemen PPN/Bappenas",
      tanggal: "22 November 2024",
      deskripsi: "BSSN bersama Kementerian Perencanaan Pembangunan Nasional secara resmi menandatangani perjanjian kerja sama..."
    },
    {
      id: 3,
      judul: "Media Visit BSSN ke LKBN ANTARA",
      tanggal: "21 November 2024",
      deskripsi: "BSSN melakukan media visit ke LKBN ANTARA untuk memperkuat kolaborasi dalam penyebaran informasi keamanan siber..."
    }
  ];

  return (
    <section id="artikel" className="articles">
      <div className="container">
        <h2 className="section-title">Berita Terkini</h2>
        <div className="articles-grid">
          {berita.map(item => (
            <div key={item.id} className="article-card">
              <div className="article-date">{item.tanggal}</div>
              <h3>{item.judul}</h3>
              <p>{item.deskripsi}</p>
              <a href="#" className="read-more">Baca Selengkapnya →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;

