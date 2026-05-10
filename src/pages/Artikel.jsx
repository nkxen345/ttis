import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import './Pages.css';

const Artikel = () => {
    const [artikels, setArtikels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Semua');

    // Ambil data dari backend Laravel
    useEffect(() => {
        const fetchArtikels = async () => {
            try {
                const response = await api.get('/artikel');
                console.log('Data dari backend:', response.data);
                
                // Sesuaikan dengan struktur response dari backend
                let dataArtikel = [];
                if (response.data && response.data.success) {
                    dataArtikel = response.data.data || [];
                } else if (Array.isArray(response.data)) {
                    dataArtikel = response.data;
                } else {
                    dataArtikel = [];
                }
                
                setArtikels(dataArtikel);
            } catch (err) {
                console.error('Error fetching artikel:', err);
                setError('Gagal memuat artikel');
                setArtikels([]);
            } finally {
                setLoading(false);
            }
        };

        fetchArtikels();
    }, []);

    // Filter artikel (AMAN - pakai optional chaining)
    const filteredArtikels = (artikels || []).filter(artikel => {
        const searchLower = (searchTerm || '').toLowerCase();
        const matchesSearch = (artikel.judul || '').toLowerCase().includes(searchLower) ||
                              (artikel.excerpt || '').toLowerCase().includes(searchLower);
        const matchesCategory = selectedCategory === 'Semua' || artikel.kategori === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Ambil unique categories (AMAN)
    const categories = Array.isArray(artikels) && artikels.length > 0
        ? ['Semua', ...new Set(artikels.map(a => a.kategori).filter(Boolean))]
        : ['Semua'];

    if (loading) {
        return (
            <div className="page-container">
                <div className="page-header">
                    <div className="container">
                        <h1>Artikel & Berita</h1>
                        <p>Memuat data...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-container">
                <div className="page-header">
                    <div className="container">
                        <h1>Artikel & Berita</h1>
                        <p style={{ color: 'red' }}>{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>Artikel & Berita</h1>
                    <p>Informasi terbaru seputar keamanan siber dan kegiatan TTIS-WEB</p>
                </div>
            </div>

            <section className="page-section">
                <div className="container">
                    {/* Search Section */}
                    <div className="search-section">
                        <div className="search-bar">
                            <span className="search-icon">🔍</span>
                            <input 
                                type="text" 
                                placeholder="Cari artikel..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        <div className="category-filters">
                            {categories.map(cat => (
                                <button 
                                    key={cat}
                                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Result Count */}
                    <div className="result-count">
                        Menampilkan {filteredArtikels.length} dari {artikels.length} artikel
                    </div>

                    {/* Daftar Artikel dari BACKEND */}
                    <div className="articles-list">
                        {filteredArtikels.map((artikel) => (
                            <div key={artikel.id} className="article-item">
                                <div className="article-header">
                                    <div className="article-title-row">
                                        <h2>{artikel.judul}</h2>
                                    </div>
                                    <div className="article-meta">
                                        <span className="article-date">📅 {artikel.tanggal}</span>
                                        <span className="article-category">📂 {artikel.kategori}</span>
                                    </div>
                                </div>
                                <div className="article-excerpt">
                                    <p>{artikel.excerpt}</p>
                                </div>
                                <button className="btn-read-more">Baca Selengkapnya →</button>
                            </div>
                        ))}
                    </div>

                    {filteredArtikels.length === 0 && (
                        <div className="no-results">
                            <p>Tidak ada artikel yang ditemukan untuk "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Artikel;