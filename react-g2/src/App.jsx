import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Profil from './components/Profil';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Searchbar from './components/Searchbar';
import Forms from './components/Forms';
import { useLoaderData } from 'react-router-dom';
import './App.css';

import dataForms from './data/dataForms.json';

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState(null);

  const solutions = useLoaderData().solutionsData;

  useEffect(() => {
    setTableData(solutions);
    setFormData(dataForms);
  }, [solutions]);

  useEffect(() => {
    updateTableData(solutions);
  }, [solutions, sortBy, sortOrder]);

  const updateTableData = (newData) => {
    let sortedData = [...newData];
    if (sortBy) {
      sortedData.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      });
    }
    setTableData(sortedData);
  };

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} onClick={() => handlePageChange(i)}>
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <h1>Cybersecurity Solutions</h1>
          <div className="search">
            <Searchbar
              setTableData={setTableData}
              solutions={solutions}
              setSortBy={setSortBy}
              setSortOrder={setSortOrder}
            />
          </div>
          <Table dataTable={currentItems} setSortBy={setSortBy} setSortOrder={setSortOrder} />
          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            <ul>{renderPageNumbers()}</ul>
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          </div>
          <SignUp />
          <Login />
          <Forms dataForms={formData} />
        </div>
      </div>
    </div>
  );
};

export default App;
