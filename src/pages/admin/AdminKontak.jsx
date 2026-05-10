import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import '../Pages.css';

const AdminKontak = () => {
    const [form, setForm] = useState({
        alamat: '',
        telepon: '',
        email: '',
        jam_operasional: '',
        wa_number: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchKontak();
    }, []);

    const fetchKontak = async () => {
        try {
            const response = await api.get('/kontak');
            const data = response.data.data || response.data;
            setForm({
                alamat: data.alamat || '',
                telepon: data.telepon || '',
                email: data.email || '',
                jam_operasional: data.jam_operasional || '',
                wa_number: data.wa_number || ''
            });
        } catch (error) {
            console.error('Error:', error);
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
            await api.put('/kontak', form);
            alert('Kontak berhasil diupdate!');
        } catch (error) {
            alert('Gagal mengupdate kontak');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h1>📞 Kelola Kontak Website</h1>
            </div>

            <div className="admin-form-container">
                <form onSubmit={handleSubmit} className="admin-form">
                    <div className="form-group">
                        <label>Alamat Kantor</label>
                        <textarea name="alamat" rows="3" value={form.alamat} onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Telepon Kantor</label>
                        <input type="text" name="telepon" value={form.telepon} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email Resmi</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Jam Operasional</label>
                        <input type="text" name="jam_operasional" value={form.jam_operasional} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Nomor WhatsApp (Layanan Darurat)</label>
                        <input type="text" name="wa_number" value={form.wa_number} onChange={handleChange} />
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="btn-save" disabled={saving}>
                            {saving ? 'Menyimpan...' : '💾 Simpan Perubahan'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminKontak;