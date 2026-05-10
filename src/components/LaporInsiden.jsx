import React from 'react';
import './LaporInsiden.css';

const LaporInsiden = () => {
  return (
    <section id="aduan" className="lapor">
      <div className="container">
        <h2>Lapor Insiden / Aduan</h2>
        <div className="lapor-box">
          <p>Laporkan kejadian keamanan siber yang Anda alami. Tim TTIS Bontang akan segera merespon.</p>
          <form>
            <input type="text" placeholder="Nama / Instansi" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="No. Telepon" />
            <textarea rows="5" placeholder="Deskripsikan insiden..."></textarea>
            <button type="submit" className="btn btn-primary">Kirim Laporan</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LaporInsiden;

