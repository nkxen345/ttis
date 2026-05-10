import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import '../Pages.css';

const AdminPendaftaran = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [generatedCode, setGeneratedCode] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await api.get('/admin/member-applications');
            setApplications(response.data.data || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (id) => {
        try {
            const response = await api.post(`/admin/member-applications/${id}/approve`);
            if (response.data.success) {
                setGeneratedCode({
                    id: id,
                    code: response.data.code,
                    email: response.data.email,
                    nama: response.data.nama
                });
                fetchApplications();
            }
        } catch (error) {
            alert('Gagal menyetujui pengajuan');
        }
    };

    const handleReject = async (id) => {
        if (window.confirm('Yakin ingin menolak pengajuan ini?')) {
            try {
                await api.post(`/admin/member-applications/${id}/reject`);
                fetchApplications();
                alert('Pengajuan ditolak');
            } catch (error) {
                alert('Gagal menolak pengajuan');
            }
        }
    };

    const getStatusBadge = (status) => {
        const classes = {
            pending: 'status-pending',
            approved: 'status-approved',
            rejected: 'status-rejected'
        };
        const labels = {
            pending: '⏳ Menunggu',
            approved: '✅ Disetujui',
            rejected: '❌ Ditolak'
        };
        return <span className={`status-badge ${classes[status]}`}>{labels[status]}</span>;
    };

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h1>📋 Pengajuan Bergabung TTIS Bontang</h1>
                <div className="header-buttons">
                    <button className="btn-dashboard" onClick={() => navigate('/admin/dashboard')}>
                        ← Kembali ke Dashboard
                    </button>
                </div>
            </div>

            {/* Modal Kode Aktivasi */}
            {generatedCode && (
                <div className="code-modal-overlay">
                    <div className="code-modal">
                        <div className="code-modal-header">
                            <span className="code-icon">🎉</span>
                            <button className="code-modal-close" onClick={() => setGeneratedCode(null)}>✕</button>
                        </div>
                        <div className="code-modal-body">
                            <h3>Kode Aktivasi Berhasil Dibuat!</h3>
                            <p>Kirimkan kode ini ke calon member:</p>
                            <div className="code-display">
                                <span className="code-label">Kode Aktivasi:</span>
                                <span className="code-value">{generatedCode.code}</span>
                            </div>
                            <div className="member-info">
                                <p><strong>Nama:</strong> {generatedCode.nama}</p>
                                <p><strong>Email:</strong> {generatedCode.email}</p>
                            </div>
                            <p className="code-expiry">⏰ Kode berlaku selama 7 hari</p>
                            <div className="code-modal-buttons">
                                <button 
                                    className="btn-copy-code" 
                                    onClick={() => {
                                        navigator.clipboard.writeText(generatedCode.code);
                                        alert('Kode berhasil disalin!');
                                    }}
                                >
                                    📋 Salin Kode
                                </button>
                                <button className="btn-close-modal" onClick={() => setGeneratedCode(null)}>
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>No HP</th>
                            <th>Alasan</th>
                            <th>Tgl Daftar</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.nama}</td>
                                <td>{item.email}</td>
                                <td>{item.no_hp}</td>
                                <td>{item.alasan?.substring(0, 50)}...</td>
                                <td>{new Date(item.created_at).toLocaleDateString('id-ID')}</td>
                                <td>{getStatusBadge(item.status)}</td>
                                <td className="action-buttons">
                                    {item.status === 'pending' && (
                                        <>
                                            <button className="btn-approve" onClick={() => handleApprove(item.id)}>
                                                ✅ Setujui
                                            </button>
                                            <button className="btn-reject" onClick={() => handleReject(item.id)}>
                                                ❌ Tolak
                                            </button>
                                        </>
                                    )}
                                    {item.status === 'approved' && (
                                        <span className="approved-text">✓ Sudah disetujui</span>
                                    )}
                                    {item.status === 'rejected' && (
                                        <span className="rejected-text">✗ Ditolak</span>
                                    )}
                                    <button 
                                        className="btn-view-detail" 
                                        onClick={() => alert(
                                            `📋 Detail Pengajuan\n\n` +
                                            `Nama: ${item.nama}\n` +
                                            `Email: ${item.email}\n` +
                                            `No HP: ${item.no_hp}\n` +
                                            `Alamat: ${item.alamat || '-'}\n\n` +
                                            `Alasan Bergabung:\n${item.alasan}`
                                        )}
                                    >
                                        📄 Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {applications.length === 0 && (
                    <div className="empty-data">Belum ada pengajuan bergabung</div>
                )}
            </div>
        </div>
    );
};

export default AdminPendaftaran;