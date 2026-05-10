import React from 'react';
import './PopUpWA.css';

const PopUpWA = ({ isOpen, onClose, onConfirm, phoneNumber, message }) => {
  if (!isOpen) return null;

  return (
    <div className="popupwa-overlay">
      <div className="popupwa-container">
        <div className="popupwa-icon">💬</div>
        <h3 className="popupwa-title">Hubungi via WhatsApp</h3>
        <p className="popupwa-message">
          Anda akan diarahkan ke WhatsApp untuk melaporkan insiden keamanan siber.
          <br />
          <strong>{phoneNumber}</strong>
        </p>
        <p className="popupwa-note">
          ⚡ Laporan darurat akan segera diproses oleh tim TTIS-WEB
        </p>
        <div className="popupwa-buttons">
          <button className="popupwa-btn popupwa-btn-cancel" onClick={onClose}>
            ❌ Batal
          </button>
          <button className="popupwa-btn popupwa-btn-confirm" onClick={onConfirm}>
            💬 Lanjut ke WA
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpWA;