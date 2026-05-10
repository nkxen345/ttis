import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/axios';
import '../Pages.css';

const AdminEditArtikel = () => {
    const { id } = useParams();
    const [form, setForm] = useState({
        judul: '',
        tanggal: '',
        kategori: '',
        excerpt: '',
        konten: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchArtikel();
    }, []);

    const fetchArtikel = async () => {
        try {
            const response = await api.get(`/artikel/${id}`);
            const data = response.data.data || response.data;
            setForm({
                judul: data.judul || '',
                tanggal: data.tanggal || '',
                kategori: data.kategori || '',
                excerpt: data.excerpt || '',
                konten: data.konten || ''
            });
        } catch (error) {
            alert('Artikel tidak ditemukan');
            navigate('/admin/artikel');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            await api.put(`/artikel/${id}`, form);
            alert('Artikel berhasil diupdate!');
            navigate('/admin/artikel');
        } catch (error) {
            alert('Gagal mengupdate artikel');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h1>✏️ Edit Artikel</h1>
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
                        <input type="text" name="kategori" value={form.kategori} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Ringkasan (Excerpt) *</label>
                        <textarea name="excerpt" rows="4" value={form.excerpt} onChange={handleChange} required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Isi Artikel (Konten) *</label>
                        <textarea name="konten" rows="10" value={form.konten} onChange={handleChange} required></textarea>
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="btn-save" disabled={saving}>
                            {saving ? 'Menyimpan...' : '💾 Update Artikel'}
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

export default AdminEditArtikel;