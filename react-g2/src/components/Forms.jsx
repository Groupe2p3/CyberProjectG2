import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import dataForms from '../data/dataForms.json';

//define a function 

const Forms = () => {

    return (
        <div>
            <Navbar />
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <h1>Mes formulaires</h1>
                    <div className="forms">
                        <div className="btnContainer">
                            {dataForms.map((dataForm) => (
                                <form action={`/Form/${dataForm.id}`}>
                                    <button type="submit">
                                        {dataForm.TypeForm} : {dataForm.Description}
                                    </button>
                                </form>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>);

};

export default Forms;