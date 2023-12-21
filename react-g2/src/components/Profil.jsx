// Profil.jsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


// prendre les composants Navbar et Sidebar et les importer dans Profil.jsx
// créer ensuite Profil qui est un composant qui affiche les infos de l'utilisateur
// et qui contient Navbar et Sidebar

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
    <div>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <div className="profil-container">
            <div className="user-info">
              <h2>Informations de l'utilisateur</h2>
              <p><strong>Nom:</strong> {userInfo.nom}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Pays:</strong> {userInfo.pays}</p>
            </div>
            <div className="company-info">
              <h2>Informations de l'entreprise</h2>
              <p><strong>Nom:</strong> {companyInfo.nom}</p>
              <p><strong>Liste des solutions:</strong> {companyInfo.solutions.join(', ')}</p>
              <p><strong>Siège social:</strong> {companyInfo.siegeSocial}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
