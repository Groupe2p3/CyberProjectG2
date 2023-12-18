import React from 'react';

//define a function 

const Searchbar = () => {

    return (
        <div class="search-inputs">
            <input type="text" placeholder="Research..."></input>
            <label for="lstType">Type : </label>
            <select type="select" id="lstType" />
            <label for="lstOrigine">Origin : </label>
            <select type="select" id="lstOrigine" />
            <div className="btnContainer">
                <button>Research</button>
            </div>
        </div>
    );

};

export default Searchbar;