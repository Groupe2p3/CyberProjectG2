import React from 'react';

const Table = ({ dataTable }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.type}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
