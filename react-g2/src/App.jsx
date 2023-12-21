// App.js
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import dataTable from './data/dataTable.json';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Searchbar from './components/Searchbar';
import dataForms from './data/dataForms.json';
import dataQuestions from './data/dataQuestions.json';
import Forms from './components/Forms';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState([]);
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    // permet d'enregistrer les données de dataTable.json dans le state tableData
    setTableData(dataTable);
    setFormData(dataForms);
    setQuestionData(dataQuestions);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <h1>Cybersecurity Solutions</h1>
          <div className="search">
            <Searchbar />
          </div>
          <Table dataTable={tableData} />
          <SignUp />
          <Login />
          <Form dataQuestions={questionData} />
        </div>
      </div>
    </div>
  );
};

export default App;
