import React from 'react';

//define a function 

const Searchbar = () => {
    const types = ['Type A', 'Type B', 'Type C']
    const origins = ['Origin A', 'Origin B', 'Origin C']
    return (
        <div class="search-inputs">
            <input type="text" placeholder="Research..."></input>
            <label for="lstType">Type : </label>
            <select type="select" id="lstType">
                <option>Tout</option>
                {types.map((type) => (
                    <option>{type}</option>
                ))}
            </select>
            <label for="lstOrigine">Origin : </label>
            <select type="select" id="lstOrigine">
                <option>Tout</option>
                {origins.map((origin)=>(
                    <option>{origin}</option>
                ))}
            </select>
            <div className="btnContainer">
                <button>Research</button>
            </div>
        </div>
    );

};

export default Searchbar;