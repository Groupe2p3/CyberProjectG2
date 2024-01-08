import React, { useState, useEffect } from 'react';

const Searchbar = ({ setTableData, solutions, setSortBy, setSortOrder }) => {
  const [types, setTypes] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [selectedType, setSelectedType] = useState('Tout');
  const [selectedOrigin, setSelectedOrigin] = useState('Tout');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/homepage/types')
      .then(response => response.json())
      .then(data => setTypes(data));

    fetch('http://localhost:3000/homepage/companies')
      .then(response => response.json())
      .then(data => setOrigins(data));
  }, []);

  const handleSearch = () => {
    let apiUrl = 'http://localhost:3000/homepage/solutions';
  
    if (selectedType !== 'Tout') {
      apiUrl = `http://localhost:3000/homepage/types/${selectedType}`;
    } else if (selectedOrigin !== 'Tout') {
      apiUrl = `http://localhost:3000/homepage/companies/${selectedOrigin}`;
    } else if (searchTerm !== '') {
      apiUrl = `http://localhost:3000/homepage/search/${searchTerm}`;
    }
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setTableData(data);
        } else {
          // la réponse est vide, on fait un colspan sur le tableau et on affiche un message 'aucune donnée trouvée' dans le tableau
          setTableData([]);
        }
      })
      .catch(error => {
        console.error("Erreur lors de la recherche :", error);
        // Gérer les erreurs de requête ici
      });
  };  

  return (
    <div className="search-inputs">
      <input
        type="text"
        placeholder="Recherche..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label htmlFor="lstType">Type : </label>
      <select
        type="select"
        id="lstType"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option>Tout</option>
        {types.map((type) => (
          <option key={type.IdFormAnswer}>{type.TypeForm}</option>
        ))}
      </select>
      <label htmlFor="lstOrigine">Origine : </label>
      <select
        type="select"
        id="lstOrigine"
        value={selectedOrigin}
        onChange={(e) => setSelectedOrigin(e.target.value)}
      >
        <option>Tout</option>
        {origins.map((origin) => (
          <option key={origin.IdCompany}>{origin.CompanyName}</option>
        ))}
      </select>
      <div className="btnContainer">
        <button onClick={handleSearch}>Recherche</button>
      </div>
    </div>
  );
};

export default Searchbar;
