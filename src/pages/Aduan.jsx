import React, { useState } from 'react';
import './Pages.css';

const Aduan = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    instansi: '',
    deskripsi: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Laporan insiden Anda telah dikirim! Tim kami akan segera merespon.');
    setFormData({ nama: '', email: '', telepon: '', instansi: '', deskripsi: '' });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Aduan & Lapor Insiden</h1>
          <p>Laporkan kejadian keamanan siber yang Anda alami</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="aduan-grid">
            <div className="aduan-info">
              <h3>📋 Panduan Pelaporan</h3>
              <ul>
                <li>Laporkan insiden sesegera mungkin</li>
                <li>Sertakan bukti pendukung jika ada</li>
                <li>Jelaskan kronologi kejadian dengan detail</li>
                <li>Data Anda akan dijaga kerahasiaannya</li>
              </ul>

            </div>

            <div className="aduan-form">
              <h3>Form Laporan Insiden</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="nama" placeholder="Nama Lengkap" value={formData.nama} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="telepon" placeholder="No. Telepon" value={formData.telepon} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="instansi" placeholder="Instansi / Perusahaan" value={formData.instansi} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <textarea name="deskripsi" rows="6" placeholder="Deskripsikan insiden yang terjadi (jenis serangan, waktu kejadian, dampak, dll)" value={formData.deskripsi} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Kirim Laporan</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aduan;

