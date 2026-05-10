import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import '../Pages.css';

const AdminArtikel = () => {
    const [artikels, setArtikels] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchArtikels();
    }, []);

    const fetchArtikels = async () => {
        try {
            const response = await api.get('/artikel');
            setArtikels(response.data.data || response.data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Yakin ingin menghapus artikel ini?')) {
            try {
                await api.delete(`/artikel/${id}`);
                fetchArtikels();
                alert('Artikel berhasil dihapus');
            } catch (error) {
                alert('Gagal menghapus artikel');
            }
        }
    };

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h1>📝 Kelola Artikel</h1>
                <button className="btn-add" onClick={() => navigate('/admin/artikel/tambah')}>
                    + Tambah Artikel Baru
                </button>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Judul</th>
                            <th>Tanggal</th>
                            <th>Kategori</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artikels.map(artikel => (
                            <tr key={artikel.id}>
                                <td>{artikel.id}</td>
                                <td>{artikel.judul}</td>
                                <td>{artikel.tanggal}</td>
                                <td>{artikel.kategori || '-'}</td>
                                <td className="action-buttons">
                                    <button className="btn-edit" onClick={() => navigate(`/admin/artikel/edit/${artikel.id}`)}>
                                        ✏️ Edit
                                    </button>
                                    <button className="btn-delete" onClick={() => handleDelete(artikel.id)}>
                                        🗑️ Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminArtikel;