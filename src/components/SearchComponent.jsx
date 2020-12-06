import React from 'react'
import "./search.css";
export default function SearchComponent() {
    return (
        <div className="searchForm">
           <h1>What is the weather like in...</h1>
            <input className="searchField" placeholder="Type Location"></input>
            <button className="searchButton" onClick={() =>console.log("clicking works")}>Search</button>
        </div>
    )
}
