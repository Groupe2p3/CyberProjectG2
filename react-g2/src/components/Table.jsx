import React from 'react';

const Table = ({ dataTable, setSortBy, setSortOrder }) => {
  const handleSort = (columnName) => {
    setSortBy(columnName);
    setSortOrder('asc');
  };

  return (
    <div className="table-container">
      {dataTable.length > 0 ? (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Types</th>
              <th onClick={() => handleSort('Price')} className='price'>Price</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((item) => (
              <tr key={item.Id}>
                <td>{item.SolutionName}</td>
                <td>{item.CompanyName}</td>
                <td>{item.TypeForm}</td>
                <td>{item.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
            <th>Name</th>
              <th>Company</th>
              <th>Types</th>
              <th onClick={() => handleSort('Price')} className='price'>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">Aucune donnée trouvée</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
