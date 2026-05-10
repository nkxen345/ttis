import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import './Pages.css';

const AktivasiMember = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await api.post('/member/activate', { email, code });
            if (response.data.success) {
                setMessage('✅ Selamat! Akun Anda telah menjadi member TTIS Bontang.');
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            }
        } catch (error) {
            setMessage('❌ Kode aktivasi salah atau sudah kadaluarsa. Hubungi admin.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>Aktivasi Member TTIS Bontang</h1>
                    <p>Masukkan kode aktivasi yang diberikan oleh admin</p>
                </div>
            </div>

            <section className="page-section">
                <div className="container">
                    <div className="activation-form-container">
                        <div className="activation-icon-large">🔐</div>
                        <h2>Aktivasi Akun Member</h2>
                        <p className="activation-desc">
                            Anda telah diterima menjadi member TTIS Bontang?<br />
                            Masukkan kode aktivasi yang diberikan admin untuk mengaktifkan akun Anda.
                        </p>
                        
                        {message && <div className={`activation-message ${message.includes('✅') ? 'success' : 'error'}`}>{message}</div>}
                        
                        <form onSubmit={handleSubmit} className="activation-form">
                            <div className="form-group">
                                <label>Email Anda</label>
                                <input
                                    type="email"
                                    placeholder="Masukkan email yang digunakan saat mendaftar"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Kode Aktivasi</label>
                                <input
                                    type="text"
                                    placeholder="Masukkan kode dari admin"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-activate" disabled={loading}>
                                {loading ? 'Memproses...' : 'Aktivasi Member'}
                            </button>
                        </form>
                        
                        <p className="activation-help">
                            Belum punya kode? <a href="/kontak">Ajukan bergabung terlebih dahulu</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AktivasiMember;