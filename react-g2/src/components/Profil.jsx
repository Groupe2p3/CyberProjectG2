// Profil.jsx
import React from 'react';

const Profil = () => {
  // Informations fictives de l'utilisateur
  const userInfo = {
    nom: 'John Doe',
    email: 'john.doe@example.com',
    pays: 'France',
  };

  // Informations fictives de l'entreprise
  const companyInfo = {
    nom: 'ABC Cybersecurity',
    solutions: ['Firewall', 'Antivirus', 'SIEM'],
    siegeSocial: 'Paris, France',
  };

  return (
    <div className="profil-container">
      <div className="user-info">
        <h2>User Information</h2>
        <p><strong>Name:</strong> {userInfo.nom}</p>
        <p><strong>E-mail:</strong> {userInfo.email}</p>
        <p><strong>Country:</strong> {userInfo.pays}</p>
      </div>
      <div className="company-info">
        <h2>Company Information</h2>
        <p><strong>Name:</strong> {companyInfo.nom}</p>
        <p><strong>List of solutions:</strong> {companyInfo.solutions.join(', ')}</p>
        <p><strong>Headquarters:</strong> {companyInfo.siegeSocial}</p>
      </div>
    </div>
  );
};

export default Profil;
