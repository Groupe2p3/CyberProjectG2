// App.js
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import dataTable from './data/dataTable.json';
import Profil from './components/Profil';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';

const App = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // permet d'enregistrer les données de dataTable.json dans le state tableData
    setTableData(dataTable);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <h1>Cybersecurity Solutions</h1>
          <Table dataTable={tableData} />
        </div>
      </div>
    </div>
  );
};

export default App;
