import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import PopUpWA from '../components/PopUpWA';
import './Pages.css';

const Kontak = () => {
    const navigate = useNavigate();
    const [showWA, setShowWA] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        nama: '',
        email: '',
        no_hp: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    const waNumber = "082288885678";

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await api.post('/member/apply', form);
            setMessage('✅ Pengajuan berhasil dikirim! Admin akan memproses dalam 2x24 jam.');
            setForm({ nama: '', email: '', no_hp: '' });
            setShowForm(false);
            setTimeout(() => setMessage(''), 5000);
        } catch (error) {
            setMessage('❌ Gagal mengirim pengajuan. Silakan coba lagi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>Hubungi Kami</h1>
                    <p>Silakan hubungi TTIS-WEB untuk bantuan atau konsultasi</p>
                </div>
            </div>

            <section className="page-section">
                <div className="container">
                    {/* KONTAK UTAMA (Alamat, Telepon, Email, WA, Map) */}
                    <div className="kontak-grid">
                        <div className="kontak-info">
                            <div className="info-card">
                                <div className="info-icon">📍</div>
                                <h3>Alamat Kantor</h3>
                                <p>Dinas Komunikasi dan Informatika Kota Bontang<br/>
                                Jl. Untung Surapati No. 20, Bontang<br/>
                                Kalimantan Timur, 75313</p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">📞</div>
                                <h3>Telepon</h3>
                                <p>Kantor: (0548) 5116504<br/>
                                Darurat 24 jam: 0822-8888-5678</p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">✉️</div>
                                <h3>Email</h3>
                                <p>csirt@bontangkota.go.id<br/>
                                admin@ttis.com</p>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">💬</div>
                                <h3>WhatsApp</h3>
                                <p>Layanan Darurat 24 Jam</p>
                                <button className="btn-wa" onClick={() => setShowWA(true)}>
                                    💬 Chat via WhatsApp
                                </button>
                            </div>
                        </div>

                        <div className="kontak-map">
                            <h3>Lokasi Kami</h3>
                            <div className="map-placeholder">
                                <iframe
                                    title="Peta Lokasi Dinas Kominfo Bontang"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8075884346497!2d117.4447938!3d0.0696644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320a0eac31299e45%3A0xa8a3363b8d700a0f!2sDinas%20Komunikasi%20dan%20Informatika%20Kota%20Bontang!5e0!3m2!1sid!2sid!4v1712345678901!5m2!1sid!2sid"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                                <p className="map-caption">📍 Jl. Untung Surapati No. 20, Bontang, Kalimantan Timur</p>
                            </div>
                        </div>
                    </div>

                    {/* Aktivasi Member - di bawah kontak */}
                    <div className="activation-section">
                        <div className="activation-box">
                            <div className="activation-icon">🔑</div>
                            <div className="activation-content">
                                <h3>Sudah Mendapat Kode Aktivasi?</h3>
                                <p>Masukkan kode yang diberikan oleh admin untuk mengaktifkan akun member Anda.</p>
                                <button className="btn-activation" onClick={() => navigate('/aktivasi-member')}>
                                    Aktivasi Member →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* INGIN BERGABUNG - di paling bawah setelah Aktivasi */}
                    <div className="join-info-box">
                        <div className="join-icon">👥</div>
                        <div className="join-content">
                            <h3>Ingin Bergabung dengan TTIS Bontang?</h3>
                            <p>
                                TTIS Bontang (Tim Tanggap Insiden Siber) membuka kesempatan bagi Anda yang ingin 
                                berkontribusi dalam menjaga keamanan siber Pemerintah Kota Bontang.
                            </p>
                            <p className="join-requirements">
                                <strong>Persyaratan:</strong>
                            </p>
                            <ul>
                                <li>✔️ Memiliki pengetahuan dasar tentang keamanan siber</li>
                                <li>✔️ Berdomisili di Kota Bontang atau sekitarnya</li>
                                <li>✔️ Bersedia mengikuti pelatihan dan sertifikasi</li>
                                <li>✔️ Memiliki dedikasi tinggi terhadap keamanan siber</li>
                            </ul>
                            
                            {!showForm ? (
                                <button className="btn-join" onClick={() => setShowForm(true)}>
                                    📝 Ajukan Bergabung
                                </button>
                            ) : (
                                <form onSubmit={handleSubmit} className="join-form">
                                    <h4>Form Pengajuan Bergabung</h4>
                                    <input
                                        type="text"
                                        name="nama"
                                        placeholder="Nama Lengkap *"
                                        value={form.nama}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email *"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="no_hp"
                                        placeholder="Nomor HP/WA *"
                                        value={form.no_hp}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="form-buttons">
                                        <button type="submit" className="btn-submit" disabled={loading}>
                                            {loading ? 'Mengirim...' : 'Kirim Pengajuan'}
                                        </button>
                                        <button type="button" className="btn-cancel-form" onClick={() => setShowForm(false)}>
                                            Batal
                                        </button>
                                    </div>
                                </form>
                            )}
                            
                            {message && <div className="join-message">{message}</div>}
                            
                            <p className="join-note">
                                * Pengajuan akan diproses oleh admin maksimal 2x24 jam
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pop Up WhatsApp */}
            <PopUpWA 
                isOpen={showWA}
                onClose={() => setShowWA(false)}
                onConfirm={() => {
                    setShowWA(false);
                    window.open(`https://wa.me/${waNumber}`, '_blank');
                }}
                phoneNumber={waNumber}
            />
        </div>
    );
};

export default Kontak;