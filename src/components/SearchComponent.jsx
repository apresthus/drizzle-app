import React from 'react'
import "./search.css";
export default function SearchComponent() {
    return (
        <div className="searchForm">
           <h1>What is the weather like in...</h1>
            <input placeholder="Type Location"></input>
            <button>Search</button>
        </div>
    )
}
