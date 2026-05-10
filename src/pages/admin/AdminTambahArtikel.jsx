import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import '../Pages.css';

const AdminTambahArtikel = () => {
    const [form, setForm] = useState({
        judul: '',
        tanggal: new Date().toISOString().split('T')[0],
        kategori: '',
        excerpt: '',
        konten: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.post('/artikel', form);
            alert('Artikel berhasil ditambahkan!');
            navigate('/admin/artikel');
        } catch (error) {
            alert('Gagal menambahkan artikel');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h1>✏️ Tambah Artikel Baru</h1>
                <button className="btn-back" onClick={() => navigate('/admin/artikel')}>
                    ← Kembali
                </button>
            </div>

            <div className="admin-form-container">
                <form onSubmit={handleSubmit} className="admin-form">
                    <div className="form-group">
                        <label>Judul Artikel *</label>
                        <input type="text" name="judul" value={form.judul} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Tanggal *</label>
                        <input type="date" name="tanggal" value={form.tanggal} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Kategori</label>
                        <input type="text" name="kategori" value={form.kategori} onChange={handleChange} placeholder="Contoh: Diskominfo, Edukasi, dll" />
                    </div>
                    <div className="form-group">
                        <label>Ringkasan (Excerpt) *</label>
                        <textarea name="excerpt" rows="4" value={form.excerpt} onChange={handleChange} required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Isi Artikel (Konten) *</label>
                        <textarea name="konten" rows="10" value={form.konten} onChange={handleChange} required></textarea>
                        <small>Anda bisa menggunakan HTML untuk formatting</small>
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="btn-save" disabled={loading}>
                            {loading ? 'Menyimpan...' : '💾 Simpan Artikel'}
                        </button>
                        <button type="button" className="btn-cancel" onClick={() => navigate('/admin/artikel')}>
                            Batal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminTambahArtikel;