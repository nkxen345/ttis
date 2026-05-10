import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import '../Pages.css';

const AdminLaporan = () => {
    const [laporans, setLaporans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLaporans();
    }, []);

    const fetchLaporans = async () => {
        try {
            const response = await api.get('/laporan');
            setLaporans(response.data.data || response.data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id, status) => {
        try {
            await api.put(`/laporan/${id}/status`, { status });
            fetchLaporans();
            alert('Status berhasil diupdate');
        } catch (error) {
            alert('Gagal mengupdate status');
        }
    };

    const getStatusBadge = (status) => {
        const classes = {
            baru: 'status-baru',
            diproses: 'status-diproses',
            selesai: 'status-selesai'
        };
        return <span className={`status-badge ${classes[status]}`}>{status}</span>;
    };

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h1>📋 Kelola Laporan Insiden</h1>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Tiket</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Telepon</th>
                            <th>Instansi</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {laporans.map(laporan => (
                            <tr key={laporan.id}>
                                <td><strong>{laporan.tiket}</strong></td>
                                <td>{laporan.nama}</td>
                                <td>{laporan.email}</td>
                                <td>{laporan.telepon}</td>
                                <td>{laporan.instansi || '-'}</td>
                                <td>{getStatusBadge(laporan.status)}</td>
                                <td className="action-buttons">
                                    <select 
                                        className="status-select"
                                        value={laporan.status}
                                        onChange={(e) => updateStatus(laporan.id, e.target.value)}
                                    >
                                        <option value="baru">Baru</option>
                                        <option value="diproses">Diproses</option>
                                        <option value="selesai">Selesai</option>
                                    </select>
                                    <button 
                                        className="btn-view" 
                                        onClick={() => alert(`Detail: ${laporan.deskripsi}`)}
                                    >
                                        📄 Lihat
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

export default AdminLaporan;