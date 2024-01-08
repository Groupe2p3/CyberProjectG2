import { useLoaderData } from "react-router-dom";

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

//define a function 

const Forms = () => {
    const forms = useLoaderData();

    console.log(forms.data);

    return (
        <div>
            <Navbar />
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <h1>Mes formulaires</h1>
                    <div className="forms">
                        <div className="btnContainer">
                            {forms.data.map((dataForm) => (
                                <form action={`/Form/${dataForm.id}`}>
                                    <button type="submit">
                                        {dataForm.nom} : {dataForm.description}
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