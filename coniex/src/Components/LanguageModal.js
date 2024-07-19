import React, { useState } from 'react';
// import './LanguageModal.scss';

const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

const LanguageModal = ({ showModal, onClose, onSelectLanguage }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Select a Language</h2>
        <ul>
          {languages.map((language) => (
            <li key={language} onClick={() => onSelectLanguage(language)}>
              {language}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LanguageModal;
