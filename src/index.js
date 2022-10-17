import React from "react";
import ReactDOM  from "react-dom";
import { useState } from "react";
import './Style.css';
import SearchResults from "./components/SearchResults/search-r"

function App () {

    const [data, setData] = useState([]);

    const handleInputChange = (e) => {
        e.preventDefault ();
        const {value} = e.target;
        
        if (!value) return;

        const url = `https://rickandmortyapi.com/api/character/?name=${value}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {setData(data)});    
    };

    
    console.log ('Data', data);
    
    return (
        <div className = 'container'>
            <form>
                <label htmlFor="search">Digitar o nome de algum personagem Rick and Morty</label>
                <input name="search" id="search" onChange={handleInputChange}/>
            </form>
            <SearchResults data = {data} />
        </div>
    );
};

const container = document.getElementById("root");
container ? ReactDOM.render (<App/>, container) : false;