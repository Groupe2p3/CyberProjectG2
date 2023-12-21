import React from 'react';

//define a function 

const Forms = ({ dataForms }) => {

    return (

        <div className="forms">
            <div className="btnContainer">
                {dataForms.map((dataForm) => (
                    <button key={dataForm.id}>{dataForm.TypeForm} : {dataForm.Description}</button>
                ))}
            </div>
        </div>);

};

export default Forms;