import React from 'react';
import './Pages.css';

const Profil = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Profil TTIS-Bontang</h1>
          <p>Tim Tanggap Insiden Siber</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="profil-card">
            
            {/* Bagian 1: Definisi & Dasar Hukum */}
            <div className="profil-block">
              <h2>Profil TTIS-Bontang</h2>
              <p>
                <strong>TTIS-Bontang</strong> (Tim Tanggap Insiden Siber) adalah tim teknis sektor 
                Pemerintah Daerah Kota Bontang yang dibentuk berdasarkan 
                <strong> Keputusan Walikota Bontang Nomor: 000.1.1/KEP123-DISKOMINFO/2024</strong> tentang Pembentukan Tim Tanggap 
                Insiden Siber Pemerintah Daerah Kota Bontang.
              </p>
              <p>
                TTIS-Bontang bertugas untuk menangani, mengoordinasikan, dan memulihkan layanan teknologi informasi 
                di lingkungan Pemerintah Kota Bontang apabila terjadi insiden atau gangguan keamanan siber.
              </p>
              <p>
                <strong>Ketua TTIS-Bontang</strong> adalah Kepala Dinas Komunikasi dan Informatika Kota Bontang, 
                dengan anggota yang tercantum dalam Keputusan Walikota Bontang tersebut.
              </p>
            </div>

            {/* Bagian 2: Tujuan Pembentukan */}
            <div className="profil-block">
              <h2>Tujuan Pembentukan TTIS-Bontang</h2>
              <ol>
                <li>
                  Membangun, mengoordinasikan, mengkolaborasikan, dan mengoperasionalkan sistem mitigasi, 
                  manajemen krisis, penanggulangan, dan pemulihan terhadap insiden keamanan siber pada sektor 
                  Pemerintah Kota Bontang.
                </li>
                <li>
                  Meningkatkan kapasitas sumber daya dalam penanggulangan dan pemulihan insiden keamanan siber 
                  di lingkungan Pemerintah Kota Bontang.
                </li>
                <li>
                  Menyediakan layanan respons cepat dan terintegrasi untuk menangani berbagai jenis ancaman siber 
                  yang menargetkan infrastruktur digital pemerintah daerah.
                </li>
              </ol>
            </div>

            {/* Bagian 3: Konstituen */}
            <div className="profil-block">
              <h2>Konstituen</h2>
              <p>
                Seluruh Perangkat Daerah di lingkungan Pemerintah Kota Bontang yang menggunakan layanan 
                Data Center Pemerintah Kota Bontang, serta instansi vertikal dan masyarakat umum yang 
                menggunakan layanan digital Pemerintah Kota Bontang.
              </p>
            </div>

            {/* Bagian 4: Layanan TTIS-Bontang */}
            <div className="profil-block">
              <h2>Layanan TTIS-Bontang</h2>
              <p>
                TTIS-Bontang memberikan layanan penanganan insiden keamanan siber yang meliputi:
              </p>
              <ul>
                <li><strong>Penerimaan Laporan</strong> - Menerima dan memverifikasi laporan insiden dari konstituen</li>
                <li><strong>Triage & Klasifikasi</strong> - Mengelompokkan insiden berdasarkan tingkat keparahan</li>
                <li><strong>Inspeksi & Analisis</strong> - Melakukan investigasi awal dan analisis dampak insiden</li>
                <li><strong>Koordinasi Insiden</strong> - Berkoordinasi dengan TTIS lain dan BSSN</li>
                <li><strong>Resolusi & Pemulihan</strong> - Membantu pemulihan sistem dan pencegahan terulangnya insiden</li>
                <li><strong>Edukasi & Peringatan Dini</strong> - Memberikan sosialisasi dan peringatan ancaman siber</li>
              </ul>
            </div>

            {/* Bagian 5: Dasar Hukum */}
            <div className="profil-block">
              <h2>Dasar Hukum</h2>
              <ul>
                <li>Peraturan Walikota Bontang Nomor ... Tahun ... tentang Penyelenggaraan Keamanan Siber</li>
                <li>Keputusan Walikota Bontang Nomor: 000.1.1/KEP123-DISKOMINFO/2024 tentang Pembentukan Tim Tanggap Insiden Siber Pemerintah Daerah Kota Bontang</li>
                <li>Peraturan BSSN Nomor ... Tahun ... tentang Pedoman TTIS Pemerintah Daerah</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Profil;

