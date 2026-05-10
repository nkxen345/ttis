import React, { useState } from 'react';
import PopUpWA from '../components/PopUpWA';
import './Pages.css';

const Panduan = () => {
  const [showWA, setShowWA] = useState(false);

  const waNumber = "082288885678";
  const waMessage = "Halo CSIRT-WEB, saya membutuhkan bantuan terkait keamanan siber: ";

  const guides = [
    { 
      title: "Panduan Keamanan Email", 
      icon: "📧", 
      desc: "Cara mengenali email phishing dan menjaga keamanan email.",
      steps: [
        "Jangan pernah klik tautan mencurigakan dalam email",
        "Periksa alamat pengirim dengan teliti",
        "Jangan lampirkan password melalui email",
        "Gunakan filter spam yang baik"
      ]
    },
    { 
      title: "Panduan Keamanan Password", 
      icon: "🔐", 
      desc: "Tips membuat password yang kuat dan aman.",
      steps: [
        "Gunakan minimal 12 karakter",
        "Kombinasikan huruf besar, kecil, angka, dan simbol",
        "Jangan gunakan password yang sama untuk akun berbeda",
        "Gunakan password manager"
      ]
    },
    { 
      title: "Panduan Keamanan WiFi", 
      icon: "📶", 
      desc: "Cara mengamankan jaringan WiFi dari serangan.",
      steps: [
        "Ganti password default router",
        "Aktifkan enkripsi WPA2/WPA3",
        "Sembunyikan SSID jaringan",
        "Nonaktifkan WPS"
      ]
    },
    { 
      title: "Panduan Backup Data", 
      icon: "💾", 
      desc: "Prosedur backup data yang benar dan teratur.",
      steps: [
        "Lakukan backup secara rutin (minimal 1 minggu sekali)",
        "Gunakan aturan 3-2-1 (3 salinan, 2 media berbeda, 1 offsite)",
        "Verifikasi backup secara berkala",
        "Enkripsi data backup yang sensitif"
      ]
    },
    { 
      title: "Panduan Respons Insiden", 
      icon: "⚡", 
      desc: "Langkah-langkah saat mengalami insiden keamanan siber.",
      steps: [
        "Identifikasi dan dokumentasikan insiden",
        "Isolasi sistem yang terinfeksi",
        "Jangan mematikan sistem (biarkan untuk forensik)",
        "Laporkan ke CSIRT-WEB segera"
      ]
    },
    { 
      title: "Cek Kerentanan Sistem", 
      icon: "🔍", 
      desc: "Panduan melakukan assessment keamanan dasar.",
      steps: [
        "Update sistem dan software secara rutin",
        "Lakukan scanning kerentanan berkala",
        "Audit hak akses pengguna",
        "Pantau log aktivitas mencurigakan"
      ]
    }
  ];

  const handleDownload = (title) => {
    alert(`Mengunduh panduan: ${title}`);
  };

  const handleWAClick = () => {
    setShowWA(true);
  };

  const handleConfirmWA = () => {
    setShowWA(false);
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Panduan Keamanan Siber</h1>
          <p>Panduan praktis dari CSIRT-WEB untuk melindungi diri dari ancaman siber</p>
        </div>
      </div>

      <section className="page-section guides-section">
        <div className="container">
          <div className="guides-intro">
            <p>🔒 Berikut adalah panduan-panduan keamanan siber yang dapat Anda terapkan untuk melindungi data dan sistem Anda dari berbagai ancaman digital.</p>
          </div>
          
          <div className="guides-grid">
            {guides.map((guide, idx) => (
              <div key={idx} className="guide-card">
                <div className="guide-icon">{guide.icon}</div>
                <h3>{guide.title}</h3>
                <p className="guide-desc">{guide.desc}</p>
                <div className="guide-steps">
                  <h4>✅ Langkah-langkah:</h4>
                  <ul>
                    {guide.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="btn-download-guide" 
                  onClick={() => handleDownload(guide.title)}
                >
                  📥 Download PDF Panduan
                </button>
              </div>
            ))}
          </div>

          {/* BAGIAN SOS / BUTUH BANTUAN - GANTI DENGAN TOMBOL WA */}
          <div className="help-section">
            <div className="help-icon">🆘</div>
            <div className="help-content">
              <h3>Membutuhkan Bantuan Langsung?</h3>
              <p>Jika Anda mengalami insiden keamanan siber atau membutuhkan bantuan segera,</p>
              <p>Silahkan hubungi tim CSIRT-WEB melalui WhatsApp di bawah ini.</p>
              <button className="btn-help-wa" onClick={handleWAClick}>
                💬 Hubungi via WhatsApp
              </button>
              <p className="help-wa-number">📞 Nomor WhatsApp: <strong>0822-8888-5678</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Pop Up WhatsApp */}
      <PopUpWA 
        isOpen={showWA}
        onClose={() => setShowWA(false)}
        onConfirm={handleConfirmWA}
        phoneNumber={waNumber}
        message={waMessage}
      />
    </div>
  );
};

export default Panduan;