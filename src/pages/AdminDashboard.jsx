import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/admin-login');
        }
    }, []);

    const menuItems = [
        { path: '/admin/artikel', icon: '📝', label: 'Kelola Artikel', desc: 'Tambah, edit, atau hapus artikel' },
        { path: '/admin/laporan', icon: '📋', label: 'Kelola Laporan', desc: 'Lihat dan update status laporan insiden' },
        { path: '/admin/kontak', icon: '📞', label: 'Kelola Kontak', desc: 'Update informasi kontak website' }
    ];

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <h1>📊 Dashboard Admin TTIS-WEB</h1>
                <div className="admin-info">
                    <span className="admin-welcome">👋 Halo, {user.name}</span>
                    <button onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                        navigate('/');
                        window.location.reload();
                    }} className="btn-logout">🚪 Logout</button>
                </div>
            </div>

            <div className="admin-stats">
                <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <div className="stat-number">1</div>
                    <div className="stat-label">Total Admin</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">📰</div>
                    <div className="stat-number">0</div>
                    <div className="stat-label">Total Artikel</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">📋</div>
                    <div className="stat-number">0</div>
                    <div className="stat-label">Laporan Masuk</div>
                </div>
            </div>

            <div className="admin-menu">
                <h2>Menu Kelola Website</h2>
                <div className="menu-grid">
                    {menuItems.map((item, index) => (
                        <div key={index} className="menu-card" onClick={() => navigate(item.path)}>
                            <div className="menu-icon">{item.icon}</div>
                            <h3>{item.label}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;