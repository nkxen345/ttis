import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin = token && user.role === 'admin';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Artikel', path: '/artikel' },
    { name: 'RFC2350', path: '/rfc2350' },
    { name: 'Aduan', path: '/aduan' },
    { name: 'Panduan', path: '/panduan' },
    { name: 'Kontak', path: '/kontak' }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          
          {/* Dashboard - HANYA untuk admin yang sudah login */}
          {isAdmin && (
            <li className="dashboard-nav">
              <Link to="/admin/dashboard" className="dashboard-link">
                📊 Dashboard
              </Link>
            </li>
          )}
          
          {/* Logout - HANYA untuk admin yang sudah login */}
          {isAdmin && (
            <li className="logout-nav">
              <button onClick={handleLogout} className="logout-btn">
                👋 Logout ({user.name})
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;