import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import Artikel from './pages/Artikel';
import RFC2350 from './pages/RFC2350';
import Aduan from './pages/Aduan';
import Panduan from './pages/Panduan';
import Kontak from './pages/Kontak';
import LoginAdmin from './pages/LoginAdmin';
import AdminDashboard from './pages/AdminDashboard';
import AdminArtikel from './pages/admin/AdminArtikel';
import AdminTambahArtikel from './pages/admin/AdminTambahArtikel';
import AdminEditArtikel from './pages/admin/AdminEditArtikel';
import AdminLaporan from './pages/admin/AdminLaporan';
import AdminKontak from './pages/admin/AdminKontak';
import AktivasiMember from './pages/AktivasiMember';
import AdminPendaftaran from './pages/admin/AdminPendaftaran';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/rfc2350" element={<RFC2350 />} />
        <Route path="/aduan" element={<Aduan />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/artikel" element={<AdminArtikel />} />
        <Route path="/admin/artikel/tambah" element={<AdminTambahArtikel />} />
        <Route path="/admin/artikel/edit/:id" element={<AdminEditArtikel />} />
        <Route path="/admin/laporan" element={<AdminLaporan />} />
        <Route path="/admin/kontak" element={<AdminKontak />} />
        <Route path="/aktivasi-member" element={<AktivasiMember />} />
        <Route path="/admin/pendaftaran" element={<AdminPendaftaran />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

